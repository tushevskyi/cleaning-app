import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSmsComponent } from './email-sms.component';

describe('EmailSmsComponent', () => {
  let component: EmailSmsComponent;
  let fixture: ComponentFixture<EmailSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
