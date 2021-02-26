import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NameriskstatusPage } from './nameriskstatus.page';

describe('NameriskstatusPage', () => {
  let component: NameriskstatusPage;
  let fixture: ComponentFixture<NameriskstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameriskstatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NameriskstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
