//const app = require('electron').app
//const BrowserWindow = requiere('electron').BrowserWindow
const {app,BrowserWindow} = require('electron')
//Ruta donde se encuentra nuestro proyecto
const path = require('path')
//ruta pero en formato url
const url = require('url')
let PantallaPrincipal;

function muestraPantallPrincipal(){
  PantallaPrincipal = new BrowserWindow({
    width:1024,
    height:768
  })
  PantallaPrincipal.on('closed',function(){
    PantallaPrincipal = null
  })
  PantallaPrincipal.loadURL('http://platzi.com')
  PantallaPrincipal.show()
}

//La aplicacion ejecuta este evento cuando el archivo
//main.js se carga en memoria.
app.on('ready',muestraPantallPrincipal
