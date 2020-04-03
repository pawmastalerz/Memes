import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MemeResponse } from 'src/models/MemeResponse';
import { MemeService } from 'src/services/meme.service';

export const MEME_RESOLVER_DATA = 'memeResponse';

@Injectable({
  providedIn: 'root',
})
export class MemeResolver implements Resolve<MemeResponse> {
  constructor(private memeService: MemeService) {}

  resolve(): Observable<MemeResponse> {
    return this.memeService.getMemeResponse();
  }
}
