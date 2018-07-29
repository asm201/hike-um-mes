Posts = new Mongo.Collection("posts");
Meteor.methods({
	"inserirPost": function(PostTexto) {
		if (Meteor.userId() !== null) {
		  Posts.insert({
		      texto: PostTexto,
			  IdDoAutor: Meteor.userId()
		  });
		}
	}
})