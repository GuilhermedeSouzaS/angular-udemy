import { Component } from '@angular/core';

@Component({
  selector: 'app-property-bindings',
  templateUrl: './property-bindings.component.html',
  styleUrls: ['./property-bindings.component.scss']
})
export class PropertyBindingsComponent {

  public isDisabled: boolean = false;
  public imagePath: string = '../../../assets/awesome-himalayas-wallpaper.jpg';
  public visible: boolean = true;

  public showImage = (): boolean => {
    this.visible = !this.visible;

    return this.visible;
  }

}
