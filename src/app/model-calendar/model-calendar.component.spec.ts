import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCalendarComponent } from './model-calendar.component';

describe('ModelCalendarComponent', () => {
  let component: ModelCalendarComponent;
  let fixture: ComponentFixture<ModelCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
