import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NormalstatusPage } from './normalstatus.page';

describe('NormalstatusPage', () => {
  let component: NormalstatusPage;
  let fixture: ComponentFixture<NormalstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalstatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NormalstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
