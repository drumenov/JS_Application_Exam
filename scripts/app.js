const handlers = {};

$(() => {
    const app = Sammy('#root', function(){
        this.use('Handlebars', 'hbs');

        this.get('/index.html', handlers.getHome);
        this.get('#/home', handlers.getHome);
        this.get('/', handlers.getHome);

        this.get('#/register', handlers.getRegister);

        this.get('#/login', handlers.getLogin);

        this.post('#/register', handlers.postRegister);
    });

    app.run();
});