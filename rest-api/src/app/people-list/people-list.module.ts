import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { RowComponent } from './components/row/row.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditModalServiceService } from './services/edit-add-delete.service';
import { EditModalComponent } from './components/modal/modal.component';
import { CommunicateToEditAndDelService } from './services/communicate-to-edit-and-del.service';



@NgModule({
  declarations: [
    TableComponent,
    RowComponent,
    EditModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    TableComponent,
    RowComponent,
  ],
  providers: [
    EditModalServiceService,
    NgbActiveModal,
    CommunicateToEditAndDelService
  ]
})
export class PeopleListModule { }
