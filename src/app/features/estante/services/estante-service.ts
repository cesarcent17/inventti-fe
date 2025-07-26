import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';

const ESTANTE_URL: string = `${environment.urlBase}Estante`;

@Injectable({
  providedIn: 'root'
})
export class EstanteService {

  constructor(private http: HttpClient) {}

  getEstantes(): Observable<any> {
    return this.http.get<any>(`${ESTANTE_URL}/GetEstantes`);
  }

  crearEstante(estante: any): Observable<any> {
    return this.http.post(`${ESTANTE_URL}/CrearEstante`, estante);
  }

  actualizarEstante(estante: any): Observable<any> {
    return this.http.put(`${ESTANTE_URL}/ActualizarEstante`, estante);
  }

  eliminarEstante(id: number): Observable<any> {
    return this.http.delete(`${ESTANTE_URL}/EliminarEstante/${id}`);
  }
}
