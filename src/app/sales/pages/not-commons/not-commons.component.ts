import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styleUrls: ['./not-commons.component.css'],
})
export class NotCommonsComponent {
  name: string = 'Yordi';
  gender: string = 'masculino';

  invitationMap = {
    femenino: 'invitarla',
    masculino: 'invitarlo',
  };

  //i18PluralPipe
  clients: string[] = ['maria', 'pedro', 'pepe', 'José'];
  clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  changePerson() {
    this.name = this.clients[0] || this.name;
    this.gender = 'femenino';
  }

  deletePerson() {
    this.clients.pop();
  }

  ///key value pipe
  person = {
    name: 'Yordi',
    age: 36,
    address: 'Havana,City',
  };

  //async pipe
  myObservable = interval(100);

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos un promesa');
    }, 3500);
  });
}
