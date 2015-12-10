const _basedir = './view/templates'
let templates = {
    _list:{
        movieList:{
            url:`${_basedir}/movie-list.html`
        },
        movie:{
          url:`${_basedir}/movie-item.html`
        },
        menuItem:{
            url:`${_basedir}/menu-item.html`
        },
        root:{
            template:`${_basedir}/root.html`
        }
    },

    /**
     *
     * @param tpl
     * @returns {*}
     */
    get (tpl) {
        let dfd = jQuery.Deferred();
        let template;

        if (this._list[tpl].url) {
            template = $.get(this._list[tpl].url)
        }

        if (this._list[tpl].template) {
            template = dfd.resolve(this._list[tpl].template)
        }


        return template

    }
};

export default templates