import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddformQPage } from './addform-q.page';

describe('AddformQPage', () => {
  let component: AddformQPage;
  let fixture: ComponentFixture<AddformQPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformQPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddformQPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
