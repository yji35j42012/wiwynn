import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRolesetComponent } from './option-roleset.component';

describe('OptionRolesetComponent', () => {
  let component: OptionRolesetComponent;
  let fixture: ComponentFixture<OptionRolesetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionRolesetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionRolesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
