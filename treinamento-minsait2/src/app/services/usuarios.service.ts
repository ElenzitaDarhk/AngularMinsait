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

  buscarUmUsuario(id: number)
  {
    return this.http.get<IUsuarios[]>(this.url + "/" + id);
  }

  cadastrarUsuarios(usuario: IUsuarios)
  {
    return this.http.post<IUsuarios[]>(this.url, usuario);
  }

  editarUsuarios(usuario: IUsuarios, id: number)
  {
    return this.http.put<IUsuarios[]>(`${this.url}/${id}`, usuario);
  }

  removerUsuarios(id: number)
  {
    return this.http.delete<IUsuarios[]>(`${this.url}/${id}`);
  }
}
