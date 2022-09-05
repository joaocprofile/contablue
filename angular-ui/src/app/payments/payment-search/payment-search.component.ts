import { Component } from '@angular/core';
import { catchError, EMPTY, Observable, Subject } from 'rxjs';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-search',
  templateUrl: './payment-search.component.html',
  styleUrls: ['./payment-search.component.scss']
})
export class PaymentSearchComponent {

  // lancamentos = [
  //   {
  //     tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2017',
  //     dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José'
  //   },
  // ];

  payments$: Observable<Payment[]> = []
  error$ = new Subject<boolean>();

  msgSuccess: string = ''
  msgError: string = ''
  loading = true;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.onRefresh()
  }

  onRefresh() {
    this.payments$ = this.paymentService.getAll()
      .pipe(
        catchError(error => {
          this.error$.next(true)
          this.onError('Erro ao buscar Pagamentos', error)
          return EMPTY;
        })
      )
  }

  // save(name: string) {
  //   const city = {
  //     id: 0,
  //     name: name
  //   }
  //   this.cityService.save(city)
  //     .subscribe({
  //       next: (response: City) => {
  //         this.onSuccess()
  //       },
  //       error: error => {
  //         this.error$.next(true)
  //         this.onError('Erro ao cadastrar cidade', error)
  //         return EMPTY;
  //       },
  //       complete: () => {
  //         this.onSuccess()
  //       }
  //     })
  // }

  // delete(id: number) {
  //   this.cityService.delete(id)
  //     .subscribe({
  //       error: error => {
  //         this.error$.next(true)
  //         this.onError('Erro ao remover cidade', error)
  //         return EMPTY;
  //       },
  //       complete: () => {
  //         this.onRefresh()
  //       }
  //     })
  // }

  // update(city: City) {
  //   this.cityService.update(city, city.id)
  //     .subscribe({
  //       error: error => {
  //         this.error$.next(true)
  //         this.onError('Erro ao atualizar cidade', error)
  //         return EMPTY;
  //       },
  //       complete: () => {
  //         // this.onRefresh()
  //       }
  //     })
  // }

  // private onSuccess() {
  //   this.msgSuccess = 'Cidade criada com sucesso'
  //   console.log(this.msgSuccess)
  //   this.onRefresh()
  // }

  private onError(msg: string, error: any) {
    this.msgError = msg + error
    console.log(this.msgError)
  }

}
