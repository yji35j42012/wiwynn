import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionRolesetListComponent } from './option-roleset-list.component';

describe('OptionRolesetListComponent', () => {
  let component: OptionRolesetListComponent;
  let fixture: ComponentFixture<OptionRolesetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionRolesetListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionRolesetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
