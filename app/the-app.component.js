import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Component({
  selector: 'the-app',
  template: `
    <h1>{{title | async}}</h1>
    <the-child [(model)]="childModel"></the-child>
    <code><pre>{{childModel | json}}</pre></code>
  `,
})
export default class TheAppComponent {
  constructor() {
    this.title = Observable.of('Hello from the app')
      .map(title => title + '!');

    this.childModel = {
      title: 'I am the child component',
      clicked: 0,
    };
  }
}

TheAppComponent.parameters = [];
