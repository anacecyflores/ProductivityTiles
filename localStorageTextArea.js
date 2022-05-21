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
  let dateContent = $(this).siblings(".date-inputs").val();

  let obj = {
    date: dateContent,
    task: content
  }

  localStorage.setItem(selectedTask, JSON.stringify(obj));
  let itemRecalled = JSON.parse(localStorage.getItem(selectedTask));
  // need to stringify the info 
  console.log(selectedTask);
  console.log(content);
  console.log(dateContent);
  console.log(itemRecalled);
});

$(function () {
  $('#sortable').sortable();
  $('#sortable').disableSelection();
});

//targets localStorage stored data from each id "#" and places it back in the .time-block with the matching id
$("#1-text").val(JSON.parse(localStorage.getItem("1-text")).task);
$("#1-date").val(JSON.parse(localStorage.getItem("1-text")).date);
$("#2-text").val(JSON.parse(localStorage.getItem("2-text")).task);
$("#2-date").val(JSON.parse(localStorage.getItem("2-text")).date);
$("#3-text").val(JSON.parse(localStorage.getItem("3-text")).task);
$("#3-date").val(JSON.parse(localStorage.getItem("3-text")).date);
$("#4-text").val(JSON.parse(localStorage.getItem("4-text")).task);
$("#4-date").val(JSON.parse(localStorage.getItem("4-text")).date);
$("#5-text").val(JSON.parse(localStorage.getItem("5-text")).task);
$("#5-date").val(JSON.parse(localStorage.getItem("5-text")).date);
$("#6-text").val(JSON.parse(localStorage.getItem("6-text")).task);
$("#6-date").val(JSON.parse(localStorage.getItem("6-text")).date);
$("#7-text").val(JSON.parse(localStorage.getItem("7-text")).task);
$("#7-date").val(JSON.parse(localStorage.getItem("7-text")).date);
$("#8-text").val(JSON.parse(localStorage.getItem("8-text")).task);
$("#8-date").val(JSON.parse(localStorage.getItem("8-text")).date);
$("#9-text").val(JSON.parse(localStorage.getItem("9-text")).task);
$("#9-date").val(JSON.parse(localStorage.getItem("9-text")).date);
$("#10-text").val(JSON.parse(localStorage.getItem("10-text")).task);
$("#10-date").val(JSON.parse(localStorage.getItem("10-text")).date);
$("#11-text").val(JSON.parse(localStorage.getItem("11-text")).task);
$("#11-date").val(JSON.parse(localStorage.getItem("11-text")).date);
$("#12-text").val(JSON.parse(localStorage.getItem("12-text")).task);
$("#12-date").val(JSON.parse(localStorage.getItem("12-text")).date);
$("#13-text").val(JSON.parse(localStorage.getItem("13-text")).task);
$("#13-date").val(JSON.parse(localStorage.getItem("13-text")).date);
$("#14-text").val(JSON.parse(localStorage.getItem("14-text")).task);
$("#14-date").val(JSON.parse(localStorage.getItem("14-text")).date);
$("#15-text").val(JSON.parse(localStorage.getItem("15-text")).task);
$("#15-date").val(JSON.parse(localStorage.getItem("15-text")).date);
$("#16-text").val(JSON.parse(localStorage.getItem("16-text")).task);
$("#16-date").val(JSON.parse(localStorage.getItem("16-text")).date);

// localStorage.setItem("item-16", {date: yourDate, task: yourTask});

// console.log(itemRecalled.date); //should show the date

