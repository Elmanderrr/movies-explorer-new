class Router {
    constructor (Controller) {
        this.router = routie;
        this.Controller = Controller;
        this.listen()
    }

    listen () {
        this.router({

            '': () => {
                this.Controller.loadTemplate('root')
            },

            'movie-list': () => {
                this.Controller.loadTemplate('movieList')
            },

            'menu-item': () => {
                this.Controller.loadTemplate('menuItem')
            }

        })
    }
}

export default Router