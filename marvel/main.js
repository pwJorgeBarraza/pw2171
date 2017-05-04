// const app=require('electron').app
// const BrowserWindow=require('electron').BrowserWindow
const {app,BrowserWindow}= require('electron')
const electron = require('electron')
//ruta donde se enuentra nuestro proyecto
const path = require('path')
//misma rute pero en formato url
const url = require('url')
//constantes para impresion en PDF
const fs = require('fs') //sistema de archivos
const os = require('os') //sistema operativo
//llamada a procedimiento interno
const ipc = electron.ipcMain
//llamada a interfaz de comandos o terminal
const shell = electron.shell

//evento para imprimir en PDF
ipc.on('print-to-pdf',function(event){
	const pdfPath= path.join(os.tmpdir(),'print.pdf')
	const win= BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
			fs.writeFile(pdfPath,data,function(error){
				if(error){
					throw error
				}
				shell.openExternal('file://'+pdfPath)
			})
	})
})
let PantallaPrincipal;
function muestraPantallaPrincipal(){
	PantallaPrincipal= new BrowserWindow({
		width:1024,
		height:768
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal= null
	})
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaPrincipal.openDevTools();
	PantallaPrincipal.show()
}
//la aplicacion ejecuta este evento cuando el archivo
//main.js se carga en memoria
app.on('ready',muestraPantallaPrincipal)