import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientmapPage } from './patientmap.page';

describe('PatientmapPage', () => {
  let component: PatientmapPage;
  let fixture: ComponentFixture<PatientmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
