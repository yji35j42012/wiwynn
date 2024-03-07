import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionParameterComponent } from './option-parameter.component';

describe('OptionParameterComponent', () => {
  let component: OptionParameterComponent;
  let fixture: ComponentFixture<OptionParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionParameterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
