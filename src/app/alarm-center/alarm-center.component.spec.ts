import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmCenterComponent } from './alarm-center.component';

describe('AlarmCenterComponent', () => {
  let component: AlarmCenterComponent;
  let fixture: ComponentFixture<AlarmCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlarmCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlarmCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
