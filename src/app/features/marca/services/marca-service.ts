import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private apiUrl = 'https://localhost:7197/api/Marca';

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetMarcas`);
  }

  crearMarca(marca: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CrearMarca`, marca);
  }

  actualizarMarca(marca: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/ActualizarMarca`, marca);
  }

  eliminarMarca(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/EliminarMarca/${id}`);
  }
}
