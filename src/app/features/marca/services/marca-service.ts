import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';

const MARCA_URL: string = `${environment.urlBase}Marca`;

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<any> {
    return this.http.get<any>(`${MARCA_URL}/GetMarcas`);
  }

  crearMarca(marca: any): Observable<any> {
    return this.http.post(`${MARCA_URL}/CrearMarca`, marca);
  }

  actualizarMarca(marca: any): Observable<any> {
    return this.http.put(`${MARCA_URL}/ActualizarMarca`, marca);
  }

  eliminarMarca(id: number): Observable<any> {
    return this.http.delete(`${MARCA_URL}/EliminarMarca/${id}`);
  }
}
