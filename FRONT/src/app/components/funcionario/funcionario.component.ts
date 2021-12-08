import { Funcionario } from './../../models/funcionario';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-funcionario",
  templateUrl: "./funcionario.component.html",
  styleUrls: ["./funcionario.component.css"],
})
export class FuncionarioComponent implements OnInit {
  nome!: string;
  idade!: number;

  constructor(private router: Router, private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let funcionario: Funcionario = {
      nome: this.nome,
      idade!: this.idade
    };
    this.funcionarioService.create(funcionario).subscribe((funcionario) => {
      console.log(funcionario);
      // this.router.navigate(["funcionario/listar"]);
    });
  }
}
