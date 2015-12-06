import _ from 'underscore'
import Mustache from 'mustache'

//TEMPLATES
import moviesList from './layouts/movie-list.mustache'

class Templates {
	constructor(){
		_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;

		this.templates = {
			movieItem:moviesList
		};



	}


}
export default Templates