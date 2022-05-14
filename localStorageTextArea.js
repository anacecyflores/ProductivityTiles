var taskButton = document.querySelector(".task-btn");
let textArea = document.querySelector(".task-block");

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
$("#9").val(localStorage.getItem("8"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
$("#18").val(localStorage.getItem("18"));
$("#19").val(localStorage.getItem("19"));
$("#20").val(localStorage.getItem("20"));
$("#21").val(localStorage.getItem("21"));
$("#22").val(localStorage.getItem("22"));
$("#23").val(localStorage.getItem("23"));
$("#24").val(localStorage.getItem("24"));
$("#25").val(localStorage.getItem("25"));
$("#26").val(localStorage.getItem("26"));
$("#27").val(localStorage.getItem("27"));
$("#28").val(localStorage.getItem("28"));
$("#29").val(localStorage.getItem("29"));
$("#30").val(localStorage.getItem("30"));
$("#31").val(localStorage.getItem("31"));
$("#32").val(localStorage.getItem("32"));
$("#33").val(localStorage.getItem("33"));
$("#34").val(localStorage.getItem("34"));
$("#35").val(localStorage.getItem("35"));
$("#36").val(localStorage.getItem("36"));
$("#37").val(localStorage.getItem("37"));
$("#38").val(localStorage.getItem("38"));
$("#39").val(localStorage.getItem("39"));
$("#40").val(localStorage.getItem("40"));
$("#41").val(localStorage.getItem("41"));
$("#42").val(localStorage.getItem("42"));
$("#43").val(localStorage.getItem("43"));
$("#44").val(localStorage.getItem("44"));
$("#45").val(localStorage.getItem("45"));
$("#46").val(localStorage.getItem("46"));
$("#47").val(localStorage.getItem("47"));
$("#48").val(localStorage.getItem("48"));
