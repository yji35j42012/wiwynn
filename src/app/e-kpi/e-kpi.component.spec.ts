import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKpiComponent } from './e-kpi.component';

describe('EKpiComponent', () => {
  let component: EKpiComponent;
  let fixture: ComponentFixture<EKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EKpiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
