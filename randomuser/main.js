// const app=require('electron').app
// const BrowserWindow=require('electron').BroserWindow
const {app, BrowserWindow} = require('electron')
//ruta donde se encuentra nuestro proyecto
const path = require('path')
//ruta pero el formato url
const url = require('url')
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({
		width:1024,
		height:768
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal = null
	})
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaPrincipal.Show()
}
//la aplicacion ejecuta este evento cuando
//el archivo main.js se carga en memoria
app.on('ready', muestraPantallaPrincipal)
