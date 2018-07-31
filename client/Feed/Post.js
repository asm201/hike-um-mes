Template.Post.helpers({
    usernameDoAutor: function() {
        var idDoAutor = this.idDoAutor;
        var autor = Meteor.users.findOne({_id: idDoAutor});
        return autor.username;
    }
});

Template.Post.events({
    "click .botao-curtir": function(evento, template) {
        Meteor.call("curtirPost", template.data._id);
    }
});