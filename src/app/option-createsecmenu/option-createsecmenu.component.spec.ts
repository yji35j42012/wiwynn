import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionCreatesecmenuComponent } from './option-createsecmenu.component';

describe('OptionCreatesecmenuComponent', () => {
  let component: OptionCreatesecmenuComponent;
  let fixture: ComponentFixture<OptionCreatesecmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionCreatesecmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionCreatesecmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
