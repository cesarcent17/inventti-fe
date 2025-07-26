import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';

const LOTE_URL = `${environment.urlBase}Lote`;

@Injectable({
  providedIn: 'root'
})
export class LoteService {

  constructor(private http: HttpClient) {}

  getLotes(): Observable<any> {
    return this.http.get<any>(`${LOTE_URL}/GetLotes`);
  }

  crearLote(lote: any): Observable<any> {
    return this.http.post(`${LOTE_URL}/CrearLote`, lote);
  }

  actualizarLote(lote: any): Observable<any> {
    return this.http.put(`${LOTE_URL}/ActualizarLote`, lote);
  }

  eliminarLote(id: number): Observable<any> {
    return this.http.delete(`${LOTE_URL}/EliminarLote/${id}`);
  }
}
