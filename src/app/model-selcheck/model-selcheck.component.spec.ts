import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSelcheckComponent } from './model-selcheck.component';

describe('ModelSelcheckComponent', () => {
  let component: ModelSelcheckComponent;
  let fixture: ComponentFixture<ModelSelcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSelcheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelSelcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
