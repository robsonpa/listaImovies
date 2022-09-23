import { Proprietario } from "./proprietario";

export interface Imovel{
    id: number;
    nome: string;
    tipo: string;
    valor: number;
    condominio: number;
    quantos: number;
    banheiros: number;
    mobiliado: boolean;
    area: number;
    venda: boolean;
    aluguel: boolean;
    dataAnuncio: Date;
    endereco: Endereco;
    proprietarioId: Proprietario;
  }

  export interface Endereco extends Imovel {
    id: number;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
  }

