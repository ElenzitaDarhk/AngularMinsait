import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ListagemUsuarioComponent } from './pages/usuario/listagem/listagem-usuario/listagem-usuario.component';
import { ListagemProdutoComponent } from './pages/produto/listagem/listagem-produto/listagem-produto.component';
import { CadastroUsuarioComponent } from './pages/usuario/cadastro/cadastro-usuario/cadastro-usuario.component';
import { CadastroProdutoComponent } from './pages/produto/cadastro/cadastro-produto/cadastro-produto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'usuarios', component: ListagemUsuarioComponent},
  { path: 'usuarios/cadastrar', component: CadastroUsuarioComponent},
  { path: 'usuarios/editar/:id', component: CadastroUsuarioComponent},
  { path: 'produtos', component: ListagemProdutoComponent},
  { path: 'produtos/cadastrar', component: CadastroProdutoComponent},
  { path: 'produtos/editar/:id', component: CadastroProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
