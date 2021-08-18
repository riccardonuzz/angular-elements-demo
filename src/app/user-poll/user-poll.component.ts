import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-poll',
  templateUrl: './user-poll.component.html',
  styleUrls: ['./user-poll.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserPollComponent implements OnInit {
  yes: number = 0;
  no: number = 0;
  hasVoted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  vote(value: string) {
    this[value]++;
    this.hasVoted = true;
  }

  get yesPercent() {
    return (this.yes / (this.yes + this.no)) * 100;
  }

  get noPercent() {
    return (this.no / (this.no + this.yes)) * 100;
  }

}
