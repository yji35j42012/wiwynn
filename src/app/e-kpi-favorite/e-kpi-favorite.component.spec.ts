import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKpiFavoriteComponent } from './e-kpi-favorite.component';

describe('EKpiFavoriteComponent', () => {
  let component: EKpiFavoriteComponent;
  let fixture: ComponentFixture<EKpiFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EKpiFavoriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EKpiFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
