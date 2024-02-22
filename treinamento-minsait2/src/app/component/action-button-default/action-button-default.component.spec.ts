import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonDefaultComponent } from './action-button-default.component';

describe('ActionButtonDefaultComponent', () => {
  let component: ActionButtonDefaultComponent;
  let fixture: ComponentFixture<ActionButtonDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionButtonDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionButtonDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
