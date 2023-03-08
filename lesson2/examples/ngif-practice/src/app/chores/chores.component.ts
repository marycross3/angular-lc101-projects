import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['stff'];
   finishedChores = ['cooking',  'walk dog', 'workout', 'more stuff', 'watch tv', 'clean'];

   targetImage = 'https://media.istockphoto.com/id/1267740854/vector/good-job-work-comic-text-sound-effects-pop-art-style-vector-speech-bubble-word-and-short.jpg?s=612x612&w=is&k=20&c=68gpkPxQIfbYLavS6a1zELCdWZHk1zr7JW9ZgmeiCmU=';

   constructor() { }

   ngOnInit() {
   }

}
