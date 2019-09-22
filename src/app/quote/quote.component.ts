import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote  ( 1,  'Tumaa',  'Aston Freeman',  'Simplicty is the soul of Efficiency' , new Date(22,9,2019)),
    new Quote  ( 2,  'Tumaa',  'Aston Freeman',  'Simplicty is the soul of Efficiency' , new Date(22,9,2019)),
    // new Quote (3, 'Tumaa',  'Aston Freeman', 'Simplicty is the soul of Efficiency' , new Date(22,9,2019)),
    // new Quote  ( 4, 'Tumaa', 'Aston Freeman', 'Simplicty is the soul of Efficiency', new Date(22,9,2019)),
    // new Quote  ( 5, 'Tumaa', 'Aston Freeman',  'Simplicty is the soul of Efficiency' , new Date(22,9,2019)),
    // new Quote ( 6, 'Tumaa',  'Aston Freeman', 'Simplicty is the soul of Efficiency' , new Date(22,9,2019)),
  ];

toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

constructor() { }

ngOnInit() {
}

}
