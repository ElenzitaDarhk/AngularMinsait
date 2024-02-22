import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header/header.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListagemUsuarioComponent } from './pages/usuario/listagem/listagem-usuario/listagem-usuario.component';
import { CadastroUsuarioComponent } from './pages/usuario/cadastro/cadastro-usuario/cadastro-usuario.component';
import { ListagemProdutoComponent } from './pages/produto/listagem/listagem-produto/listagem-produto.component';
import { CadastroProdutoComponent } from './pages/produto/cadastro/cadastro-produto/cadastro-produto.component';
import { ActionButtonDefaultComponent } from './component/action-button-default/action-button-default.component';
import { PageTitleComponent } from './component/page-title/page-title.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListagemUsuarioComponent,
    CadastroUsuarioComponent,
    ListagemProdutoComponent,
    CadastroProdutoComponent,
    ActionButtonDefaultComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
