Template.Feed.events({
	"submit form": function(evento, Template) {
		evento.preventDefault();
		var PostTexto = evento.target.texto.value; 
		console.log(PostTexto);
		alert("envio feito");
		Posts.insert({
			texto: PostTexto 
		});
		evento.target.texto.value = "";
	}
});

Template.Feed.helpers({
	Posts: function() {
		var CollectionPosts = Posts.find().fetch();
		return CollectionPosts
	}
});