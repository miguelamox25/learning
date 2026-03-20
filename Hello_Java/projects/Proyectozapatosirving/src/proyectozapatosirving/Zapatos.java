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
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;
//---NUEVAS IMPORTACIÒNES
import javax.swing.table.TableModel;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 *
 * @author user
 */
public class Zapatos extends javax.swing.JPanel {
    private String zapatoSeleccionado = null;

    /**
     * Creates new form Zapatos
     */
    public Zapatos() {
         initComponents();
        // Se llama al método para cargar los datos en la tabla al crear el panel
        cargarDatosZapatos();
        
        // 1. Listener para la tabla(clic)
        Inventario.addMouseListener(new MouseAdapter(){
            @Override
                    public void mouseClicked(MouseEvent e){
                        filaSeleccionada();
                    }
        });
        
      // Listener para el boton GUARDAR 
        
      /*btnAgregar.addActionListener(new ActionListener(){
            @Override
                    public void actionPerformed(ActionEvent e){
                        guardarRegistro();
                    }
        });*/  
        
        // --- 3. Listener para el botón ACTUALIZAR ---
        btnActualizar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                actualizarRegistro();
            }
        });
        
         // --- 4. Listener para el botón BORRAR ---
        btnBorrar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                borrarRegistro();
            }
        });
        
        // --- 5. Listener para el botón LIMPIAR ---
        btnLimpiar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                limpiarCampos();
            }
        });

    }
private void cargarDatosZapatos() {
         // 1. Definir el modelo de la tabla y las columnas
        DefaultTableModel modeloTabla = new DefaultTableModel();
        modeloTabla.addColumn("Codigo");
        modeloTabla.addColumn("Modelo");
        modeloTabla.addColumn("Marca");
        modeloTabla.addColumn("Color");
        modeloTabla.addColumn("Numero");
        modeloTabla.addColumn("Precio");
        modeloTabla.addColumn("Material");
        modeloTabla.addColumn("Genero");
        modeloTabla.addColumn("Stok");

        // 2. Asignar el modelo al JTable
        Inventario.setModel(modeloTabla);
        
        // 3. Preparar la consulta a la base de datos
        String sql = "SELECT Codigo,Modelo, Marca, Color, Numero,Precio, Material, Genero, Stock FROM Zapatos";
        Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        
        try {
            // 4. Establecer conexión
            con = Conexion.getConexion();
            if (con == null) {
                // Si la conexión falla, no continuar. El método getConexion ya muestra un error.
                return;
            }
            
            // 5. Preparar y ejecutar la consulta
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            
             // 6. Recorrer los resultados y añadirlos al modelo de la tabla
            while (rs.next()) {
                Object[] fila = new Object[9]; // Array para guardar los datos de una fila
                fila[0] = rs.getString("codigo");
                fila[1] = rs.getString("modelo");
                fila[2] = rs.getString("marca");
                fila[3] = rs.getString("color");
                fila[4] = rs.getInt("numero");
                fila[5] = rs.getString("precio");
                fila[6] = rs.getString("material");
                fila[7] = rs.getString("genero");
                fila[8] = rs.getString("stock");
                modeloTabla.addRow(fila); // Añadir la fila al modelo
            }

            } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "Error al cargar los datos de los alumnos: " + e.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
            System.err.println("Error al cargar datos: " + e);
        } finally {
            // 7. Cerrar recursos para liberar memoria
            try {
                if (rs != null) rs.close();
                if (ps != null) ps.close();
                // Opcional: No cerramos la conexión 'con' aquí para que pueda ser reutilizada por otras partes del programa.
                // Se puede cerrar al salir de la aplicación.
            } catch (SQLException e) {
                System.err.println("Error al cerrar recursos: " + e);
            }
        }
    }

/*REQUERIMIENTO 1: MOSTRAR LOS DATOS DE LA TABLA DENTRO DEL FORMULARIO*/

private void filaSeleccionada () {
    int fila = Inventario.getSelectedRow();
    if (fila == -1) {
        return; //No hay fila seleccionada.
    }
    
    TableModel modelo = Inventario.getModel();
    // 1. Guardar el ID seleccionado
        this.zapatoSeleccionado = modelo.getValueAt(fila,0).toString();
        
        
    // 2. Poner los valores en los campos
    txtModelo.setText(modelo.getValueAt(fila, 1).toString());
    txtMarca.setText(modelo.getValueAt(fila, 2).toString());
    txtColor.setText(modelo.getValueAt(fila, 3).toString());
    txtNumero.setText(modelo.getValueAt(fila, 4).toString());
    txtPrecio.setText(modelo.getValueAt(fila, 5).toString());
    txtMaterial.setText(modelo.getValueAt(fila, 6).toString());
    cmbGenero.setSelectedItem(modelo.getValueAt(fila, 7).toString());
    txtStock.setText (modelo.getValueAt(fila, 8).toString());
}

/**
     * REQUERIMIENTO 2: Guarda un nuevo registro en la base de datos.
     */
    private void guardarRegistro() {
        // Validar que los campos no estén vacíos
        if (txtPrecio.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "El Título y el Precio son obligatorios.", "Campos vacíos", JOptionPane.WARNING_MESSAGE);
            return;
        }

        String sql = "INSERT INTO Zapatos (modelo, marca, color, numero,precio, material, genero, stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection con = Conexion.getConexion();
             PreparedStatement ps = con.prepareStatement(sql)) {

            if (con == null) return;
            ps.setString(1, txtModelo.getText());
            ps.setString(2, txtMarca.getText()); // Asume que el formato es yyyy-MM-dd
            ps.setString(3, txtColor.getText());
            ps.setString(4, txtNumero.getText());
            ps.setString(5, txtPrecio.getText());
            ps.setString(6, txtMaterial.getText()); 
            ps.setString(7, cmbGenero.getSelectedItem().toString()); 
            ps.setString(8, txtStock.getText());
            

            int filasAfectadas = ps.executeUpdate();
            
            if (filasAfectadas > 0) {
                JOptionPane.showMessageDialog(this, "Juego guardado exitosamente.", "Registro Creado", JOptionPane.INFORMATION_MESSAGE);
                cargarDatosZapatos();  // Actualizar la tabla
                //limpiarCampos(); // Limpiar el formulario
            }

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Error al guardar el registro: " + e.getMessage(), "Error SQL", JOptionPane.ERROR_MESSAGE);
            System.err.println("Error al guardar: " + e);
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "El precio debe ser un número válido (ej. 1399.00).", "Error de Formato", JOptionPane.WARNING_MESSAGE);
        }
    }
    
/**
* REQUERIMIENTO 3: Actualiza un registro existente.
     */
    private void actualizarRegistro() {
        // Verificar que se haya seleccionado un juego
        if (this.zapatoSeleccionado == null) {
            JOptionPane.showMessageDialog(this, "Por favor, selecciona un juego de la tabla para actualizar.", "Sin selecciÃ³n", JOptionPane.WARNING_MESSAGE);
            return;
        }
        
        // Validar campos
        if (txtModelo.getText().trim().isEmpty() || txtPrecio.getText().trim().isEmpty()) {
            JOptionPane.showMessageDialog(this, "El TÃ­tulo y el Precio son obligatorios.", "Campos vacÃ­os", JOptionPane.WARNING_MESSAGE);
            return;
        }

        String sql = "UPDATE Zapatos SET modelo = ?, marca = ?, color = ?, numero = ?, precio = ?, material = ?, genero = ?, stock = ? where codigo = ?";

        try (Connection con = Conexion.getConexion();
             PreparedStatement ps = con.prepareStatement(sql)) {

            if (con == null) return;
            
            ps.setString(1, txtModelo.getText());
            ps.setString(2, txtMarca.getText()); // Asume que el formato es yyyy-MM-dd
            ps.setString(3, txtColor.getText());
            ps.setString(4, txtNumero.getText());
            ps.setString(5, txtPrecio.getText());
            ps.setString(6, txtMaterial.getText()); 
            ps.setString(7, cmbGenero.getSelectedItem().toString()); // El ID del juego a actualizar
            ps.setString(8, txtStock.getText());
            ps.setString(9, this.zapatoSeleccionado);
            
            int filasAfectadas = ps.executeUpdate();
            
            if (filasAfectadas > 0) {
                JOptionPane.showMessageDialog(this, "Juego actualizado exitosamente.", "Registro Actualizado", JOptionPane.INFORMATION_MESSAGE);
                cargarDatosZapatos();  // Actualizar la tabla
                //limpiarCampos(); // Limpiar el formulario
            } else {
                 JOptionPane.showMessageDialog(this, "No se encontrÃ³ el registro para actualizar.", "Error", JOptionPane.WARNING_MESSAGE);
            }

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Error al actualizar el registro: " + e.getMessage(), "Error SQL", JOptionPane.ERROR_MESSAGE);
            System.err.println("Error al actualizar: " + e);
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(this, "El precio debe ser un nÃºmero vÃ¡lido (ej. 1399.00).", "Error de Formato", JOptionPane.WARNING_MESSAGE);
        }
    }
        //REQUERIMIENTO 4 Borra un registro seleccionado con confirmacion

    private void borrarRegistro() {
        // Verificar que se haya seleccionado un juego
        if (this.zapatoSeleccionado == null) {
            JOptionPane.showMessageDialog(this, "Por favor, selecciona un juego de la tabla para borrar.", "Sin selección", JOptionPane.WARNING_MESSAGE);
            return;
        }
        
        // --- Mensaje de Confirmación ---
        int confirmacion = JOptionPane.showConfirmDialog(
                this, 
                "¿Estás seguro de que deseas borrar la prenda: " + txtModelo.getText() + "?", 
                "Confirmar borrado", 
                JOptionPane.YES_NO_OPTION, 
                JOptionPane.QUESTION_MESSAGE
        );
        
        // Si el usuario no confirma (elige NO o cierra el diálogo)
        if (confirmacion != JOptionPane.YES_OPTION) {
            return;
        }

        String sql = "DELETE FROM ZAPATOS WHERE CODIGO = ?";

        try (Connection con = Conexion.getConexion();
             PreparedStatement ps = con.prepareStatement(sql)) {
            
            if (con == null) return;
            
            ps.setString(1, this.zapatoSeleccionado);

            int filasAfectadas = ps.executeUpdate();
            
            if (filasAfectadas > 0) {
                JOptionPane.showMessageDialog(this, "Prenda borrada exitosamente.", "Registro Eliminado", JOptionPane.INFORMATION_MESSAGE);
                cargarDatosZapatos();  // Actualizar la tabla
                limpiarCampos(); // Limpiar el formulario
            } else {
                 JOptionPane.showMessageDialog(this, "No se encontró el registro para borrar.", "Error", JOptionPane.WARNING_MESSAGE);
            }

        } catch (SQLException e) {
            JOptionPane.showMessageDialog(this, "Error al borrar el registro: " + e.getMessage(), "Error SQL", JOptionPane.ERROR_MESSAGE);
            System.err.println("Error al borrar: " + e);
        }
    }
     
     //METODO DE AYUDA PARA LIMPIAR LOS CAMPOS DEL FORMULARIO
     
     private void limpiarCampos() {
        this.zapatoSeleccionado = null; // Quita el ID seleccionado
        txtModelo.setText("");
        txtMarca.setText("");
        txtColor.setText("");
        txtNumero.setText("");
        txtPrecio.setText("");
        txtMaterial.setText("");
        cmbGenero.setSelectedIndex(0);
        txtStock.setText("");        
    }
   

    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jMenuBar1 = new javax.swing.JMenuBar();
        jMenu1 = new javax.swing.JMenu();
        jMenu2 = new javax.swing.JMenu();
        jMenuBar2 = new javax.swing.JMenuBar();
        jMenu3 = new javax.swing.JMenu();
        jMenu4 = new javax.swing.JMenu();
        jPanel1 = new javax.swing.JPanel();
        Registro = new javax.swing.JPanel();
        jLabel3 = new javax.swing.JLabel();
        txtModelo = new javax.swing.JTextField();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        txtMarca = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        txtColor = new javax.swing.JTextField();
        jLabel7 = new javax.swing.JLabel();
        txtNumero = new javax.swing.JTextField();
        jLabel8 = new javax.swing.JLabel();
        txtPrecio = new javax.swing.JTextField();
        jLabel9 = new javax.swing.JLabel();
        txtMaterial = new javax.swing.JTextField();
        ugh = new javax.swing.JLabel();
        cmbGenero = new javax.swing.JComboBox<>();
        btnActualizar = new javax.swing.JButton();
        btnAgregar = new javax.swing.JButton();
        btnLimpiar = new javax.swing.JButton();
        btnBorrar = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        Inventario = new javax.swing.JTable();
        jLabel10 = new javax.swing.JLabel();
        txtStock = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();

        jMenu1.setText("File");
        jMenuBar1.add(jMenu1);

        jMenu2.setText("Edit");
        jMenuBar1.add(jMenu2);

        jMenu3.setText("File");
        jMenuBar2.add(jMenu3);

        jMenu4.setText("Edit");
        jMenuBar2.add(jMenu4);

        setOpaque(false);

        jPanel1.setOpaque(false);

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );

        Registro.setOpaque(false);

        jLabel3.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel3.setText("Modelo:");

        txtModelo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtModeloActionPerformed(evt);
            }
        });

        jLabel4.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N

        jLabel5.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel5.setText("Marca:");

        jLabel6.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel6.setText("Color:");

        txtColor.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        txtColor.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtColorActionPerformed(evt);
            }
        });

        jLabel7.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel7.setText("Numero:");

        jLabel8.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel8.setText("Precio:");

        jLabel9.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel9.setText("Material:");

        ugh.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        ugh.setText("Genero:");

        cmbGenero.setFont(new java.awt.Font("Segoe UI", 0, 14)); // NOI18N
        cmbGenero.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "FEMENINO", "MASCULINO", " " }));
        cmbGenero.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cmbGeneroActionPerformed(evt);
            }
        });

        btnActualizar.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        btnActualizar.setText("Actualizar");
        btnActualizar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnActualizarActionPerformed(evt);
            }
        });

        btnAgregar.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        btnAgregar.setText("Agregar");
        btnAgregar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAgregarActionPerformed(evt);
            }
        });

        btnLimpiar.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        btnLimpiar.setText("Limpiar");

        btnBorrar.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        btnBorrar.setText("Borrar");

        Inventario.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        Inventario.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null}
            },
            new String [] {
                "Codigo", "Modelo", "Marca", "Color", "Numero", "Precio", "Material", "Genero", "Stock"
            }
        ));
        jScrollPane1.setViewportView(Inventario);

        jLabel10.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jLabel10.setText("Stock:");

        jLabel1.setText("Zapatos");

        javax.swing.GroupLayout RegistroLayout = new javax.swing.GroupLayout(Registro);
        Registro.setLayout(RegistroLayout);
        RegistroLayout.setHorizontalGroup(
            RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RegistroLayout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 58, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(487, 487, 487))
            .addGroup(RegistroLayout.createSequentialGroup()
                .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(cmbGenero, javax.swing.GroupLayout.Alignment.TRAILING, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(txtModelo)
                    .addComponent(txtMaterial)
                    .addComponent(txtNumero)
                    .addComponent(txtStock)
                    .addGroup(RegistroLayout.createSequentialGroup()
                        .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jLabel3, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel5, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel6, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel7, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel9, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(ugh, javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel10, javax.swing.GroupLayout.Alignment.LEADING))
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addGroup(RegistroLayout.createSequentialGroup()
                        .addComponent(jLabel4)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(jLabel8)
                        .addGap(238, 238, 238))
                    .addComponent(txtPrecio)
                    .addComponent(txtMarca)
                    .addComponent(txtColor))
                .addGap(27, 27, 27)
                .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, RegistroLayout.createSequentialGroup()
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 726, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(90, 90, 90))
                    .addGroup(RegistroLayout.createSequentialGroup()
                        .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(btnActualizar, javax.swing.GroupLayout.PREFERRED_SIZE, 190, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(btnLimpiar, javax.swing.GroupLayout.PREFERRED_SIZE, 190, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(80, 80, 80)
                        .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(btnBorrar, javax.swing.GroupLayout.PREFERRED_SIZE, 190, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(btnAgregar, javax.swing.GroupLayout.PREFERRED_SIZE, 190, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addContainerGap())))
        );
        RegistroLayout.setVerticalGroup(
            RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RegistroLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 43, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(RegistroLayout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 0, Short.MAX_VALUE))
                    .addGroup(RegistroLayout.createSequentialGroup()
                        .addGap(46, 46, 46)
                        .addComponent(jLabel3)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(txtModelo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel5)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(txtMarca, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel6)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(txtColor, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel7)
                        .addGap(1, 1, 1)
                        .addComponent(txtNumero, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel4)
                            .addComponent(jLabel8))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(txtPrecio, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel9)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(txtMaterial, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(RegistroLayout.createSequentialGroup()
                        .addGap(11, 11, 11)
                        .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(btnActualizar, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(btnAgregar, javax.swing.GroupLayout.PREFERRED_SIZE, 49, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addGroup(RegistroLayout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(ugh)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(cmbGenero, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(RegistroLayout.createSequentialGroup()
                        .addGap(16, 16, 16)
                        .addGroup(RegistroLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(btnLimpiar, javax.swing.GroupLayout.PREFERRED_SIZE, 49, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(btnBorrar, javax.swing.GroupLayout.PREFERRED_SIZE, 49, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(txtStock, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addGroup(RegistroLayout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel10)))
                .addGap(609, 609, 609))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(17, 17, 17)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(Registro, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(64, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(Registro, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(12, 12, 12)
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
    }// </editor-fold>//GEN-END:initComponents

    private void txtModeloActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtModeloActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_txtModeloActionPerformed

    private void cmbGeneroActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cmbGeneroActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_cmbGeneroActionPerformed

    private void btnAgregarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAgregarActionPerformed
        // TODO add your handling code here:
        guardarRegistro();
    }//GEN-LAST:event_btnAgregarActionPerformed

    private void btnActualizarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnActualizarActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_btnActualizarActionPerformed

    private void txtColorActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtColorActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_txtColorActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTable Inventario;
    private javax.swing.JPanel Registro;
    private javax.swing.JButton btnActualizar;
    private javax.swing.JButton btnAgregar;
    private javax.swing.JButton btnBorrar;
    private javax.swing.JButton btnLimpiar;
    private javax.swing.JComboBox<String> cmbGenero;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JMenu jMenu1;
    private javax.swing.JMenu jMenu2;
    private javax.swing.JMenu jMenu3;
    private javax.swing.JMenu jMenu4;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JMenuBar jMenuBar2;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTextField txtColor;
    private javax.swing.JTextField txtMarca;
    private javax.swing.JTextField txtMaterial;
    private javax.swing.JTextField txtModelo;
    private javax.swing.JTextField txtNumero;
    private javax.swing.JTextField txtPrecio;
    private javax.swing.JTextField txtStock;
    private javax.swing.JLabel ugh;
    // End of variables declaration//GEN-END:variables


}

