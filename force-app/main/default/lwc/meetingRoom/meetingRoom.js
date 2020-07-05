import { LightningElement, api, wire} from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}
    @api showRoomInfo = false;
    
    @wire(CurrentPageReference) pageReference; 
    tileClickHandler(){
      const  tileClicked = new CustomEvent('titleClick',{detail: this.meetingRoomInfo, bubbles:true});
        console.log('Custom Event Child',tileClicked);
       this.dispatchEvent(tileClicked);
       fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo);
        alert('Fire Events');
    }
}