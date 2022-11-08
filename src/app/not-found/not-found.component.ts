import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  image: string = '';

  constructor() { }

  ngOnInit(): void {
    const images: string[] = [
      '/assets/images/404/cat.gif',
      '/assets/images/404/mario.gif',
      '/assets/images/404/dragon-ball.gif',
      '/assets/images/404/pokemon.gif'
    ];

    this.image = images[Math.floor(Math.random() * images.length)];
  }

}
