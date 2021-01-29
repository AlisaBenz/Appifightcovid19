import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Form14dayPage } from './form14day.page';

describe('Form14dayPage', () => {
  let component: Form14dayPage;
  let fixture: ComponentFixture<Form14dayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form14dayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Form14dayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
