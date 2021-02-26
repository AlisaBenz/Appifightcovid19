import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckuserPage } from './checkuser.page';

describe('CheckuserPage', () => {
  let component: CheckuserPage;
  let fixture: ComponentFixture<CheckuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
