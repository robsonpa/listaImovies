import { Imovel } from "./imovel";

export interface Proprietario extends Imovel{
    id: number;
    nome: string;
    imovelId: Imovel;
}