import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDeviceComponent } from './option-device.component';

describe('OptionDeviceComponent', () => {
  let component: OptionDeviceComponent;
  let fixture: ComponentFixture<OptionDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionDeviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
