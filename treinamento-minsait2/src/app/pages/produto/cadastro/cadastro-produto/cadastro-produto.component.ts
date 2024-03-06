import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProdutos } from '../../../../interfaces/produtos';
import Swal from 'sweetalert2';
import { ProdutosService } from '../../../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {

  id?: number;
  nomeBotao: String = "Cadastrar";

  constructor(private produtoService : ProdutosService, 
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
    if(this.activeteRoute.snapshot.paramMap.get('id'))
    {
      this.id = Number(this.activeteRoute.snapshot.paramMap.get('id'));
      this.carregarCamposEdicao(this.id);
      this.nomeBotao = "Editar";
    }
  }

  carregarCamposEdicao(id: any)
  {
        this.produtoService.buscarUmProdutos(id).subscribe
        (
          prd =>{
            this.produtoForm.setValue(
              {
                nome: prd.nome, 
                quantidade: prd.quantidade,
                codigoBarras: prd.codigoBarras,
                preco: prd.preco
              })
          }
          ,error => {console.error(error)}
      );

      console.log(this.id);
  }

  produtoForm = new FormGroup(
    {
        nome: new FormControl('', Validators.required),
        quantidade: new FormControl(1,[
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(8),
        ]),
        codigoBarras : new FormControl('', Validators.required),
        preco : new FormControl(0.0,[
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(8),
        ]),
    }
  )

  acaoBotao()
  {
    console.log("Id:" + this.id);
    if(this.id)
    {
      console.log("Editar");
      this.editarProdutos(this.id);
    }
    else{
      console.log("Cadastrar");
      this.cadastrarProdutos();
    }
  }

  cadastrarProdutos()
  {
    console.log(this.produtoForm.value);

    const produto: IProdutos = this.produtoForm.value as IProdutos;

    this.produtoService.cadastrarProdutos(produto).subscribe((result) =>
    {
        console.log(result);
        Swal.fire({
          title: "Parabéns!",
          text: "Produto cadastrado com sucesso!",
          icon: "success"
        });

        this.router.navigateByUrl('/produtos');

      }, error =>{ console.error(error)
    });
  }

  editarProdutos(id:number)
  {
    console.log(this.produtoForm.value);

    const produto: IProdutos = this.produtoForm.value as IProdutos;

    this.produtoService.editarProdutos(produto, id).subscribe((result) =>
    {
        console.log(result);
        Swal.fire({
          title: "Parabéns!",
          text: "Produtos editado com sucesso!",
          icon: "success"
        });

        this.router.navigateByUrl('/produtos');

      }, error =>{ console.error(error)
    });
  }
}