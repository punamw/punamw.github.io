var giveAlert = function(extraFunction){
  alert(window.innerWidth);
  extraFunction();
}

$('#click').click(function(){
  alert("hi");
  $('#name2').text('test');
})
