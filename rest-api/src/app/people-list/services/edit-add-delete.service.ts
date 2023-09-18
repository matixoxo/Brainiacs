import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiStructure } from '../api_structure';
import { CommunicateToEditAndDelService } from './communicate-to-edit-and-del.service';


@Injectable({
  providedIn: 'root'
})
export class EditModalServiceService {
  private url = "https://reqres.in/api/users/";

  constructor(private httpClient: HttpClient, private commService: CommunicateToEditAndDelService) { }

  editBrainiacById(id: string, first_name: string, last_name: string, email: string): Observable<ApiStructure> {
    this.commService.sendPersonEdit({
      id: id,
      first_name: first_name,
      last_name: last_name,
      email: email
    });

    const httpheaders = new HttpHeaders().set('Content-type', 'application/json');
    const opts = {
      headers: httpheaders
    };
    return this.httpClient.put<ApiStructure>(this.url+id, {
      id: id,
      first_name: first_name,
      last_name: last_name,
      email: email
    }, opts);
  }

  rowDelete(id: string): Observable<ApiStructure>{
    const httpheaders = new HttpHeaders().set('Content-type', 'application/json');
    const opts = {
      headers: httpheaders
    };
    return this.httpClient.delete<ApiStructure>(this.url + id, opts);
  }

  addBrainiacLocal(first_name: string, last_name: string, email: string, avatar: string) {
    this.commService.sendPersonAdd({
      avatar: avatar,
      first_name: first_name,
      last_name: last_name,
      email: email
    });
  }

  addBrainiac(id: string, first_name: string, last_name: string, email: string, avatar: string): Observable<ApiStructure> {
    const httpheaders = new HttpHeaders().set('Content-type', 'application/json');
    const opts = {
      headers: httpheaders
    };
    return this.httpClient.post<ApiStructure>(this.url, {
      id: id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      avatar: avatar
    }, opts);
  }
}
