import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthformPage } from './healthform.page';

describe('HealthformPage', () => {
  let component: HealthformPage;
  let fixture: ComponentFixture<HealthformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
