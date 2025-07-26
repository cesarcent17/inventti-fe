import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';

const UNIDAD_MEDIDA_URL: string = `${environment.urlBase}UnidadMedida`;

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  constructor(private http: HttpClient) {}

  getUnidadesMedida(): Observable<any> {
    return this.http.get<any>(`${UNIDAD_MEDIDA_URL}/GetUnidadesMedida`);
  }

  crearUnidadMedida(unidad: any): Observable<any> {
    return this.http.post(`${UNIDAD_MEDIDA_URL}/CrearUnidadMedida`, unidad);
  }

  actualizarUnidadMedida(unidad: any): Observable<any> {
    return this.http.put(`${UNIDAD_MEDIDA_URL}/ActualizarUnidadMedida`, unidad);
  }

  eliminarUnidadMedida(id: number): Observable<any> {
    return this.http.delete(`${UNIDAD_MEDIDA_URL}/EliminarUnidadMedida/${id}`);
  }
}
