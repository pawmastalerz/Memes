/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemeService } from './meme.service';

describe('Service: Meme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemeService]
    });
  });

  it('should ...', inject([MemeService], (service: MemeService) => {
    expect(service).toBeTruthy();
  }));
});
