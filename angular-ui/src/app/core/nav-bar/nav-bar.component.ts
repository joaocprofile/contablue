import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[] = []

  visibleSidebar: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Financeiro',
      items: [{
        label: 'Pagamentos',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Recebimentos',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Cadastro Categoria',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Cadastro Cliente',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Cadastro Fornecedor',
        icon: 'pi pi-refresh',
      },
      ]
    },
    {
      label: 'Vendas',
      items: [{
        label: 'Pedido de Venda',
        icon: 'pi pi-external-link',
        // url: ''
      },
        // {
        //   label: 'Router',
        //   icon: 'pi pi-upload',
        //   routerLink: '/fileupload'
        // }
      ]
    }
    ];
  }
}
