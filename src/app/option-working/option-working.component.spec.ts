import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionWorkingComponent } from './option-working.component';

describe('OptionWorkingComponent', () => {
  let component: OptionWorkingComponent;
  let fixture: ComponentFixture<OptionWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionWorkingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
