import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MemeResolver } from './../resolvers/meme.resolver';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemeModule } from './meme/meme.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MemeModule],
  providers: [MemeResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
