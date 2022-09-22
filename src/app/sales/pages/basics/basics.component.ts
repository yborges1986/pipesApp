import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent {
  name: string = 'Yordi';
  upperName: string = 'YORDI';
  fullName: string = 'YoRdI BoRGes';

  date: Date = new Date();
  constructor() {}
}
