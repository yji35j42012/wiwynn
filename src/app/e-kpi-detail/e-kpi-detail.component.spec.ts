import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKpiDetailComponent } from './e-kpi-detail.component';

describe('EKpiDetailComponent', () => {
  let component: EKpiDetailComponent;
  let fixture: ComponentFixture<EKpiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EKpiDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EKpiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
