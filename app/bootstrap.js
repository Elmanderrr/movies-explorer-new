import Router from './router/Router'
import Controller from './controllers/Controller'
import View from './view/View'


class App {
    constructor () {
        this.View = new View();
        this.Controller = new Controller(this.View);
        this.Router = new Router(this.Controller);
    }
}


let movieExplorer = new App();
console.log(movieExplorer)