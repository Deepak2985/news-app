import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAsideComponent } from './category-aside.component';

describe('CategoryAsideComponent', () => {
  let component: CategoryAsideComponent;
  let fixture: ComponentFixture<CategoryAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
