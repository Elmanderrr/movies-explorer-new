class Router {
    constructor (Controller) {
        this.router = routie;
        this.Controller = Controller;
        this.listen()
    }

    listen () {
        this.router({

            '': function() {
                console.log('root');
            },

            'movie-list': function() {
                this.Controller.loadTemplate('movieList')
                console.log('movie-list');
            }.bind(this),

            'test2': function() {
                console.log('popup 2 alert');
            }

        })
    }
}

export default Router