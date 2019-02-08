import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
    { id: 4, nome: 'Aluno 04', email: 'aluno04@email.com' }
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    return this.getAlunos().filter((aluno: any) => {
      return aluno.id === id;
    })[0];
  }
  constructor() { }

}
