import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';

const STOCK_URL: string = `${environment.urlBase}Stock`;

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {}

  getStocks(): Observable<any> {
    return this.http.get<any>(`${STOCK_URL}/GetStocks`);
  }

  crearStock(stock: any): Observable<any> {
    return this.http.post(`${STOCK_URL}/CrearStock`, stock);
  }

  actualizarStock(stock: any): Observable<any> {
    return this.http.put(`${STOCK_URL}/ActualizarStock`, stock);
  }

  eliminarStock(id: number): Observable<any> {
    return this.http.delete(`${STOCK_URL}/EliminarStock/${id}`);
  }
}
