import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meme } from 'src/models/Meme';
import { MemeService } from 'src/services/meme.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public meme: Meme;
  public memeId: number;
  constructor(
    private route: ActivatedRoute,
    private memeService: MemeService
  ) {}

  ngOnInit() {
    this.memeService.memeToDisplayId$.subscribe((id) => {
      this.meme = this.memeService.getMemeById(id);
      console.log(this.meme);
    });
    this.memeService.memeToDisplayId$.next(this.route.snapshot.params['id']);
  }

  goBack() {
    this.memeService.goBack();
  }

  goNext() {
    this.memeService.goNext();
  }
}
