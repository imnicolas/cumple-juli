import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('changeButtonSize', [
      state(
        'initial',
        style({
          backgroundColor: 'green',
          width: '100px',
          height: '50px',
        })
      ),
      state(
        'final',
        style({
          backgroundColor: 'red',
          width: '200px',
          height: '200px',
        })
      ),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms')),
    ]),
  ],
})
export class AppComponent {
  title = 'juli';
  currentState = 'initial';

  payMethod() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    setTimeout(() => {
      console.warn("vas a lograr todo lo que te propongas ♥")
    }, 1500);
  }
}
