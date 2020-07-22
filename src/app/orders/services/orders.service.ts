import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(environment.urlApi + '/orders');
   }

  // get collection
   get collection(): Observable<Order[]>{
      return this.pCollection;
   }
  // set collection
  set collection(col : Observable<Order[]>){
      this.pCollection = col
  }
  // changeState of item in collection

  // update item in collection
}
