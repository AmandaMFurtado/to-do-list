import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent implements OnInit {

  //Para tratar a saída de dados
  @Output() public emiteItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {

    this.addItemTaskList = this.addItemTaskList.trim(); //Remove os espaços antes e depois da string

    if (this.addItemTaskList) {
      //Quando for selecionado o emite um item é adicionado a lista
      this.emiteItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
