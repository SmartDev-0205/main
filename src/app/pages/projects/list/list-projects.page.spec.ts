import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ListProjectsPage} from './list-projects.page';

describe('ProjectsComponent', () => {
  let component: ListProjectsPage;
  let fixture: ComponentFixture<ListProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListProjectsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
