<?php
include("utilerias.php");
print("<form action='guardar.php' method='post'>");
print("<input type='text' placeholder='usuario' name='txtUsuario'>");
print("<input type='text' placeholder='nombre' name='txtNombre'>");
print("<input type='text' placeholder='clave' name='txtClave'>");
print("<input type='text' placeholder='depto' name='txtDepto'>");
print("<input type='text' placeholder='vigencia' name='txtVigencia'>");
print("<input type='submit' value='Guardar'>");
print("</form");
?>