import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JQueryTestComponent } from './jquery-test.component';

describe('JQueryTestComponent', () => {
  let component: JQueryTestComponent;
  let fixture: ComponentFixture<JQueryTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JQueryTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JQueryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
