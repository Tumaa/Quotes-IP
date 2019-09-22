import { Component } from '@angular/core';
import { Quote} from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes=[
    {id:1, name:'tumaa', author:'ali', quote:'never give up'},
    {id:2, name:'tumaa', author:'ali', quote:'never give up'},
    {id:3, name:'tumaa', author:'ali', quote:'never give up'},
    {id:4, name:'tumaa', author:'ali', quote:'never give up'},
    {id:5, name:'tumaa', author:'ali', quote:'never give up'},
    {id:6, name:'tumaa', author:'ali', quote:'never give up'},
    
  ];
}
