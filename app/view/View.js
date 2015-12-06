import templates from './templates'
import Mustache from 'mustache'

class View {

    constructor () {
        this.templates = templates;
    }

    renderTemplate (template,data) {
        return this.templates.get(template)
                .then( tpl => {
                    return Mustache.render(tpl,{list:data})
                })
                .then( rendered => {
                    $('body').append(rendered)
                })
    }


}


export default View