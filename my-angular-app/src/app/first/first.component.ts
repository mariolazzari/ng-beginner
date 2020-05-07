import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  text: string = 'My first component is ready.';
  numbers: number[] = [1, 2, 3, 4, 5];
  isGreen: boolean = false;
  date: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
