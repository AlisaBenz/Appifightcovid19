import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { From14daytablePage } from './from14daytable.page';

describe('From14daytablePage', () => {
  let component: From14daytablePage;
  let fixture: ComponentFixture<From14daytablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ From14daytablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(From14daytablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
