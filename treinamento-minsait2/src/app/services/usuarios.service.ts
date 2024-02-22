import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  buscarTodosUsuarios()
  {
    return this.http.get<IUsuarios[]>(this.url);
  }

  cadastrarUsuarios(usuario: IUsuarios)
  {
    return this.http.post<IUsuarios[]>(this.url, usuario);
  }

  removerUsuarios(id: number)
  {
    return this.http.delete<IUsuarios[]>('${this.url}/${id}');
  }
}
