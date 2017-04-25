const rq = require('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");
//jquery().off //== a $().off


function datosRandom(){
	.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	$("#txtNombre").html(data.results[0].name.first+" "+data.results[0].name.last)
  	$("#imgFoto").attr("src",data.results[0].picture.large)
  },
  error(a,b,c){
  	alert("sin internet o sin servidor");
  }
});
}

$("#btnInfo").on("click",datosRandom);
      