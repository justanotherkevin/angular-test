import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-test-repo';
  name: string = 'steve';
  activeTelecom: number;

  constructor() {
    this.changeName('John');
  }
  test(): void {
    console.log('test');
  }
  changeActiveTelecom(id: number): void {
    this.activeTelecom = id;
  }
  changeName(name: string): void {
    // void for this func returns nothing
    this.name = name;
  }
}
