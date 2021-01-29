import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginpatientPage } from './loginpatient.page';

describe('LoginpatientPage', () => {
  let component: LoginpatientPage;
  let fixture: ComponentFixture<LoginpatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginpatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
