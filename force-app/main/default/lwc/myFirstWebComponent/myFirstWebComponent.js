import { LightningElement, track } from 'lwc';

export default class MyFirstWebComponent extends LightningElement {
    @track dynamicGreeting ='World';

    greetingChangeHandler(event){
        this.dynamicGreeting = event.target.value;         
    }
}

