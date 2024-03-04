import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPagesetComponent } from './option-pageset.component';

describe('OptionPagesetComponent', () => {
  let component: OptionPagesetComponent;
  let fixture: ComponentFixture<OptionPagesetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionPagesetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionPagesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
