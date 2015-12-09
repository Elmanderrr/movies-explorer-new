import templates from './templates'
import Mustache from 'mustache'

class View {

    constructor () {
        this.$root = $('[router-container]')
        this.templates = templates;
    }

    renderTemplate (template, data) {
        return this.templates.get(template)
                .then( tpl => {
                    return Mustache.render(tpl,{list:data})
                })
                .then( rendered => {
                    this.append(rendered)
                })
    }

    append (html) {
        this.$root.html(html)
    }


}


export default View