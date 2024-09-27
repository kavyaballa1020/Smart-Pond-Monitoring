import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorCardsComponent } from './sensor-cards.component';

describe('SensorCardsComponent', () => {
  let component: SensorCardsComponent;
  let fixture: ComponentFixture<SensorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SensorCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
