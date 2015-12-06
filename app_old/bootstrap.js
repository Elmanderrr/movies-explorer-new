import Model from './models/Model'
import Controller from './controllers/Controller'
import View from './views/View'
import Templates from './views/Templates'
import _ from 'underscore'
import helpers from './helpers/helpers'
import page from 'page'

console.log(page)


class MoviesBooster {
    constructor(){
        this.templates = new Templates();
        this.model = new Model();
        this.view = new View(this.templates);
        this.controller = new Controller(this.model, this.view);
    }
}

let Booster = new MoviesBooster();







