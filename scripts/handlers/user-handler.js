handlers.getRegister = function(context){
    context.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function(){
        this.partial('templates/register.hbs');
    });
};

handlers.getLogin = function(context){
    context.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function(){
        this.partial('templates/login.hbs');
    })
};

handlers.postRegister = function(context){
    let username = context.params.username;
    let password = context.params.password;
    let confirmPassword = context.params.confirmPassword;
    userService.register(username, password)
        .then((data) => {
            userService.saveSession(data);
            context.redirect('/');
        });
};
