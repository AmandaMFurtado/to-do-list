import { TaskList } from './../../model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  ngDoCheck() {
    this.setLocalStorage()
    
  }


  //Recuperando os dados de saida
  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })

  }

  //Deletar apenas um item
  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  //Deletar todos os itens
  public deleteAllTaskList() {
    const confirm = window.confirm("Você realmente deseja deletar tudo ?")
    if (confirm) {
      this.taskList = [];
    }
  }

  //Validando o campo vazio
  public validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm("Task está sem vazia, deseja deletar?");

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }

  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
