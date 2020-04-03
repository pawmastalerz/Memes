import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meme } from 'src/models/Meme';
import { MemeResponse } from 'src/models/MemeResponse';

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  public memes$ = new BehaviorSubject<Meme[]>(null);
  public memeToDisplayId$ = new BehaviorSubject<number>(null);

  constructor(private http: HttpClient) {}

  public getMemeResponse(): Observable<MemeResponse> {
    return this.http.get<MemeResponse>('https://api.imgflip.com/get_memes');
  }

  public getMemeById(id: number): Meme {
    return this.memes$.value.find((meme) => meme.id === id);
  }
}
