import { TestBed, inject } from '@angular/core/testing';

import { SendSmsService } from './send-sms.service';

describe('SendSmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendSmsService]
    });
  });

  it('should be created', inject([SendSmsService], (service: SendSmsService) => {
    expect(service).toBeTruthy();
  }));
});
