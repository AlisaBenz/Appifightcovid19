import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestregisterPage } from './testregister.page';

describe('TestregisterPage', () => {
  let component: TestregisterPage;
  let fixture: ComponentFixture<TestregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
