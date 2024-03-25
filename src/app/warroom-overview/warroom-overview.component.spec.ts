import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarroomOverviewComponent } from './warroom-overview.component';

describe('WarroomOverviewComponent', () => {
  let component: WarroomOverviewComponent;
  let fixture: ComponentFixture<WarroomOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarroomOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarroomOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
