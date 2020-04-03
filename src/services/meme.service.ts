import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Meme } from 'src/models/Meme';
import { MemeResponse } from 'src/models/MemeResponse';

@Injectable({
  providedIn: 'root',
})
export class MemeService {
  public memeToDisplayId$ = new BehaviorSubject<number>(null);
  private memes$ = new BehaviorSubject<Meme[]>(null);
  private currentMemeIndex: number;

  constructor(private http: HttpClient, private router: Router) {}

  public getMemeResponse(): Observable<MemeResponse> {
    return this.http.get<MemeResponse>('https://api.imgflip.com/get_memes');
  }

  public getMemeById(id: number): Meme {
    this.currentMemeIndex = this.memes$.value.findIndex(
      (meme) => meme.id === id
    );
    return this.memes$.value.find((meme) => meme.id === id);
  }

  public setMemes(memes: Meme[]) {
    this.memes$.next(memes);
  }

  public goBack() {
    this.router.navigate(['meme', this.calculateNextMemeId(-1)]);
  }

  public goNext() {
    this.router.navigate(['meme', this.calculateNextMemeId(1)]);
  }

  private calculateNextMemeId(stepValue: number): number {
    const memesLength = this.memes$.value.length;
    const nextIndex =
      (((this.currentMemeIndex + stepValue) % memesLength) + memesLength) %
      memesLength;
    const nextMemeId = this.memes$.value[nextIndex].id;
    this.memeToDisplayId$.next(nextMemeId);
    return nextMemeId;
  }
}
