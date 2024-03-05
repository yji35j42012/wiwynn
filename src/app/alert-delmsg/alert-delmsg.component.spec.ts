import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDelmsgComponent } from './alert-delmsg.component';

describe('AlertDelmsgComponent', () => {
  let component: AlertDelmsgComponent;
  let fixture: ComponentFixture<AlertDelmsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDelmsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertDelmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
