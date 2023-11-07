import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmin, IAdministrador } from 'src/common/Interfaces';
import { URL_PRODUCCION } from 'src/Enviroments/Enviroments.prod';
import { URL_LOCAL } from 'src/Enviroments/Enviroments.local';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  LoginAdmin(Admin: IAdmin) {
    return this.http.post(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores/Verificacion`,
      Admin
    );
  }

  getAdministradores() {
    return this.http.get<IAdmin>(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores`
    );
  }

  getDetailAdministradores(id: string) {
    return this.http.get(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores/Detail/${id}`
    );
  }

  DeleteAdministradores(id: string) {
    return this.http.delete(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores/${id}`
    );
  }

  PostAdministrador(Administrador: IAdmin) {
    return this.http.post(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores`,
      Administrador
    );
  }

  PutAdministrador(Administrador: IAdmin, id: string) {
    return this.http.put(
      `${URL_PRODUCCION.baseUrl}/TablaAdministradores/${id}`,
      Administrador
    );
  }
}
