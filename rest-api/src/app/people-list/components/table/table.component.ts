import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Person } from '../../person';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../modal/modal.component';
import { CommunicateToEditAndDelService } from '../../services/communicate-to-edit-and-del.service';
import { EditModalServiceService } from '../../services/edit-add-delete.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { ApiStructure } from '../../api_structure';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  constructor(private service: EditModalServiceService, private http: HttpClient, private modalService: NgbModal, private commService: CommunicateToEditAndDelService) { }

  private modalRef: NgbModalRef | undefined;
  receivedPersonEdit: any; receivedPersonAdd: any; receivedPersonDel: any;

  dane: Person[] = []; dane2: Person[] = []; daneAll: Person[] = [];
  per_page: number = 0; page: number = 0;

  ngOnInit() {
    const url = "https://reqres.in/api/users?page=";

    const req1 = this.http.get<ApiStructure>(url + "1");
    const req2 = this.http.get<ApiStructure>(url + "2");

    forkJoin([req1, req2]).subscribe(res => {
      this.dane = res[0].data;
      this.dane2 = res[1].data;
      this.daneAll = this.dane.concat(this.dane2);
    });

    this.commService.personMess$.subscribe((mess) => {
      this.receivedPersonEdit = mess;
      this.editPerson();
    });

    this.commService.personAdd$.subscribe((mess) => {
      this.receivedPersonAdd = mess;
      this.addPerson();
    })

    this.commService.personDel$.subscribe((mess) => {
      this.receivedPersonDel = mess;
      console.log("Id to del: " + mess);
      this.delById(mess);
    })
  }

  openModal() {
    this.modalRef = this.modalService.open(EditModalComponent);
    this.modalRef.componentInstance.setAdd();
  }

  findMaxId(): number {
    let maxId = 0;
    let idToCmp;
    for (let i = 0; i < this.daneAll.length; i++) {
      idToCmp = +this.daneAll[i].id;
      if (idToCmp > maxId) maxId = idToCmp;
    }
    return maxId;
  }

  addPerson() {
    let maxId = this.findMaxId()+1;
    let _id: string = maxId.toString();
    this.daneAll.push({
      id: _id,
      avatar: this.receivedPersonAdd.avatar,
      first_name: this.receivedPersonAdd.first_name,
      last_name: this.receivedPersonAdd.last_name,
      email: this.receivedPersonAdd.email
    });

    this.service.addBrainiac(_id, this.receivedPersonAdd.first_name,
      this.receivedPersonAdd.last_name, this.receivedPersonAdd.email,
      this.receivedPersonAdd.avatar).subscribe();
  }

  editPerson() {
    let parsedId: number = +this.receivedPersonEdit.id;
      let idToCmp: number;
      for (let i = 0; i < this.daneAll.length; i++) {
        idToCmp = +this.daneAll[i].id;
        if (idToCmp === parsedId) {
          this.daneAll[i].first_name = this.receivedPersonEdit.first_name;
          console.log(this.daneAll[i].first_name);
          this.daneAll[i].last_name = this.receivedPersonEdit.last_name;
          this.daneAll[i].email = this.receivedPersonEdit.email;
        }
      }
  }  

  delById(id: string): void {
    let parsedId: number = +id;
    let idToCmp: number;
    for (let i = 0; i < this.daneAll.length; i++) {
      idToCmp = +this.daneAll[i].id;
      if (idToCmp === parsedId) {
        this.daneAll.splice(i, 1);
      }
    }
  }

  openModalThenDelById(id: string) {
    this.modalRef = this.modalService.open(EditModalComponent);
    this.modalRef.componentInstance.setDel(id);
  }
}
