const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");
function datosRandom(){
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      $("#txtNombre").html(data.results[0].name.first+" "+
                 data.results[0].name.last)
      $("#imgFoto").attr("src",data.results[0].picture.large)
      $("#txtGender").html(data.results[0].gender)
      $("#txtStreet").html(data.results[0].location.street)
      $("#txtCity").html(data.results[0].location.city)
      $("#txtState").html(data.results[0].location.state)
      $("#txtPostcode").html(data.results[0].location.postcode)

      $("#txtEmail").html(data.results[0].email)
      $("#txtUsuername").html(data.results[0].login.username)
      $("#txtPassword").html(data.results[0].login.password)
      $("#txtSalt").html(data.results[0].login.salt)
      $("#txtMd5").html(data.results[0].login.md5)
      $("#txtShal").html(data.results[0].login.shal)
      $("#txtSha256").html(data.results[0].login.sha256)

      $("#txtDob").html(data.results[0].dob)
      $("#txtRegistered").html(data.results[0].registered)
      $("#txtPhone").html(data.results[0].phone)
      $("#txtCell").html(data.results[0].cell)
      $("#txtNameId").html(data.results[0].id.name)
      $("#txtValue").html(data.results[0].id.value)

      $("#txtNat").html(data.results[0].nat)

      $("#txtSeed").html(data.info.seed)
      $("#txtResults").html(data.info.results)
      $("#txtPage").html(data.info.page)
      $("#version").html(data.info.version)
    },
    error(a,b,c){
      alert("Sin internet o sin servidor");
    }
  });
}
$("#btnInfo").on("click",datosRandom);