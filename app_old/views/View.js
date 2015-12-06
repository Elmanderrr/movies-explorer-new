import _ from 'underscore'
import helpers from './../helpers/helpers'
import Mustache from 'mustache'

class View {
	constructor(templates){
		this.template = templates;
		this.elements = {
			$$movieContainer:helpers.qs('.posters'),
			$$rating:helpers.qs('#filter-rating'),
			$$votes:helpers.qs('#filter-votes_count'),
			$$filter:helpers.qs('#filter')
		}

	}

	render(movies){
		if (!movies) {
			return console.error(`Movies array wasn't given`);
		}

        let rendered = Mustache.render(this.template.templates.movieItem, {list:movies});

		this.elements.$$movieContainer.innerHTML = rendered;
	}

    bind(event, handler) {

    	switch(event) {

    		case 'FILTER:submit':
	            helpers.$on(this.elements.$$filter, 'submit', (e)=>{
	            	e.preventDefault();
	            	
	                handler({
	                	rating:this.elements.$$rating.value,
	                	votes:this.elements.$$votes.value
	                });
	            });
	            break;
    			
	        default:
	        	break;
    	}
    }
}

export default View