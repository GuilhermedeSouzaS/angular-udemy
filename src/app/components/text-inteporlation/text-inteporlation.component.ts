import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-inteporlation',
  templateUrl: './text-inteporlation.component.html',
  styleUrls: ['./text-inteporlation.component.scss']
})
export class TextInteporlationComponent {

  public name: string = 'Guilherme';
  public age: number = 22;

  public sum(n1: number , n2: number) {
    return n1 + n2;

  }

}
