Comentários = new Mongo.Collection("comentarios");

Meteor.methods({
    "inserirComentário": function(textoDoComentário, idDoPost) {
        if(Meteor.userId() !== null) {
            Comentários.insert({
                texto: textoDoComentário,
                post: idDoPost,
                autor: Meteor.userId()
            });
        }
    }
});