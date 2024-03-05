import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRolesetEditComponent } from './option-roleset-edit.component';

describe('OptionRolesetEditComponent', () => {
  let component: OptionRolesetEditComponent;
  let fixture: ComponentFixture<OptionRolesetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionRolesetEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionRolesetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
