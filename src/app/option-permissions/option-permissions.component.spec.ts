import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPermissionsComponent } from './option-permissions.component';

describe('OptionPermissionsComponent', () => {
  let component: OptionPermissionsComponent;
  let fixture: ComponentFixture<OptionPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionPermissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
