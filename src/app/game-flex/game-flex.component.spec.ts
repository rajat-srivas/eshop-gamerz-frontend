/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameFlexComponent } from './game-flex.component';

describe('GameFlexComponent', () => {
  let component: GameFlexComponent;
  let fixture: ComponentFixture<GameFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
