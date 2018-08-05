Posts = new Mongo.Collection("posts");

Meteor.methods({
    "inserirPost": function(PostTexto, urlDaImagem) {
        if(Meteor.userId() !== null && PostTexto !== "") {
            Posts.insert({
                texto: PostTexto,
                idDoAutor: Meteor.userId(),
                curtidas: [],
                imagem: urlDaImagem
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