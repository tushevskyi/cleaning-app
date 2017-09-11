import { TestBed, inject } from '@angular/core/testing';

import { SmsSendService } from './sms-send.service';

describe('SendSmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmsSendService]
    });
  });

  it('should be created', inject([SmsSendService], (service: SmsSendService) => {
    expect(service).toBeTruthy();
  }));
});
