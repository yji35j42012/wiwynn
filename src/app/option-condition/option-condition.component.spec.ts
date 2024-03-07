import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionConditionComponent } from './option-condition.component';

describe('OptionConditionComponent', () => {
  let component: OptionConditionComponent;
  let fixture: ComponentFixture<OptionConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionConditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
