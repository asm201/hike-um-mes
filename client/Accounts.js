AccountsTemplates.configure({
	defaultLayoutType: 'blaze',
	defaultLayout: 'LayoutPrincipal',
	defaultLayoutRegions: {
		nav: 'Cabeçalho'
	},
	defaultContentRegion: 'main'
});
AccountsTemplates.configureRoute('signIn');

T9n.setLanguage("pt");

var pwd = AccountsTemplates.removeField("password");
AccountsTemplates.removeField("email");
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 3,
  },
  {
    _id: "email",
    type: "email",
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: "Invalid email",
  },
  pwd,
  {
    _id: "name",
    type: "text",
    displayName: "Nome Completo",
    required: true
  },
]);

