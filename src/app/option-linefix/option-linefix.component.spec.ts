import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionLinefixComponent } from './option-linefix.component';

describe('OptionLinefixComponent', () => {
  let component: OptionLinefixComponent;
  let fixture: ComponentFixture<OptionLinefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionLinefixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionLinefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
