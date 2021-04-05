import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerateuseradminPage } from './generateuseradmin.page';

describe('GenerateuseradminPage', () => {
  let component: GenerateuseradminPage;
  let fixture: ComponentFixture<GenerateuseradminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateuseradminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateuseradminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
