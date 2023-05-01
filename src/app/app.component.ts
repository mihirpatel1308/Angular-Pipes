import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filteredString: string = '';

  users = [{
    name: 'Leela',
    joinedDate: new Date(15, 2, 2016)
  },
  {
    name: 'Rama',
    joinedDate: new Date(17, 3, 2019)
  },
  {
    name: 'Krishna',
    joinedDate: new Date(20, 4, 2019)
  },
  ];
}
