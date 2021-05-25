import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Quote} from '../form'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  submitUpvote(quote){
    quote.upvote=quote.upvote+1;
  }

  submitDownvote(quote){
    quote.downvote=quote.downvote+1;
  }


  constructor() { }

  ngOnInit() {
  }

}
