import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../../../services/usuarios.service';
import { IUsuarios } from '../../../../interfaces/usuarios';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

  usuarios: IUsuarios[] = [];
  id?: any;
  nomeBotao: String = "Cadastrar";

  constructor(private usuarioService : UsuariosService, 
              private router : Router,
              private activeteRoute : ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.verificarEstado();
  }

  verificarEstado()
  {
    console.log("verificarEstado");
    this.id = this.activeteRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    if(this.id != null &&  this.id != undefined)
    {
      this.carregarCamposEdicao(this.id);
      this.nomeBotao = "Editar";
    }
  }

  usuarioForm = new FormGroup(
    {
        nome: new FormControl('', Validators.required),
        idade: new FormControl()
    }
  )

  carregarCamposEdicao(id: any)
  {
        this.usuarioService.buscarUmUsuario(id).subscribe
        (
          us =>{
            this.usuarioForm.setValue({nome: us.nome, idade: us.idade})
          }
          ,error => {console.error(error)}
      );

      console.log(this.id);
  }

  acaoBotao()
  {
    console.log("Id:" + this.id);
    if(this.id)
    {
      console.log("Editar");
      this.editarUsuarios(this.id);
    }
    else{
      console.log("Cadastrar");
      this.cadastrarUsuarios();
    }
  }

  cadastrarUsuarios()
  {
    console.log(this.usuarioForm.value);

    const usuario: IUsuarios = this.usuarioForm.value as IUsuarios;
    usuario.ativo = true;

    this.usuarioService.cadastrarUsuarios(usuario).subscribe((result) =>
    {
        console.log(result);
        Swal.fire({
          title: "Parabéns!",
          text: "Usuário cadastrado com sucesso!",
          icon: "success"
        });

        this.router.navigateByUrl('/usuarios');

      }, error =>{ console.error(error)
    });
  }

  editarUsuarios(id:number)
  {
    console.log(this.usuarioForm.value);

    const usuario: IUsuarios = this.usuarioForm.value as IUsuarios;
    usuario.ativo = true;

    this.usuarioService.editarUsuarios(usuario, id).subscribe((result) =>
    {
        console.log(result);
        Swal.fire({
          title: "Parabéns!",
          text: "Usuário editado com sucesso!",
          icon: "success"
        });

        this.router.navigateByUrl('/usuarios');

      }, error =>{ console.error(error)
    });
  }
}
