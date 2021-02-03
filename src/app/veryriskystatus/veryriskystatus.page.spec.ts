import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeryriskystatusPage } from './veryriskystatus.page';

describe('VeryriskystatusPage', () => {
  let component: VeryriskystatusPage;
  let fixture: ComponentFixture<VeryriskystatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeryriskystatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeryriskystatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
