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
                    return Mustache.render(tpl,data)
                })
                .then( rendered => {
                    this.append(rendered)
                })
    }

    append (html) {
        this.$root.html(html)
    }

    handler (props) {
        var evt = props.evt;
        var selector = props.selector;
        var callback = props.callback;

        this.$root.on(evt,selector,callback)

        return this
    }


}


export default View