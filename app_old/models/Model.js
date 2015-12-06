import _ from 'underscore'
import helpers from './../helpers/helpers'
import View from './../views/View'
import Api from './../api/themoviedbApi'
class Model {
	constructor(){

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

	set setMovies (movies) {
        console.log(movies)
		return this.movies = movies;
	}


	filterByRating (data,rating) {
		return rating ? _.filter(data, movie => movie.vote_average > rating) : data
	}

	filterByVoteCount (data, voteCount) {
		return voteCount ? _.filter(data, movie => movie.vote_count > voteCount) : data
	}

}


export default Model