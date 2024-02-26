import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCenterComponent } from './equipment-center.component';

describe('EquipmentCenterComponent', () => {
  let component: EquipmentCenterComponent;
  let fixture: ComponentFixture<EquipmentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
