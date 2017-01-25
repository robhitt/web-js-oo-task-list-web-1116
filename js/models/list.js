'use strict';
// List Model


  // List Model Instance Properties Properties from initialization should be assigned an autoincrementing id when a new List is created
class List {

  constructor(title) {
    this.id = List.all.length
    this.title = title
    List.all.push(this)
    this.tasks = []

  }

  listEl() {
    return `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`
  }

  optionEl() {
    return `<option value="${this.id}">${this.title}</option>`
  }

  build() {
    // append the div and option strings the lists section and select elements
    $('#select_list').append(this.optionEl())
    $('#lists').append(this.listEl())
  }
}

List.all = []
