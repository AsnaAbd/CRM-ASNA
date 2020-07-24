import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit, OnDestroy {
  // public item: Order;
  public item$: Observable<Order>;
  // private sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private os: OrdersService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.os.getItemById(params.get('id')))
    );
    // this.sub = this.route.paramMap.subscribe((params) => {
    //   this.os.getItemById(params.get('id')).subscribe((item) => {
    //     console.log(item);
    //     this.item = item;
    //   });
    // });
  }
  public editItem(item: Order) {
    this.os.update(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });
  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
