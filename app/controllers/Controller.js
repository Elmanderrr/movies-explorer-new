import Api from './../api/themoviedbApi'
import _ from 'underscore'
import helpers from './../helpers/helpers'



class Controller {
    constructor (View) {
        this.View = View;
        this._init();
        this._initHandlers()
    }

    /**
     * 
     * @private
     */
    _init () {
        Controller.jqLibsInit()
    }

    _initHandlers () {
        this.View
            .handler({
                evt:'click',
                selector:'button',
                callback:(el) => {
                    let id = el.target.getAttribute('data-id');

                    this.getMovieById(id)
                        .then(resp => console.log(resp))
                }
            })
            .handler({
                evt:'click',
                selector:'p',
                callback:() => {
                    console.log(this)
                }
            })
    }


    static jqLibsInit () {
        $('.button-collapse').sideNav();
    }


    loadTemplate (tpl,data) {

        this.View.renderTemplate(tpl,data)

    }
    
}

export default Controller