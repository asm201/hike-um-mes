Posts = new Mongo.Collection("posts");
Meteor.methods({
	"inserirPost": function(PostTexto) {
		Posts.insert({
			texto: PostTexto,
			IdDoAutor: Meteor.userId()
		});
	}
})