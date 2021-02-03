import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiskystatusPage } from './riskystatus.page';

describe('RiskystatusPage', () => {
  let component: RiskystatusPage;
  let fixture: ComponentFixture<RiskystatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskystatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiskystatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
