import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NamemediumstatusPage } from './namemediumstatus.page';

describe('NamemediumstatusPage', () => {
  let component: NamemediumstatusPage;
  let fixture: ComponentFixture<NamemediumstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamemediumstatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NamemediumstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
