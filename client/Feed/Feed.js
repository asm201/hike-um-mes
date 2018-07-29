
Template.Feed.helpers({
	Posts: function() {
		var CollectionPosts = Posts.find().fetch();
		return CollectionPosts
	}
});