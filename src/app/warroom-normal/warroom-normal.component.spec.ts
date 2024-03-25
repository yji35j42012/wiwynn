import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarroomNormalComponent } from './warroom-normal.component';

describe('WarroomNormalComponent', () => {
  let component: WarroomNormalComponent;
  let fixture: ComponentFixture<WarroomNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarroomNormalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarroomNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
