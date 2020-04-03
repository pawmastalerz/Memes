import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemeResolver } from 'src/resolvers/meme.resolver';
import { DetailsComponent } from './details/details.component';
import { MemeComponent } from './meme.component';

const routes: Routes = [
  {
    path: '',
    component: MemeComponent,
    resolve: { memeResponse: MemeResolver },
    children: [
      {
        path: ':id',
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MemeComponent, DetailsComponent],
  exports: [RouterModule],
})
export class MemeModule {}
