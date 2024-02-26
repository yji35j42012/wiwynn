import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarroomMachineComponent } from './warroom-machine.component';

describe('WarroomMachineComponent', () => {
  let component: WarroomMachineComponent;
  let fixture: ComponentFixture<WarroomMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarroomMachineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarroomMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
