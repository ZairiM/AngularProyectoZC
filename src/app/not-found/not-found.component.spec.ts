import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFOundComponent } from './not-found.component';

describe('NotFOundComponent', () => {
  let component: NotFOundComponent;
  let fixture: ComponentFixture<NotFOundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFOundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFOundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
