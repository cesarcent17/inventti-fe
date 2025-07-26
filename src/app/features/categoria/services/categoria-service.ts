import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';

const CATEGORIA_URL: string = `${environment.urlBase}Categoria`;

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get<any>(`${CATEGORIA_URL}/GetCategorias`);
  }

  crearCategoria(categoria: any): Observable<any> {
    return this.http.post(`${CATEGORIA_URL}/CrearCategoria`, categoria);
  }

  actualizarCategoria(categoria: any): Observable<any> {
    return this.http.put(`${CATEGORIA_URL}/ActualizarCategoria`, categoria);
  }

  eliminarCategoria(id: number): Observable<any> {
    return this.http.delete(`${CATEGORIA_URL}/EliminarCategoria/${id}`);
  }
}
