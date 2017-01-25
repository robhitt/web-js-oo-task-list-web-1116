'use strict';
// Task Model

var id = 0

class Task {

  constructor(description, priority, list) {
    this.id = list.tasks.length
    // this.id = id
    // id += 1

    this.description = description
    this.priority = priority
    this.list = list
    this.list.tasks.push(this)
  }

  liEl() {
    return(`<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`)
  }

  build() {
    // this.list
    $(`#list-${this.list.id}`).append(this.liEl())
  }
}

// Task Model Instance Properties Properties from initialization should be assigned an autoincremented id when a new Task is created based on the length of the list.tasks array
