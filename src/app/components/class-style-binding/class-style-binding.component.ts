import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.scss']
})
export class ClassStyleBindingComponent {

  public age: number = 19;
  public isTextDecoration = this.age >= 18 ? 'underline' : 'line-through';

}
