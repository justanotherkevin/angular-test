import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-repo';
  name: string = 'steve';
  constructor() {
    this.changeName('John');
  }
  changeName(name: string): void {
    // void for this func returns nothing
    this.name = name;
  }
}
