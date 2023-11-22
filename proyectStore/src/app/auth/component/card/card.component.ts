import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.hero) throw Error ('Hero property is requer')
  }

  @Input()
  public hero!: Hero;


}
