import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProcessDetailComponent } from './e-process-detail.component';

describe('EProcessDetailComponent', () => {
  let component: EProcessDetailComponent;
  let fixture: ComponentFixture<EProcessDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EProcessDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EProcessDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
