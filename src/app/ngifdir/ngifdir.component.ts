import { Component } from '@angular/core';

@Component({
  selector: 'app-ngifdir',
  template: `
    <h2>If Directives</h2>
    <h2 *ngIf="displayName; else elseblock">Hello Everyone!!!!</h2>
    <ng-template #elseblock>
      <h2>Bye All</h2>
    </ng-template>
    <div *ngIf="displayName; then thenblock; else elseblock1"></div>
    <ng-template #thenblock>
      <h2>Good Morning</h2>
    </ng-template>
    <ng-template #elseblock1>
      <h2>Good Night</h2>
    </ng-template>
    <h2>Switch Directives</h2>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">Pick red color</div>
      <div *ngSwitchCase="'blue'">Pick blue color</div>
      <div *ngSwitchCase="'green'">Pick green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
    <h2>For Directives</h2>
    <div
      *ngFor="
        let fruit of fruits;
        index as i;
        first as f;
        last as l;
        odd as o;
        even as e
      "
    >
      <h2>{{ i }} {{ f }} {{ fruit }} {{ l }} {{ o }} {{ e }}</h2>
    </div>
  `,
  styleUrls: ['./ngifdir.component.css'],
})
export class NgifdirComponent {
  displayName = true;
  public color = 'orange';
  public fruits = ['Apple', 'Orange', 'Banana', 'Grapes'];
}
