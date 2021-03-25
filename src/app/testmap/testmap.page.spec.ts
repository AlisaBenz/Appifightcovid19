import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestmapPage } from './testmap.page';

describe('TestmapPage', () => {
  let component: TestmapPage;
  let fixture: ComponentFixture<TestmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
