import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManishComponent } from './manish.component';

describe('ManishComponent', () => {
  let component: ManishComponent;
  let fixture: ComponentFixture<ManishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
