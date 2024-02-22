import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

  usuarioForm = new FormGroup(
    {
        nome: new FormControl('', Validators.required),
        idade: new FormControl()
    }
  )
}
