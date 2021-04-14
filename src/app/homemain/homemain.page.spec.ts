import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomemainPage } from './homemain.page';

describe('HomemainPage', () => {
  let component: HomemainPage;
  let fixture: ComponentFixture<HomemainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomemainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
