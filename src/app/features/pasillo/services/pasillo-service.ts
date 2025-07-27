import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';

const PASILLO_URL: string = `${environment.urlBase}Pasillo`;

@Injectable({
  providedIn: 'root'
})
export class PasilloService {

  constructor(private http: HttpClient) {}

  getPasillos(): Observable<any> {
    return this.http.get<any>(`${PASILLO_URL}/GetPasillo`);
  }

  crearPasillo(pasillo: any): Observable<any> {
    return this.http.post(`${PASILLO_URL}/CrearPasillo`, pasillo);
  }

  actualizarPasillo(pasillo: any): Observable<any> {
    return this.http.put(`${PASILLO_URL}/ActualizarPasillo`, pasillo);
  }

  eliminarPasillo(id: number): Observable<any> {
    return this.http.delete(`${PASILLO_URL}/EliminarPasillo/${id}`);
  }
}
