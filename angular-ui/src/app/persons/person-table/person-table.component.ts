import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit {

  @Input('data') persons: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
