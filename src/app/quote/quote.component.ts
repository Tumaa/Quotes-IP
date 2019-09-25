import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote  ( 1,  'Tumaa',  'Racheal',  'The best kiss is the one that has been exchanged a thousand times between the eyes before it reaches the lips' , new Date(2019,8,23),0,0),
    new Quote (2, 'Tumaa',  'Aston Freeman', 'Simplicty is the soul of Efficiency' , new Date(2019,8,24),0,0),
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
 addVote(index){
   this.quotes[index].upvote ++;
 }
 minusVote(index){
  this.quotes[index].downvote ++;
}

constructor() { }

ngOnInit() {
}

}
