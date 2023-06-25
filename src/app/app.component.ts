import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Renderer2 } from '@angular/core';

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
          width: '500px',
          height: '500px',
        })
      ),
      transition('initial=>final', animate('4500ms')),
      transition('final=>initial', animate('1000ms')),
    ]),
  ],
})
export class AppComponent {
  title = 'juli';
  currentState = 'initial';

  constructor(private renderer: Renderer2){}

  payMethod() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    const dynamicDiv = this.renderer.createElement('div');
    const text = this.renderer.createText('¡Vas a lograr todo lo que te propongas ♥');
    this.renderer.appendChild(dynamicDiv, text);
    const container = this.renderer.selectRootElement('#dynamicDiv');
    this.renderer.appendChild(container, dynamicDiv);
    setTimeout(() => {
      this.renderer.removeChild(container, dynamicDiv);
    }, 4500);
  }
}
