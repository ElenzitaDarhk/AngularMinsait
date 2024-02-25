import { IUsuarios } from '../interfaces/usuarios';

export class Usuario implements IUsuarios
{
    id?: number;
    nome: string;
    idade: number;
    ativo: boolean;

    constructor(nome: string, idade: number, ativo: boolean)
    {
        this.nome = nome;
        this.idade = idade;
        this.ativo = ativo;
    }
}