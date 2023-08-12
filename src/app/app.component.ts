import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sample';
  to: number = 0;
  sampleMesseage = "Bandarawela"

  handleTotal(to:number) {
    this.to = to * 2;
  }
}
