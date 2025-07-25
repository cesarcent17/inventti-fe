import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'https://localhost:7197/api/Producto';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/obtenerProductos`);
  }

  // Crear un producto
  crearProducto(producto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CrearProducto`, producto);
  }

  // Actualizar un producto
  actualizarProducto(producto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/ActualizarProducto`, producto);
  }

  // Eliminar un producto por ID
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/EliminarProducto/${id}` );
  }
}