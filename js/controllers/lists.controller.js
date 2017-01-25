'use strict';
// Lists Controller


class ListsController {
    // $addListForm
    constructor() {
      this.$addListForm = $('#add_list')
      this.$listTitleInput = $('#list_title')
      this.$selectListMenu = $('#select_list')
      this.$addTaskForm = $('#add_task')
      this.$wrapper = $('#wrapper')
    }



    init() {
      this.$addTaskForm.css('display','none')

      // ES5
      // this.$addListForm.on("submit", function () {
      //   this.$addTaskForm.css('display', 'block')
      // var list = new List(this.$listTitleInput.val())
      // list.build()
      // }.bind(this) )

      // ES6
      this.$addListForm.on("submit", (e) => {
        e.preventDefault()
        this.$addTaskForm.css('display', 'block')
        var list = new List(this.$listTitleInput.val())
        list.build()

        var listDiv = $(`#list-${list.id}`)
        listDiv.parent().find("button").on("click", () => {
          listDiv.parent().remove()
          
        })

      })


    }

}
