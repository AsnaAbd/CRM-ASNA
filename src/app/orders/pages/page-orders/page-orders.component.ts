import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit {
  public collection: Order[];
  public headers: string[];
  public states = Object.values(StateOrder);

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
  public changeState(item: Order, event) {
    // console.log(item, event.target.value);
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  /**
   * popup
   */
  public popup() {
    console.log("open popup");
  }
 }
