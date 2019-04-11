handlers.getHome = function(context) {
    this.name = 'HOME';
    context.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function(){
        this.partial('templates/home.hbs');
    })
};