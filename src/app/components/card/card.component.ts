import { Component, OnInit } from '@angular/core';
import { CardInterface } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  
  cards!: CardInterface[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards().subscribe((data: CardInterface[]) => {
      this.cards = data;
    });
  }
  
}
