import { Component } from '@angular/core';
import { UsuariosService } from '../../../../services/usuarios.service';
import { IUsuarios } from '../../../../interfaces/usuarios';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.css'
})
export class ListagemUsuarioComponent {
  usuarios: IUsuarios[] = [];
  url: string = '/usuarios/cadastrar';

  constructor(private usuariosService : UsuariosService)
  {}

  ngOnInit()
  {
     this.usuariosService.buscarTodosUsuarios().subscribe
      (
        usuarios =>{ this.usuarios = usuarios}
        ,error => {console.error(error)}
    );
  }
  
  removerUsuarios(id: number)
  {

  }
}
