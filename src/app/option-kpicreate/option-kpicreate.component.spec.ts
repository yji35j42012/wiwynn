import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionKpicreateComponent } from './option-kpicreate.component';

describe('OptionKpicreateComponent', () => {
  let component: OptionKpicreateComponent;
  let fixture: ComponentFixture<OptionKpicreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionKpicreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionKpicreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
