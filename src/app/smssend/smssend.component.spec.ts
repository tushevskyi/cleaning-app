import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmssendComponent } from './smssend.component';

describe('SmssendComponent', () => {
  let component: SmssendComponent;
  let fixture: ComponentFixture<SmssendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmssendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmssendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
