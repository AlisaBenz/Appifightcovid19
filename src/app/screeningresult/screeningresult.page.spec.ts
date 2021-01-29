import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreeningresultPage } from './screeningresult.page';

describe('ScreeningresultPage', () => {
  let component: ScreeningresultPage;
  let fixture: ComponentFixture<ScreeningresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningresultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
