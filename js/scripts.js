var outputArray = [];
var currentMultiplier = 2;
var remainder = 0;


$(document).ready(function(){
  $("#sieveform").submit(function(event){

    var finalNumber = parseInt($("input#finalnumber").val());

    for(var i = 2; i <= finalNumber; i++){
      outputArray.push(i);
    }
    alert(outputArray);


      // remainder = outputArray[i] / currentMultiplier;
      // currentMultiplier = currentMultiplier + 1
      // alert(remainder);
      // alert(currentMultiplier);



    event.preventDefault();
  });
});
