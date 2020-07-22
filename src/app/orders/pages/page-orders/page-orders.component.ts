import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit {
  public collection: Order[];
  public headers: string[];
  constructor(private os: OrdersService) { }
  ngOnInit(): void {
    this.os.collection.subscribe(
      (datas) => {
        this.collection = datas;
        console.log(this.collection);
      }
    );
    console.log(this.collection);
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }
  public totalHT(item : Order): number{
    console.log('TOTAL HT CALLED');
    return item.nbJours*item.tjmHt;
  }
  public totalTTC(item : Order): number{
    return this.totalHT(item) + item.tva/100;
    console.log('TOTAL TTC CALLED');
  }
}