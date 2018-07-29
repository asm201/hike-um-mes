Template.NovoPost.events({
	"submit form": function(evento, Template) {
		evento.preventDefault();
		var PostTexto = evento.target.texto.value; 
		console.log(PostTexto);
	    console.log(Meteor.userId());
		alert("envio feito");
		Meteor.call("inserirPost", PostTexto);
		evento.target.texto.value = "";
	}
});
