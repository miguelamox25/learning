/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JPanel.java to edit this template
 */
package proyectozapatosirving;

// --- IMPORTACIONES NECESARIAS ---
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.swing.JOptionPane;
import javax.swing.SpinnerNumberModel;
import javax.swing.table.DefaultTableModel;
/**
 *
 * @author INNOVA TEC
 */
public class Vender extends javax.swing.JPanel {
    // --- VARIABLES GLOBALES ---
    private final Connection con;
    private final DefaultTableModel modeloTabla;
    
    // Variables para guardar temporalmente el producto buscado
    private int idProductoActual = -1;
    private int stockActual = 0;
    private double precioActual = 0;

    /**
     * Creates new form Vender
     */
    public Vender() {
        initComponents();
        // 1. Conectar a la BD
        this.con = Conexion.getConexion();
        
        // 2. Obtener el modelo de la tabla para poder manipularla
        this.modeloTabla = (DefaultTableModel) tablaDetalleVenta.getModel();
        
        // 3. Configurar campos no editables
        txtPrecioUnitario.setEditable(false);
        txtStockDisponible.setEditable(false);
        txtSubtotal.setEditable(false);
        txtIVA.setEditable(false);
        txtTotal.setEditable(false);
        btnAgregarProducto.setEnabled(false);
        
        // 4. Iniciar los eventos de los botones
        iniciarEventos();
    }
    /**
     * Agrega los ActionListeners a los botones
     */
    private void iniciarEventos() {
        // --- BOTÃ“N BUSCAR (jButton1) ---
        jButton1.addActionListener(e -> buscarProducto());

        // --- BOTÃ“N AGREGAR PRODUCTO ---
        btnAgregarProducto.addActionListener(e -> agregarProducto());

        // --- BOTÃ“N QUITAR PRODUCTO ---
        btnQuitarProducto.addActionListener(e -> quitarProducto());

        // --- BOTÃ“N REGISTRAR VENTA ---
        btnRegistrarVenta.addActionListener(e -> registrarVenta());
        
        // --- BOTÃ“N CANCELAR VENTA ---
        btnCancelarVenta.addActionListener(e -> limpiarTodo());
    }

    /**
     * Busca un producto en la BD por ID o TÃ­tulo
     */
    private void buscarProducto() {
        String busqueda = txtBuscarProducto.getText().trim();
        if (busqueda.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Ingrese un Codigo o Modelo para buscar.", "Campo vacÃ­o", JOptionPane.WARNING_MESSAGE);
            return;
        }

        String sql = "SELECT CODIGO, MODELO, PRECIO, STOCK FROM ZAPATOS WHERE CODIGO = ? OR MODELO LIKE ?";
        
        try (PreparedStatement ps = con.prepareStatement(sql)) {
            
            int idBusqueda = -1;
            try {
                idBusqueda = Integer.parseInt(busqueda); // Intenta convertir a nÃºmero
            } catch (NumberFormatException e) {
                // No es un número, se tratarÃ¡ como TÃ­tulo
            }

            ps.setInt(1, idBusqueda); // Buscar por ID
            ps.setString(2, "%" + busqueda + "%"); // Buscar por TÃ­tulo

            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    // Producto encontrado, guardamos sus datos
                    this.idProductoActual = rs.getInt("codigo");
                    this.precioActual = rs.getDouble("precio");
                    this.stockActual = rs.getInt("stock");

                    // Mostramos los datos en la UI
                    txtBuscarProducto.setText(rs.getString("modelo")); // Mostramos el nombre real
                    txtPrecioUnitario.setText(String.valueOf(this.precioActual));
                    txtStockDisponible.setText(String.valueOf(this.stockActual));

                    // Configuramos el JSpinner
                    if (this.stockActual > 0) {
                        // El mÃ­nimo es 1, el mÃ¡ximo es el stock disponible
                        spinnerCantidad.setModel(new SpinnerNumberModel(1, 1, this.stockActual, 1));
                        btnAgregarProducto.setEnabled(true);
                    } else {
                        // No hay stock
                        spinnerCantidad.setModel(new SpinnerNumberModel(0, 0, 0, 1));
                        btnAgregarProducto.setEnabled(false);
                        JOptionPane.showMessageDialog(this, "No hay stock disponible para este producto.", "Stock Agotado", JOptionPane.WARNING_MESSAGE);
                    }
                    
                } else {
                    // No se encontrÃ³ el producto
                    JOptionPane.showMessageDialog(this, "Producto no encontrado.", "Búsqueda fallida", JOptionPane.ERROR_MESSAGE);
                    limpiarCamposProducto();
                }
            }
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Error al buscar producto: " + e.getMessage(), "Error SQL", JOptionPane.ERROR_MESSAGE);
            System.err.println("Error en buscarProducto: " + e);
        }
    }

    /**
     * Agrega el producto seleccionado a la tabla de detalle
     */
    private void agregarProducto() {
        if (idProductoActual == -1) {
            JOptionPane.showMessageDialog(this, "Primero busque y seleccione un producto.", "Error", JOptionPane.WARNING_MESSAGE);
            return;
        }

        int cantidad = (int) spinnerCantidad.getValue();
        if (cantidad <= 0) {
            JOptionPane.showMessageDialog(this, "La cantidad debe ser mayor a cero.", "Error", JOptionPane.WARNING_MESSAGE);
            return;
        }

        // Validar si el producto ya estÃ¡ en la tabla
        for (int i = 0; i < modeloTabla.getRowCount(); i++) {
            int idEnTabla = (int) modeloTabla.getValueAt(i, 0); // Columna 0 = CÃ“DIGO
            if (idEnTabla == idProductoActual) {
                JOptionPane.showMessageDialog(this, "El producto ya está en la lista. Quí­telo si desea modificar la cantidad.", "Producto duplicado", JOptionPane.WARNING_MESSAGE);
                return;
            }
        }

        // Calcular importe
        double importe = cantidad * this.precioActual;

        // Agregar a la tabla
        modeloTabla.addRow(new Object[]{
            this.idProductoActual,       // CÃ“DIGO (Col 0)
            txtBuscarProducto.getText(), // PRODUCTO (Col 1)
            cantidad,                    // CANTIDAD (Col 2)
            this.precioActual,           // PRECIO (Col 3)
            importe                      // IMPORTE (Col 4)
        });

        // Actualizar los totales
        calcularTotales();
        
        // Limpiar campos del producto
        limpiarCamposProducto();
    }

    /**
     * Quita un producto seleccionado de la tabla
     */
    private void quitarProducto() {
        int filaSeleccionada = tablaDetalleVenta.getSelectedRow();
        
        if (filaSeleccionada >= 0) {
            modeloTabla.removeRow(filaSeleccionada);
            // Recalcular totales despuÃ©s de quitar
            calcularTotales();
        } else {
            JOptionPane.showMessageDialog(this, "Seleccione un producto de la lista para quitar.", "Error", JOptionPane.WARNING_MESSAGE);
        }
    }

    /**
     * Recalcula el Subtotal, IVA y Total basÃ¡ndose en la tabla
     */
    private void calcularTotales() {
        double subtotal = 0;
        
        for (int i = 0; i < modeloTabla.getRowCount(); i++) {
            double importe = (double) modeloTabla.getValueAt(i, 4); // Columna 4 = IMPORTE
            subtotal += importe;
        }
        
        double iva = subtotal * 0.16; // 16% de IVA
        double total = subtotal + iva;

        // Formatear a 2 decimales
        txtSubtotal.setText(String.format("%.2f", subtotal));
        txtIVA.setText(String.format("%.2f", iva));
        txtTotal.setText(String.format("%.2f", total));
    }

    /**
     * Registra la venta en la base de datos (ventas y detalle_ventas)
     * y actualiza el stock en inventario.
     */
    private void registrarVenta() {
        if (modeloTabla.getRowCount() == 0) {
            JOptionPane.showMessageDialog(this, "No hay productos en la venta.", "Venta vacÃ­a", JOptionPane.WARNING_MESSAGE);
            return;
        }

        double totalVenta;
        try {
            totalVenta = Double.parseDouble(txtTotal.getText().replace(",", "."));
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "Error al calcular el total.", "Error", JOptionPane.ERROR_MESSAGE);
            return;
        }

        // --- INICIO DE LA TRANSACCIÃ“N ---
        // Usamos una transacciÃ³n para asegurar que todas las operaciones 
        // (insertar venta, insertar detalles, actualizar stock)
        // se realicen correctamente, o no se realice ninguna.
        
        PreparedStatement psVenta = null;
        PreparedStatement psDetalle = null;
        PreparedStatement psUpdateStock = null;
        ResultSet rsKeys = null;
        
        String sqlVenta = "INSERT INTO ventas (total, fecha) VALUES (?, NOW())";
        String sqlDetalle = "INSERT INTO detalle_ventas (venta_id,codigo, cantidad, precio_unitario, importe) VALUES (?, ?, ?, ?, ?)";
        String sqlUpdateStock = "UPDATE Zapatos SET stock = stock - ? WHERE codigo = ? AND stock >= ?";

        try {
            // 1. Desactivar AutoCommit para iniciar la transacciÃ³n
            con.setAutoCommit(false);
            
            // 2. Insertar en la tabla 'ventas'
            psVenta = con.prepareStatement(sqlVenta, Statement.RETURN_GENERATED_KEYS);
            psVenta.setDouble(1, totalVenta);
            psVenta.executeUpdate();

            // 3. Obtener el ID de la venta reciÃ©n creada
            rsKeys = psVenta.getGeneratedKeys();
            int idVentaGenerada = -1;
            if (rsKeys.next()) {
                idVentaGenerada = rsKeys.getInt(1);
            }
            
            if (idVentaGenerada == -1) {
                throw new SQLException("No se pudo obtener el ID de la venta.");
            }

            // 4. Preparar los inserts para 'detalle_ventas' y update para 'inventario'
            psDetalle = con.prepareStatement(sqlDetalle);
            psUpdateStock = con.prepareStatement(sqlUpdateStock);

            // 5. Recorrer la tabla (JTable) y ejecutar las operaciones
            for (int i = 0; i < modeloTabla.getRowCount(); i++) {
                int idProducto = (int) modeloTabla.getValueAt(i, 0);
                int cantidad = (int) modeloTabla.getValueAt(i, 2);
                double precio = (double) modeloTabla.getValueAt(i, 3);
                double importe = (double) modeloTabla.getValueAt(i, 4);

                // 5a. Insertar en 'detalle_ventas'
                psDetalle.setInt(1, idVentaGenerada);
                psDetalle.setInt(2, idProducto);
                psDetalle.setInt(3, cantidad);
                psDetalle.setDouble(4, precio);
                psDetalle.setDouble(5, importe);
                psDetalle.addBatch(); // Agregamos al lote

                // 5b. Actualizar 'inventario'
                psUpdateStock.setInt(1, cantidad); // Cantidad a restar
                psUpdateStock.setInt(2, idProducto);
                psUpdateStock.setInt(3, cantidad); // CondiciÃ³n: stock >= cantidad
                
                int filasAfectadas = psUpdateStock.executeUpdate();
                
                // Si filasAfectadas es 0, significa que no habÃ­a stock suficiente
                if (filasAfectadas == 0) {
                     throw new SQLException("Stock insuficiente para el producto: " + modeloTabla.getValueAt(i, 1) + ". La venta se cancelarÃ¡.");
                }
            }
            
            // 6. Ejecutar el lote de 'detalle_ventas'
            psDetalle.executeBatch();
            
            // 7. Si todo saliÃ³ bien, confirmar la transacciÃ³n
            con.commit();
            
            JOptionPane.showMessageDialog(this, "Venta registrada con Ã©xito. ID de Venta: " + idVentaGenerada, "Venta Exitosa", JOptionPane.INFORMATION_MESSAGE);
            limpiarTodo();

        } catch (SQLException e) {
            // 8. Si algo fallÃ³, revertir la transacciÃ³n (ROLLBACK)
            try {
                if (con != null) {
                    con.rollback();
                    JOptionPane.showMessageDialog(this, "Error al registrar la venta. Se revirtieron los cambios.\n" + e.getMessage(), "Error en TransacciÃ³n", JOptionPane.ERROR_MESSAGE);
                    System.err.println("Error en registrarVenta (Rollback): " + e);
                }
            } catch (SQLException ex) {
                System.err.println("Error al hacer rollback: " + ex);
            }
        } finally {
            // 9. Reactivar AutoCommit y cerrar recursos
            try {
                if (con != null) {
                    con.setAutoCommit(true);
                }
                if (rsKeys != null) rsKeys.close();
                if (psVenta != null) psVenta.close();
                if (psDetalle != null) psDetalle.close();
                if (psUpdateStock != null) psUpdateStock.close();
            } catch (SQLException e) {
                System.err.println("Error al cerrar recursos: " + e);
            }
        }
    }

    /**
     * Limpia los campos de bÃºsqueda de producto
     */
    private void limpiarCamposProducto() {
        txtBuscarProducto.setText("");
        txtPrecioUnitario.setText("");
        txtStockDisponible.setText("");
        spinnerCantidad.setModel(new SpinnerNumberModel(0, 0, 0, 1)); // Resetear spinner
        btnAgregarProducto.setEnabled(false);

        this.idProductoActual = -1;
        this.stockActual = 0;
        this.precioActual = 0;
    }

    /**
     * Limpia todo el formulario para una nueva venta
     */
    private void limpiarTodo() {
        limpiarCamposProducto();
        
        // Limpiar la tabla
        modeloTabla.setRowCount(0);
        
        // Limpiar totales
        calcularTotales(); // Esto los pondrÃ¡ en 0.00
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jLabel2 = new javax.swing.JLabel();
        txtBuscarProducto = new javax.swing.JTextField();
        jButton1 = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        txtPrecioUnitario = new javax.swing.JTextField();
        jLabel3 = new javax.swing.JLabel();
        txtStockDisponible = new javax.swing.JTextField();
        jLabel4 = new javax.swing.JLabel();
        spinnerCantidad = new javax.swing.JSpinner();
        btnAgregarProducto = new javax.swing.JButton();
        jPanel2 = new javax.swing.JPanel();
        ertgersj = new javax.swing.JScrollPane();
        tablaDetalleVenta = new javax.swing.JTable();
        btnQuitarProducto = new javax.swing.JButton();
        jPanel3 = new javax.swing.JPanel();
        jLabel5 = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        txtSubtotal = new javax.swing.JTextField();
        txtIVA = new javax.swing.JTextField();
        txtTotal = new javax.swing.JTextField();
        btnRegistrarVenta = new javax.swing.JButton();
        btnCancelarVenta = new javax.swing.JButton();

        setBackground(new java.awt.Color(153, 204, 255));
        setOpaque(false);

        jPanel1.setOpaque(false);

        jLabel2.setFont(new java.awt.Font("Segoe UI", 0, 14)); // NOI18N
        jLabel2.setText("PRODUCTO / CODIGO");

        txtBuscarProducto.setFont(new java.awt.Font("Segoe UI", 1, 14)); // NOI18N

        jButton1.setText("Buscar");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jLabel1.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel1.setText("Precio");

        txtPrecioUnitario.setFont(new java.awt.Font("Segoe UI", 1, 14)); // NOI18N

        jLabel3.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel3.setText("Stock");

        txtStockDisponible.setFont(new java.awt.Font("Segoe UI", 1, 14)); // NOI18N

        jLabel4.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel4.setText("Cantidad");

        spinnerCantidad.setFont(new java.awt.Font("Segoe UI", 1, 14)); // NOI18N

        btnAgregarProducto.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        btnAgregarProducto.setText("Agregar");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addContainerGap()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jButton1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(txtBuscarProducto)
                            .addComponent(jLabel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(txtPrecioUnitario)
                            .addComponent(jLabel3, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(txtStockDisponible)
                            .addComponent(jLabel4, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(spinnerCantidad)))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(14, 14, 14)
                                .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 173, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(23, 23, 23)
                                .addComponent(btnAgregarProducto, javax.swing.GroupLayout.PREFERRED_SIZE, 151, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(0, 18, Short.MAX_VALUE)))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(19, 19, 19)
                .addComponent(jLabel2)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(txtBuscarProducto, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jButton1, javax.swing.GroupLayout.PREFERRED_SIZE, 43, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jLabel1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(txtPrecioUnitario, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(35, 35, 35)
                .addComponent(jLabel3)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(txtStockDisponible, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jLabel4)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(spinnerCantidad, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(btnAgregarProducto, javax.swing.GroupLayout.PREFERRED_SIZE, 74, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        jPanel2.setOpaque(false);

        ertgersj.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        ertgersj.setOpaque(false);

        tablaDetalleVenta.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        tablaDetalleVenta.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "CÒDIGO", "PRODUCTO", "CANTIDAD", "PRECIO", "IMPORTE"
            }
        ));
        ertgersj.setViewportView(tablaDetalleVenta);

        btnQuitarProducto.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        btnQuitarProducto.setText("Quitar Producto");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(btnQuitarProducto, javax.swing.GroupLayout.PREFERRED_SIZE, 179, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(ertgersj, javax.swing.GroupLayout.PREFERRED_SIZE, 845, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(188, 188, 188))
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addComponent(ertgersj, javax.swing.GroupLayout.PREFERRED_SIZE, 465, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnQuitarProducto)
                .addGap(0, 0, Short.MAX_VALUE))
        );

        jPanel3.setOpaque(false);

        jLabel5.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel5.setText("SUBTOTAL:");

        jLabel6.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel6.setText("I.V.A. 16%:");

        jLabel7.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel7.setText("TOTAL:");

        txtSubtotal.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        txtSubtotal.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtSubtotalActionPerformed(evt);
            }
        });

        txtIVA.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        txtIVA.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtIVAActionPerformed(evt);
            }
        });

        txtTotal.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N

        btnRegistrarVenta.setFont(new java.awt.Font("Segoe UI", 0, 14)); // NOI18N
        btnRegistrarVenta.setText("CONFIRMAR");
        btnRegistrarVenta.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnRegistrarVentaActionPerformed(evt);
            }
        });

        btnCancelarVenta.setFont(new java.awt.Font("Segoe UI", 0, 14)); // NOI18N
        btnCancelarVenta.setText("CANCELAR");

        javax.swing.GroupLayout jPanel3Layout = new javax.swing.GroupLayout(jPanel3);
        jPanel3.setLayout(jPanel3Layout);
        jPanel3Layout.setHorizontalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel3Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel6, javax.swing.GroupLayout.PREFERRED_SIZE, 102, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(jPanel3Layout.createSequentialGroup()
                        .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jLabel7)
                            .addComponent(jLabel5))
                        .addGap(47, 47, 47)
                        .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(txtIVA, javax.swing.GroupLayout.PREFERRED_SIZE, 164, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(txtSubtotal, javax.swing.GroupLayout.PREFERRED_SIZE, 164, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(txtTotal, javax.swing.GroupLayout.PREFERRED_SIZE, 164, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(36, 36, 36)
                        .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(btnRegistrarVenta, javax.swing.GroupLayout.PREFERRED_SIZE, 169, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(btnCancelarVenta, javax.swing.GroupLayout.PREFERRED_SIZE, 169, javax.swing.GroupLayout.PREFERRED_SIZE))))
                .addGap(367, 367, 367))
        );
        jPanel3Layout.setVerticalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel3Layout.createSequentialGroup()
                .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel3Layout.createSequentialGroup()
                        .addGap(11, 11, 11)
                        .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtSubtotal, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel5))
                        .addGap(21, 21, 21)
                        .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel6)
                            .addComponent(txtIVA, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                .addComponent(jLabel7, javax.swing.GroupLayout.PREFERRED_SIZE, 16, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(btnCancelarVenta))
                            .addComponent(txtTotal, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addComponent(btnRegistrarVenta, javax.swing.GroupLayout.PREFERRED_SIZE, 69, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(69, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jPanel3, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(0, 196, Short.MAX_VALUE))))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jPanel3, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                .addContainerGap())
        );
    }// </editor-fold>//GEN-END:initComponents

    private void btnRegistrarVentaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnRegistrarVentaActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_btnRegistrarVentaActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jButton1ActionPerformed

    private void txtSubtotalActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtSubtotalActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_txtSubtotalActionPerformed

    private void txtIVAActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtIVAActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_txtIVAActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnAgregarProducto;
    private javax.swing.JButton btnCancelarVenta;
    private javax.swing.JButton btnQuitarProducto;
    private javax.swing.JButton btnRegistrarVenta;
    private javax.swing.JScrollPane ertgersj;
    private javax.swing.JButton jButton1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JSpinner spinnerCantidad;
    private javax.swing.JTable tablaDetalleVenta;
    private javax.swing.JTextField txtBuscarProducto;
    private javax.swing.JTextField txtIVA;
    private javax.swing.JTextField txtPrecioUnitario;
    private javax.swing.JTextField txtStockDisponible;
    private javax.swing.JTextField txtSubtotal;
    private javax.swing.JTextField txtTotal;
    // End of variables declaration//GEN-END:variables
}
