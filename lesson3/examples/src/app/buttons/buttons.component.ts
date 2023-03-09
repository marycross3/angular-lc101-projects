import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   buttonState: boolean[] = [true,true, true];
   location: string = 'center';

   constructor() { }

   ngOnInit() { }

   reactivateButtons(){
      this.buttonState = [true, true, true]
      // for (let i = 0; i < this.buttons.length; i++){
      //    this.buttons[i] = true;
      // }
      return this.buttonState;
   }  
   
   shiftLocation(oldLocation: string){
      while (this.location === oldLocation){
         this.location = ['left', 'right','center'][Math.floor(Math.random()*3)];
      }
      return this.location
   }
}


