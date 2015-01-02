// file: models/user.js - created at 2015-01-01, 02:26

var User = module.exports = function(data) {
	var name = data.name;
	var sname = data.sname;
	var password = data.password;
	var email = data.email;
	var dateCadastro = data.dateCadastro;
	//existe uma falha no model...
	var lenUser = function (data) {
		var tam = 0;
		for(var i in data){
			tam++;
		}
		return tam === 5;
	} 
	if(lenUser(data)){
		return {		
			name : name,
			sname : sname,
			email : email,
			password : password,
			dateCadastro : dateCadastro,
		}
	}
}

