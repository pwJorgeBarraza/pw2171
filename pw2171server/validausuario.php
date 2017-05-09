<?php
include("utilerias.php");
function validausuario($usuario,$clave){
	//computadora,usuario,contraseña
	$conexion=mysql_connect("localhost","root","");
	mysql_select_db("pw2171");
	$usuario = GetSQLValueString($usuario,"text");
	$clave = GetSQLValueString(md5($clave),"text");
	$consulta = sprintf("select usuario,clave from usuarios where usuario=%s and clave=%s",$usuario,$clave);
	//$consulta="select usuario,clave from usuarios where usuario='".$usuario."' and  clave='".md5($clave)."' limit 1";
	$resultado = mysql_query($consulta);
	if(mysql_num_rows($resultado)>0){
		print("Bienvenido ".$usuario);
	}else{
		print("No eres Bienvenido :(");
	}
}
if(isset($_POST["txtUsuario"]) && isset($_POST["txtClave"])){

}
	$usuario= $_POST["txtUsuario"];
	$clave  = $_POST["txtClave"];
	validausuario($usuario,$clave);
	print($usuario);
	print($clave);
?>