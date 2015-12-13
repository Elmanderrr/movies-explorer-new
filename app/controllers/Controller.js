import Api from './../api/themoviedbApi'
import _ from 'underscore'
import helpers from './../helpers/helpers'
import Router from './../router/Router'


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
                selector:'.movie-list-holder',
                callback:function (el) {
                    let id = $(this).data('id');
                    routie(`movie-list/${id}`);
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