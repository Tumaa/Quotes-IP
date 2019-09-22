import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    {id:1, name:'tumaa', author:'ali', quote:'never give up'},
    {id:2, name:'tumaa', author:'ali', quote:'never give up'},
    {id:3, name:'tumaa', author:'ali', quote:'never give up'},
    {id:4, name:'tumaa', author:'ali', quote:'never give up'},
    {id:5, name:'tumaa', author:'ali', quote:'never give up'},
    {id:6, name:'tumaa', author:'ali', quote:'never give up'},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
