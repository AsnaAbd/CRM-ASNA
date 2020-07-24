import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(environment.urlApi + '/orders');
  }
  // get collection()
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }
  // set collection()
  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }
  // changeState of item in collection
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }
  // update item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${environment.urlApi}/orders/${item.id}`, item);
  }
  // add item in collection
  public addItem(item: Order): Observable<Order> {
    // debugger;
    return this.http.post<Order>(`${environment.urlApi}/orders`, item);
  }
  // delete item in collection
  // get item by id in collection
  public getItemById(id: string): Observable<Order> {
    return this.http.get<Order>(`${environment.urlApi}/orders/${id}`);
  }
}
