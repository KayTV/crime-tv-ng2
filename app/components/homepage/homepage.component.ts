import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../services/tvShows.service';
import { TvShow } from '../../models/tv-shows';

@Component({
  selector: 'homepage',
  template: `
    <div *ngFor ='let tvshow of tvshows'>
      <p>{{tvshow.name}}</p>
    </div>  
  `
})

export class HomeComponent implements OnInit {
  tvshows: TvShow[];

  constructor (private tvShowService: TvShowService) {}

  getTvShows() {
    this.tvShowService.getTvShows()
      .subscribe(res => this.tvshows)
  }

  ngOnInit() {
    this.getTvShows();
  }
}
