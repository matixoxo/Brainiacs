import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicateToEditAndDelService {
  private personEdit = new Subject<any>();
  private personAdd = new Subject<any>();
  private personDel = new Subject<string>();

  personMess$ = this.personEdit.asObservable();
  personAdd$ = this.personAdd.asObservable();
  personDel$ = this.personDel.asObservable();

  sendPersonEdit(mess: any) {
    this.personEdit.next(mess);
  }

  sendPersonAdd(mess: any) {
    this.personAdd.next(mess);
  }

  sendPersonDel(mess: string) {
    this.personDel.next(mess);
  }
}
