import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystateComponent } from './mystate.component';

describe('ProfileComponent', () => {
  let component: MystateComponent;
  let fixture: ComponentFixture<MystateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
