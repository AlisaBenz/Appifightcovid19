import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientgraphPage } from './patientgraph.page';

describe('PatientgraphPage', () => {
  let component: PatientgraphPage;
  let fixture: ComponentFixture<PatientgraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientgraphPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientgraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
