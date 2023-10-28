import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdministrador } from 'src/common/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  LoginAdmin(name: string) {
    return this.http.get(
      `https://servidor-proyecto-final-angular.onrender.com/Administrador/${name}`
    );
  }

  PerfilAdmin(id: string) {
    return this.http.get(
      `https://servidor-proyecto-final-angular.onrender.com/Administrador/Detail/${id}`
    );
  }

  RegistroAdmin(Admin: IAdministrador) {
    return this.http.post(
      `https://servidor-proyecto-final-angular.onrender.com/Administrador`,
      Admin
    );
  }

  LogoutAdmin(id: string) {
    return this.http.delete(
      `https://servidor-proyecto-final-angular.onrender.com/Administrador/${id}`
    );
  }
}
