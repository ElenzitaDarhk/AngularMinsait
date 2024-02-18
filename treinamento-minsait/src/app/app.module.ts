import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListagemUsuariosComponent } from './pages/usuarios/listagem/listagem.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem/listagem.component';
import { CadastroUsuariosEdicaoComponent } from './pages/usuarios/cadastro-edicao/cadastro-edicao.component';
import { CadastroProdutosEdicaoComponent } from './pages/produtos/cadastro-edicao/cadastro-edicao.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    ListagemUsuariosComponent,
    CadastroUsuariosEdicaoComponent,
    ListagemProdutosComponent,
    CadastroProdutosEdicaoComponent

  ],
  providers: [],
})
export class AppModule { }
