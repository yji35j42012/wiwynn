import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMaintainComponent } from './option-maintain.component';

describe('OptionMaintainComponent', () => {
  let component: OptionMaintainComponent;
  let fixture: ComponentFixture<OptionMaintainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionMaintainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
