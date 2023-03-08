import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  faveLinks = ["https://mail.google.com/mail/u/0/?tab=rm&ogbl", "https://slack.com/"]
}
