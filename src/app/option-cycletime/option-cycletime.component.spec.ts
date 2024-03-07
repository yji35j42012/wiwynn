import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCycletimeComponent } from './option-cycletime.component';

describe('OptionCycletimeComponent', () => {
  let component: OptionCycletimeComponent;
  let fixture: ComponentFixture<OptionCycletimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionCycletimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionCycletimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
