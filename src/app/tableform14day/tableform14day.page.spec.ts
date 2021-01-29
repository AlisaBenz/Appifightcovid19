import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tableform14dayPage } from './tableform14day.page';

describe('Tableform14dayPage', () => {
  let component: Tableform14dayPage;
  let fixture: ComponentFixture<Tableform14dayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tableform14dayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tableform14dayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
