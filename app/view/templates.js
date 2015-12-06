let templates = {
    _list:{
        movieList:'./view/templates/movie-list.html'
    },
    get: function (tpl) {
        return $.get(this._list[tpl])
    }
};

export default templates