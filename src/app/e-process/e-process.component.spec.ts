import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProcessComponent } from './e-process.component';

describe('EProcessComponent', () => {
  let component: EProcessComponent;
  let fixture: ComponentFixture<EProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
