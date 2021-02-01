import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddformquestionPage } from './addformquestion.page';

describe('AddformquestionPage', () => {
  let component: AddformquestionPage;
  let fixture: ComponentFixture<AddformquestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformquestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddformquestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
