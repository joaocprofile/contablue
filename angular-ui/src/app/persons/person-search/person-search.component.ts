import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.scss']
})
export class PersonSearchComponent implements OnInit {

  persons = [
    { name: 'Manoel Pinheiro', city: 'São Paulo', type: 'customer', status: true },
    { name: 'Sebastião da Silva', city: 'Curitiba', type: 'supplier', status: false },
    { name: 'Carla Souza', city: 'Belem', type: 'customer', status: true },
    { name: 'Luís Pereira', city: 'Belo Horizonte', type: 'customer', status: true },
    { name: 'Vilmar Andrade', city: 'Rio de Janeiro', type: 'customer', status: false },
    { name: 'Paula Maria', city: 'Florianopolis', type: 'supplier', status: true }
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
