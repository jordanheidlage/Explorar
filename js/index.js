var counter =0;
$('#next').click(function(){
  var pos = $('#fig').position();
  if(counter < 4){
    console.log(counter);
    counter++;
      $('#fig').css("left",pos.left-( $(window).innerWidth() ));
  }
  else{
    $('#fig').css("left","0px");
    counter=0;
  }
});