import Controller from './Controller'
import _ from 'underscore'
import Api from './../api/themoviedbApi'
import helpers from './../helpers/helpers'



_.extend(Controller.prototype, {

    getMovies(page=5) {

        let promises = _.map(helpers.generateArray(page), (n)=> {

            return new Promise((resolve) => {

                return Api.getMovies(n)
                    .then(promise => resolve(promise.results))

            })

        });

        return Promise.all(promises)
            .then(data => helpers.concatArrays(data))


    },


    getMovieById (id) {
        return Api.getMovieById(id)
    }

});



export default Controller