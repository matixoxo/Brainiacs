import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../modal/modal.component';


@Component({
  selector: 'tr[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})

export class RowComponent{
  constructor(private modalService: NgbModal) { }

  private modalRef: NgbModalRef | undefined;

  @Output() deleteEvent = new EventEmitter<string>();

  @Input() id = '';
  @Input() first_name = '';
  @Input() last_name = '';
  @Input() email = '';
  @Input() avatar = '';

  openModal() {
    this.modalRef = this.modalService.open(EditModalComponent);
    this.modalRef.componentInstance.setEdit();
    this.modalRef.componentInstance.id = this.id;
    this.modalRef.componentInstance.first_name = this.first_name;
    this.modalRef.componentInstance.last_name = this.last_name;
    this.modalRef.componentInstance.email = this.email;
  }

  addNewDeleteById(value: string) {
    this.deleteEvent.emit(value);
  }
}
