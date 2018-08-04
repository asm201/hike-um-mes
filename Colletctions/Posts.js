Posts = new Mongo.Collection("posts");

Meteor.methods({
    "inserirPost": function(PostTexto) {
        if(Meteor.userId() !== null) {
            Posts.insert({
                texto: PostTexto,
                idDoAutor: Meteor.userId(),
                curtidas: []
            });
        }
    },
    "curtirPost": function(idDoPost) {
        Posts.update(idDoPost, {
            $addToSet: {
                curtidas: Meteor.userId()
            }
        });
    },
    "descurtirPost": function(idDoPost) {
        Posts.update(idDoPost, {
           $pull: {
                curtidas: Meteor.userId()  
           } 
        });
    }
});