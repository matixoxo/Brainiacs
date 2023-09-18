import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModalServiceService } from '../../services/edit-add-delete.service';
import { CommunicateToEditAndDelService } from '../../services/communicate-to-edit-and-del.service';
import { Person } from '../../person';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class EditModalComponent {
  constructor(public activeModal: NgbActiveModal, private service: EditModalServiceService, private commService: CommunicateToEditAndDelService) { }

  mode: string = "";

  id: string = "";
  first_name: string = "";
  last_name: string = "";
  email: string = "";

  f_name_update: string = "";
  l_name_update: string = "";
  email_update: string = "";

  close() {
    this.activeModal.close('Modal closes');
  }

  saveAndClose(f_name: string, l_name: string, _email: string) {
    if (f_name === "") this.f_name_update = this.first_name;
    else this.f_name_update = f_name;
    if (l_name === '') this.l_name_update = this.last_name;
    else this.l_name_update = l_name;
    if (_email === '') this.email_update = this.email;
    else this.email_update = _email;
    this.close();
    this.service.editBrainiacById(this.id, this.f_name_update, this.l_name_update, this.email_update)
    .subscribe();
  }

  saveAddAndClose(f_name: string, l_name: string, _email: string) {
    this.close();
    let _avatar: string = "https://gravatar.com/avatar/ed99a5548f92486174393de7aba66566?s=200&d=robohash&r=x";
    this.close();
    this.service.addBrainiacLocal(f_name, l_name, _email, _avatar);
  }

  setEdit() {
    this.mode = "edit";
  }

  setAdd() {
    this.mode = "add";
  }

  setDel(id: string) {
    this.mode = "del";
    this.id = id;
  }

  rowDel() {
    this.commService.sendPersonDel(this.id);
    this.service.rowDelete(this.id).subscribe();
    this.close();
  }
}
