import { Input } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import { Card } from '../app.component';

@Component ({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card!: Card;
  @Input()
  index!: Number;

  title: string = "My Card title";
  text: string = "My text!";
  imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  disabled = false;
  textColor: string = 'red';
  cardDate: Date = new Date();

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97G7rmfB__LapGAYZygQDqnQWwXjJdKkwvQ&usqp=CAU';
      this.disabled = true;
    }, 3000)
  }

  changeTitle() {
    this.card.title = 'Title has been changed';
  }

  // inputHandler(value: any) {
  //   this.title = value;
  // }

  changeHandler() {
    console.log(this.card.title);
  }

  getInfo(): string {
    return 'This is my info';
  }
}