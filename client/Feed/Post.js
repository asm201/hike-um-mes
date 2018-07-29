
Template.Post.helpers({
    usernameDoAutor: function() {
        var idDoAutor = this.idDoAutor;
        var autor = Meteor.users.findOne({_id: idDoAutor});
        return autor.username;
    }
});