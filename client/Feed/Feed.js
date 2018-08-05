Meteor.subscribe("posts");

Template.Feed.helpers({
    posts: function() {
        var CollectionPosts = Posts.find().fetch().reverse();
        return CollectionPosts;
    }
});