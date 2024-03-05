import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMagComponent } from './alert-mag.component';

describe('AlertMagComponent', () => {
  let component: AlertMagComponent;
  let fixture: ComponentFixture<AlertMagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertMagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertMagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
