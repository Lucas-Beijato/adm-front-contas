import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClientService } from '../../../services/apiClient/api-client.service';
import { ApiResponseAdm_Type, UsersListResponse } from '../../../types';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private api: ApiClientService
  ) { }

  getAllUsers(): Observable<HttpResponse<ApiResponseAdm_Type<UsersListResponse>>> {
    return this.api.getAllUsers()
  }

}
