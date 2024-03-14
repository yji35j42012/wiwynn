import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKpiSearchComponent } from './e-kpi-search.component';

describe('EKpiSearchComponent', () => {
  let component: EKpiSearchComponent;
  let fixture: ComponentFixture<EKpiSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EKpiSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EKpiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
