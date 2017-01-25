'use strict';
// Tasks Controller

class TasksController {
    // $addTaskForm
    constructor() {
      this.$addTaskForm = $('#add_task')
      this.$taskDescriptionInput = $('#task_description')
      this.$selectListMenu = $('#select_list')
      this.$taskPriorityInput = $('#task_priority')
      this.$wrapper = $('#wrapper')
    }

    init() {
      // ES6
      this.$addTaskForm.on("submit", (e) => {
        e.preventDefault()
        var ourListIndex = this.$selectListMenu.val()
        var ourListItem = List.all[ourListIndex]

        var task = new Task(this.$taskDescriptionInput.val(), this.$taskPriorityInput.val(), ourListItem)

        task.build()

        $('li button').click(function() {

          var plsDelete = this.parentNode

          var holdTaskID = plsDelete.getAttribute('data-id')

          plsDelete.remove()
          List.all[0].tasks[holdTaskID] = null
        })
      })

      // return(`<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`)



    }
}

// ES5 init
// this.$addListForm.on("submit", function () {
//   this.$addTaskForm.css('display', 'block')
// var list = new List(this.$listTitleInput.val())
// list.build()
// }.bind(this) )
