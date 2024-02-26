import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarroomLineComponent } from './warroom-line.component';

describe('WarroomLineComponent', () => {
  let component: WarroomLineComponent;
  let fixture: ComponentFixture<WarroomLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarroomLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarroomLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
