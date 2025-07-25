import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = 'https://localhost:7197/api/Ubicacion';

  constructor(private http: HttpClient) {}

  // Obtener todas las ubicaciones
  getUbicaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetUbicaciones`);
  }

  // Crear una nueva ubicación
  crearUbicacion(ubicacion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/CrearUbicacion`, ubicacion);
  }

  // Actualizar una ubicación existente
  actualizarUbicacion(ubicacion: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/ActualizarUbicacion`, ubicacion);
  }

  // Eliminar una ubicación por su ID
  eliminarUbicacion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/EliminarUbicacion/${id}`);
  }
}