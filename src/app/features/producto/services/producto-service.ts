import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';

const PRODUCTO_URL: string = `${environment.urlBase}Producto`;

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get<any>(`${PRODUCTO_URL}/ObtenerProductos`);
  }

  crearProducto(producto: any): Observable<any> {
    return this.http.post(`${PRODUCTO_URL}/CrearProducto`, producto);
  }

  actualizarProducto(producto: any): Observable<any> {
    return this.http.put(`${PRODUCTO_URL}/ActualizarProducto`, producto);
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${PRODUCTO_URL}/EliminarProducto/${id}`);
  }
}
