import { Component, OnInit } from '@angular/core';
import { ViewDataService } from '../view-data.service';

@Component({
  selector: 'app-quotegenerator',
  templateUrl: './quotegenerator.component.html',
  styleUrls: ['./quotegenerator.component.scss']
})
export class QuotegeneratorComponent implements OnInit{
  constructor(private backendservice:ViewDataService){}
  quote: any;
  randomQuote = "";
  randomAuthor = "";
  ngOnInit() {
    this.getRandomQuote();
    setInterval(() => {
      this.getRandomQuote();
    }, 6000);
  }

  getRandomQuote() {
    this.backendservice.getRandomQuote().subscribe(data => {
      this.quote = data;
      this.randomQuote=this.quote.content;
      this.randomAuthor=this.quote.author;
      console.log(this.quote.content);
    });
  }
}
