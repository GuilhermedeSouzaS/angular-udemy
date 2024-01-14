import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  public number: number = 0;

  public sum(): void {
    this.number++;
  }

  public sub(): void {
    this.number--;
  }

}
