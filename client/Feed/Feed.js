Template.Feed.helpers({
	Posts: function() {
		var CollectionPosts = Posts.find().fetch().reverse();
		return CollectionPosts
	}
});