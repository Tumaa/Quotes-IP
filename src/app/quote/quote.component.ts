import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote  ( 1,  'tumaa',  'ali',  'never give up' ),
    new Quote  ( 2,  'tumaa',  'ali',  'never give up' ),
    new Quote (3, 'tumaa',  'ali', 'never give up' ),
    new Quote  ( 4, 'tumaa', 'ali', 'never give up'), 
    new Quote  ( 5, 'tumaa', 'ali',  'never give up' ),
    new Quote ( 6, 'tumaa',  'ali', 'never give up' ),

  ];
  

toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
completeQuote(isComplete, index){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}

constructor() { }

ngOnInit() {
}

}
