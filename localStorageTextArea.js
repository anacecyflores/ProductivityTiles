var taskButton = document.querySelector(".task-btn");
let textArea = document.querySelector(".task-block");
const listOfTasks = document.getElementById("sortable")

$(".task-btn").click(function () {
  //selectedTask is equal to the ID within each task-block class,
  //the right side translates to target the id's within the .task-block
  //class which is a sibling to the current element targeted saveButton .saveBtn
  let selectedTask = $(this).siblings(".task-block").attr("id");
  //content is equal to the value of the textarea element targeted by the
  // task-block class, which is a sibling of the current element targetted
  //in the DOM which is the Add Task button (.task-Btn)
  let content = $(this).siblings(".task-block").val();
  // saves both variables together in local storage
  localStorage.setItem(selectedTask, content);
});

//targets localStorage stored data from each id "#" and places it back in the .time-block with the matching id
$("#1").val(localStorage.getItem("1"));
$("#2").val(localStorage.getItem("2"));
$("#3").val(localStorage.getItem("3"));
$("#4").val(localStorage.getItem("4"));
$("#5").val(localStorage.getItem("5"));
$("#6").val(localStorage.getItem("6"));
$("#7").val(localStorage.getItem("7"));
$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));

$(function () {
  $('#sortable').sortable();
  $('#sortable').disableSelection();
});