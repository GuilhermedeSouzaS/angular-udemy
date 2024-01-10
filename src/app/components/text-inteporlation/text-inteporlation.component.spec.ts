import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInteporlationComponent } from './text-inteporlation.component';

describe('TextInteporlationComponent', () => {
  let component: TextInteporlationComponent;
  let fixture: ComponentFixture<TextInteporlationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInteporlationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInteporlationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
