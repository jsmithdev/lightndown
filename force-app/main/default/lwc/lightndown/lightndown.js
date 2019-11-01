import { api, track, LightningElement } from 'lwc';
import { marked } from './markdown';

export default class lightndown extends LightningElement {

    @track textContent = ''

    @api url = 'https://raw.githubusercontent.com/jsmithdev/modal/master/README.md'

    connectedCallback(){
        
        if(!this.init){
            this.init = true
            if(this.url){
                this.getDown()
            }
        }
    }
    
    async getDown(){
        
        const content = await (await fetch(this.url)).text()
        console.log(content)
        this.markdown = marked()(content)

        this.template.querySelector('pre').innerHTML = this.markdown;
    }
}