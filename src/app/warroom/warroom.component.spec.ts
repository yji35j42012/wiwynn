import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarroomComponent } from './warroom.component';

describe('WarroomComponent', () => {
  let component: WarroomComponent;
  let fixture: ComponentFixture<WarroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarroomComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WarroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
