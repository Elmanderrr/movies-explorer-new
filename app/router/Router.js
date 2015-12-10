import router from './../vendor/js/routie'

class Router {
    constructor (Controller) {
        this.router = router;
        this.Controller = Controller;
        this.listen()
    }

    listen () {
        this.router({

            '': () => {
                this.Controller.loadTemplate('root')
            },

            'movie-list/:id': (id) => {
                this.Controller.getMovieById(id)
                    .then(resp => {
                        this.Controller.loadTemplate('movie', resp)
                    })
            },

            'movie-list': () => {

                this.Controller.getMovies()
                    .then((resp) => {
                        this.Controller.loadTemplate('movieList',{list:resp})
                    })

            },

            'menu-item': () => {
                this.Controller.loadTemplate('menuItem')
            }

        })
    }
}

export default Router