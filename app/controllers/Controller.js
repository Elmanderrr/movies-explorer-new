import Api from './../api/themoviedbApi'
import _ from 'underscore'
import helpers from './../helpers/helpers'

class Controller {
    constructor (View) {
        this.View = View;

        this._init()
    }

    /**
     * 
     * @private
     */
    _init () {
        Controller.jqLibsInit()
    }


    static jqLibsInit () {
        $('.button-collapse').sideNav();
    }

    getMovies(page) {

        let promises = _.map(helpers.generateArray(page || 5), (n)=> {

            return new Promise((resolve,reject)=> {

                return Api.get('movies','getPopular',{page:n,language:'ru'})
                    .then( promise => {
                        return resolve(promise.results)
                    })

            })

        });

        return Promise.all(promises)
            .then(data => {
                return helpers.concatArrays(data)
            })


    }


    loadTemplate (tpl) {

        //TODO make getMovie call abstract
        this.getMovies()
            .then(data => {
                this.View.renderTemplate(tpl,data)
            })

    }
    
}

export default Controller