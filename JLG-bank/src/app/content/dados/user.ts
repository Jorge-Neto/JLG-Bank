export class Usuario {
    codigo: number;
    nome: string;
    cpf: string;
    renda: string;
    email: string;
    senha: string;
    privilegio: string;
    planoId: number;
    token: string;
    dtaCriacao: Date = new Date();
}