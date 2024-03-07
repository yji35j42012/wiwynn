import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionKpitargetComponent } from './option-kpitarget.component';

describe('OptionKpitargetComponent', () => {
  let component: OptionKpitargetComponent;
  let fixture: ComponentFixture<OptionKpitargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionKpitargetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionKpitargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
