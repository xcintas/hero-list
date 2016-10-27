import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroList: Array<Object> = [
    { name: 'Hulk', age: 35, img: 'http://img.lum.dolimg.com/v1/images/usa_avengers_chi_hulk_n_4d0875ae.png?region=0%2C0%2C300%2C300' },
    { name: 'Captain America', age: 20, img: 'http://vignette3.wikia.nocookie.net/marveldatabase/images/f/f0/Steven_Rogers_(Earth-1610).png/revision/latest?cb=20100205184014' },
    { name: 'Batman', age: 40, img: 'https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg' },
    { name: 'Spartacus', age: 60, img: 'http://screenrant.com/wp-content/uploads/Liam-McIntyre-Spartacus-Decimation.jpg' },
  ];

  constructor() { }

  ngOnInit() { }
}
