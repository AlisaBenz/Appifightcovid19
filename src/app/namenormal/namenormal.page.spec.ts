import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NamenormalPage } from './namenormal.page';

describe('NamenormalPage', () => {
  let component: NamenormalPage;
  let fixture: ComponentFixture<NamenormalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamenormalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NamenormalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
