import { Component, OnInit } from '@angular/core';
import { StateClient} from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-pages-clients',
  templateUrl: './pages-clients.component.html',
  styleUrls: ['./pages-clients.component.scss']
})
export class PagesClientsComponent implements OnInit {


  public collection: Client[];
  public headers: string[];
  public states = Object.values(StateClient);

  constructor(private os: ClientsService) { }

  ngOnInit(): void {
    this.os.collection.subscribe(
      (datas) => {
        this.collection = datas;
        console.log(this.collection);
      }
    );
    console.log(this.collection);
    this.headers = [
      'name',
      'Total HT',
      'tva',
      'Total TTC',
      'State',
      'Comment'
    ];
  }
  public changeState(item: Client, event) {
    console.log(event.target.value);
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
