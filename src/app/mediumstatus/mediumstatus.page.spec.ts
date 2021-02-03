import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MediumstatusPage } from './mediumstatus.page';

describe('MediumstatusPage', () => {
  let component: MediumstatusPage;
  let fixture: ComponentFixture<MediumstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumstatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MediumstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
