import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2>String Pipes Works</h2>
    <h2>{{ name }}</h2>
    <h2>{{ name | lowercase }}</h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ msg | titlecase }}</h2>
    <h2>{{ name | slice : 4 : 7 }}</h2>
    <h2>{{ person | json }}</h2>

    <h2>Number Pipes Works</h2>
    <h2>{{ 3.145 | number : '1.2-3' }}</h2>
    <h2>{{ 3.145 | number : '2.4-5' }}</h2>
    <h2>{{ 3.145 | number : '3.1-2' }}</h2>

    <h2>Percent Pipes Works</h2>
    <h2>{{ 1.25 | percent }}</h2>

    <h2>Currency Pipes Works</h2>
    <h2>{{ 1.25 | currency }}</h2>
    <h2>{{ 1.25 | currency : 'EUR' : 'code' }}</h2>

    <h2>Date Pipes Works</h2>
    <h2>{{ date }}</h2>
    <h2>{{ date | date : 'short' }}</h2>
    <h2>{{ date | date : 'shortDate' }}</h2>
    <h2>{{ date | date : 'shortTime' }}</h2>
  `,

  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  public name = 'Hey Angular';
  public msg = 'Welcome to angular';
  public person = {
    firstname: 'John',
    lastname: 'Thomson',
  };
  public date = new Date();
}
