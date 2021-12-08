import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from './../../models/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(private service: FuncionarioService) {}

  ngOnInit(): void {
    this.service.list().subscribe((funcionario) => {
      this.funcionarios = funcionario;
    });
  }

}
