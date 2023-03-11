import { Component } from '@angular/core';
import { truncate } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  enableMovementUp: boolean = true;
  enableMovementDown: boolean = true;
  enableMovementLeft: boolean = true;
  enableMovementRight: boolean = true;

  checkEdge(width, height){
    //if (this.width > )
    if (this.width > 320000 ){
      this.color = 'orange';
      this.enableMovementRight = false;
    }
    else if (this.width < 10 ){
      this.color = 'orange';
      this.enableMovementLeft = false;
    }
    else if (this.height >330000 )
    {
      this.color = 'orange';
      this.enableMovementUp = false;
    }
    else if (this.height < 10){
      this.color = 'orange';
      this.enableMovementDown = false;
    }
    else {
      this. color = 'blue';
      this.enableMovementRight = true;
      this.enableMovementLeft = true;
      this.enableMovementUp = true;
      this.enableMovementDown = true;
    }
}

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.enableMovementUp = true;
      this.enableMovementDown = true;
      this.enableMovementLeft= true;
      this.enableMovementRight= true;
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeOffEnabled = false;
    }
  }
  landingButton(rocketImage){
    alert("The shuttle is landing. Landing gear engaged.");
    this.height = 0;
    this.width = 0;
    this.takeOffEnabled = true;
    this.message = 'The shuttle has landed.';
    this.color = 'green';
    this.enableMovementUp = false;
    this.enableMovementDown = false;
    this.enableMovementLeft= false;
    this.enableMovementRight= false;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
  
  }

  handleAbort(rocketImage){
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this. height = 0;
      this.width = 0;
      this.takeOffEnabled = true;
      this.color = 'red';
      this.enableMovementUp = false;
      this.enableMovementDown = false;
      this.enableMovementLeft= false;
      this.enableMovementRight= false;
      this.message ='Mission aborted.';
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';


    }
  }

  moveRocket(rocketImage, direction){
    this.checkEdge(this.width, this.height)
    //console.log(this.width, this.height)
    if (direction === "right"){
      let movement = parseInt(rocketImage.style.left) + 10 +'px';
      this.width = this.width + 10000;
      rocketImage.style.left = movement;
      
    }
    if (direction === "left"){
      let movement = parseInt(rocketImage.style.left) + - 10 +'px';
      this.width = this.width - 10000;
      rocketImage.style.left = movement;
      
    }
    if (direction === "up"){
      let movement = parseInt(rocketImage.style.bottom) + 10 +'px';
      this.height = this.height + 10000;
      rocketImage.style.bottom = movement;
      
    }
    if (direction === "down"){
      let movement = parseInt(rocketImage.style.bottom) + - 10 +'px';
      this.height = this.height - 10000;
      rocketImage.style.bottom = movement;
      
    }
  }


}