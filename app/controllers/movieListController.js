import Controller from './Controller'
import _ from 'underscore'
import Api from './../api/themoviedbApi'
import helpers from './../helpers/helpers'



_.extend(Controller.prototype, {

    getMovies(page) {

        let promises = _.map(helpers.generateArray(page), (n)=> {

            return new Promise((resolve) => {

                return Api.getMovies(n)
                    .then(promise => resolve(promise.results))

            })

        });

        return Promise.all(promises)
            .then(data => helpers.concatArrays(data))


    },


    /**
     * I remove unnecessary actors from list and leave only five of them for showing.
     * And set key last = true to the last item in the set
     * @param movies
     * @returns {Array}
     */
    filterActors (movies = []) {
        const itemsToShow = 5;

        movies.credits.cast = _.filter(movies.credits.cast, (actor, i) => {
            actor.last = (i === itemsToShow - 1) ;

            return i < itemsToShow
        });

        return movies
    },

    getMovieById (id) {
        return Api.getMovieById(id)
                .then(this.filterActors)
    }

});



export default Controller