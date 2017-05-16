<?php
include("utilerias.php");
$conexion=conecta(); //servidor y bd ...
$u=GetSQLValueString($_POST["txtUsuario"]);
$u=GetSQLValueString($_POST["txtNombre"]);
$u=GetSQLValueString($_POST["txtClave"]);
$u=GetSQLValueString($_POST["txtDepto"]);
$u=GetSQLValueString($_POST["txtVigencia"]);
?>