import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProdutos } from '../interfaces/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  buscarTodosProdutos()
  {
    return this.http.get<IProdutos[]>(this.url);
  }

  buscarUmProdutos(id: number)
  {
    return this.http.get<IProdutos>(this.url + "/" + id);
  }

  cadastrarProdutos(produtos: IProdutos)
  {
    return this.http.post<IProdutos[]>(this.url, produtos);
  }

  editarProdutos(produtos: IProdutos, id: number)
  {
    return this.http.put<IProdutos>(`${this.url}/${id}`, produtos);
  }

  removerProdutos(id: number)
  {
    return this.http.delete<IProdutos[]>(`${this.url}/${id}`);
  }
}
