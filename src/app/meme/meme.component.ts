import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemeResponse } from 'src/models/MemeResponse';
import { MEME_RESOLVER_DATA } from 'src/resolvers/meme.resolver';
import { MemeService } from 'src/services/meme.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss'],
})
export class MemeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private memeService: MemeService
  ) {}

  ngOnInit() {
    const memeResponse: MemeResponse = this.route.snapshot.data[
      MEME_RESOLVER_DATA
    ];
    const memes = memeResponse.data.memes;
    this.memeService.setMemes(memes);
    if (!this.route.children.length) {
      this.router.navigate(['meme', memes[0].id]);
    }
    console.log(memes);
  }
}
