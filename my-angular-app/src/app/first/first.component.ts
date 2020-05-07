import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  text: string = 'My first component is ready.';

  constructor() {}

  ngOnInit(): void {}
}
