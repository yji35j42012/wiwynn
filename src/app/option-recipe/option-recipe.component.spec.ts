import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRecipeComponent } from './option-recipe.component';

describe('OptionRecipeComponent', () => {
  let component: OptionRecipeComponent;
  let fixture: ComponentFixture<OptionRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
