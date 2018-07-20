FlowRouter.route("/", {
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main:"Início"});
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main:"Sobre"});
    }
});