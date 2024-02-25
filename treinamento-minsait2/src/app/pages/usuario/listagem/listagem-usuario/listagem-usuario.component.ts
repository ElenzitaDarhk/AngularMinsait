import { Component } from '@angular/core';
import { UsuariosService } from '../../../../services/usuarios.service';
import { IUsuarios } from '../../../../interfaces/usuarios';
import { NumberValueAccessor } from '@angular/forms';
import { error } from 'console';
import Swal from 'sweetalert2';

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
    if(id)
    {
      this.exibirMensagemConfirmacao(id);
    }
  }

  exibirMensagemConfirmacao(id: number)
  {
    Swal.fire({
      title: "Tem certeza disso?",
      text: "Não tem como desfazer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, remover!"
    }).then((result) => {
      if (result.isConfirmed) {

        console.log(id);
        this.usuariosService.removerUsuarios(id).subscribe(
          result => { console.log(result); 

            this.usuarios = 
              this.usuarios.filter(usuarioLista => usuarioLista.id != id)
          
            Swal.fire({
              title: "Removido!",
              text: "Usuário removido.",
              icon: "success"
            });
          
          }, error => { console.error(error) }
        );
      }
    });
  }
}
