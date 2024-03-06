import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ProdutosService } from '../../../../services/produtos.service';
import { IProdutos } from '../../../../interfaces/produtos';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrl: './listagem-produto.component.css'
})
export class ListagemProdutoComponent {

  produtos: IProdutos[] = [];
  url: string = '/produtos/cadastrar';

  constructor(private produtosService : ProdutosService)
  {

  }

  ngOnInit()
  {
     this.produtosService.buscarTodosProdutos().subscribe
      (
        produtos =>{ this.produtos = produtos}
        ,error => {console.error(error)}
    );
  }

  removerProdutos(id: number)
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
        this.produtosService.removerProdutos(id).subscribe(
          result => { console.log(result); 

            this.produtos = 
              this.produtos.filter(produtoLista => produtoLista.id != id)
          
            Swal.fire({
              title: "Removido!",
              text: "Produto removido.",
              icon: "success"
            });
          
          }, error => { console.error(error) }
        );
      }
    });
  }

}
