
import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {
    tva = 20;
    state = StateClient.ACTIVE;
    tjmHt: 200;
    id: number;
    name: string;
    totalCaHt: number;
    comment: string;

    constructor(obj?: Partial<Client>){
        if (obj){
            Object.assign(this, obj);
        }

    }
  totalHt: number;

}
