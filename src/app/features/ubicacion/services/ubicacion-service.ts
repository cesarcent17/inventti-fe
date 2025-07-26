import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';

const UBICACION_URL: string = `${environment.urlBase}Ubicacion`;

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http: HttpClient) {}

  getUbicaciones(): Observable<any> {
    return this.http.get<any>(`${UBICACION_URL}/GetUbicaciones`);
  }

  crearUbicacion(ubicacion: any): Observable<any> {
    return this.http.post(`${UBICACION_URL}/CrearUbicacion`, ubicacion);
  }

  actualizarUbicacion(ubicacion: any): Observable<any> {
    return this.http.put(`${UBICACION_URL}/ActualizarUbicacion`, ubicacion);
  }

  eliminarUbicacion(id: number): Observable<any> {
    return this.http.delete(`${UBICACION_URL}/EliminarUbicacion/${id}`);
  }
}
