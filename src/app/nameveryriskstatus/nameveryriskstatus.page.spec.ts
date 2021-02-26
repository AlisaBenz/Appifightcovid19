import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NameveryriskstatusPage } from './nameveryriskstatus.page';

describe('NameveryriskstatusPage', () => {
  let component: NameveryriskstatusPage;
  let fixture: ComponentFixture<NameveryriskstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameveryriskstatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NameveryriskstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
