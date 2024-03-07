import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionKpicreaetComponent } from './option-kpicreaet.component';

describe('OptionKpicreaetComponent', () => {
  let component: OptionKpicreaetComponent;
  let fixture: ComponentFixture<OptionKpicreaetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionKpicreaetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionKpicreaetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
