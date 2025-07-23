import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
   private apiUrl = 'https://localhost:7197/api/Categoria';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetCategorias`);
  }
  
   crearCategoria(categoria: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CrearCategoria`, categoria);
  }

  eliminarCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/EliminarCategoria/${id}`);
  }

  actualizarCategoria(categoria: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/ActualizarCategoria`, categoria);
  }
}
