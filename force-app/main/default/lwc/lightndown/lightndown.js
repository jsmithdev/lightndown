import { api, LightningElement } from 'lwc';
import { marked } from './markdown';
import { hljs } from './highlight';

const toHTML = marked()
const highlight = hljs({})

toHTML.setOptions({
    highlight: function(code) {
        console.dir(highlight.getLanguage('xml'))
        console.dir(code)
        return highlight.highlight(`<code class="xml">${code}</code>`).value
    }
});
  

export default class lightndown extends LightningElement {

    @api url 
    @api string 

    connectedCallback(){
        
        if(!this.init){
            
            this.init = true

            if(this.url){

                this.getDown(this.url)
            }
            else if(this.string){

                // eslint-disable-next-line @lwc/lwc/no-async-operation
                setTimeout(() => this.setMarkdown(this.string), 0)
            }
        }
    }
    
    async getDown(url){
        
        const markdown = await (await fetch(url)).text()
        
        this.setMarkdown(markdown)
    }

    setMarkdown(markdown){

        // eslint-disable-next-line @lwc/lwc/no-inner-html
        this.template.querySelector('pre').innerHTML = toHTML(markdown);
    }
}