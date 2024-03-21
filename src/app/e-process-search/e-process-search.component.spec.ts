import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProcessSearchComponent } from './e-process-search.component';

describe('EProcessSearchComponent', () => {
  let component: EProcessSearchComponent;
  let fixture: ComponentFixture<EProcessSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EProcessSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EProcessSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
