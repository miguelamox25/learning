/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package proyectozapatosirving;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;

/**
 *
 * @author amox_
 */
public class Conexion {

    // Objeto de conexión que se compartirá
    private static Connection con = null;

    // --- DATOS PARA LA CONEXIÓN ---
    // Cambia "nombre_de_tu_bd" por el nombre de tu base de datos
    private static final String DBNAME = "proyecto_irving2";
    private static final String USER = "root"; // Usuario de tu base de datos (por defecto suele ser root)
    private static final String PASSWORD = ""; // Contraseña de tu base de datos
    private static final String URL = "jdbc:mysql://localhost:3306/" + DBNAME + "?serverTimezone=UTC";
    
    /**
     * Método para obtener la conexión a la base de datos.
     * @return Objeto de tipo Connection si la conexión es exitosa, de lo contrario null.
     */
    public static Connection getConexion() {
        try {
            // Cargar el driver de MySQL
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Establecer la conexión
            con = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("Conexión exitosa a la base de datos.");
            
        } catch (ClassNotFoundException | SQLException e) {
            // Manejar errores de conexión
            JOptionPane.showMessageDialog(null, "Error al conectar con la base de datos: \n" + e.getMessage(), "Error de Conexión", JOptionPane.ERROR_MESSAGE);
            System.err.println("Error de conexión: " + e);
        }
        return con;
    }

    /**
     * Método para cerrar la conexión a la base de datos.
     */
    public static void cerrarConexion() {
        try {
            if (con != null && !con.isClosed()) {
                con.close();
                System.out.println("Conexión cerrada.");
            }
        } catch (SQLException e) {
            System.err.println("Error al cerrar la conexión: " + e);
        }
    }
}
