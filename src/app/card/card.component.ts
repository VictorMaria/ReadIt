import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  response: any;
  joinedAt: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/VictorMaria').subscribe((response) =>{
      this.response = response;
      this.joinedAt = moment(this.response.created_at).format("Do MMM YYYY")
    })
  }

}
