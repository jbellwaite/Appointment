// Business (or back-end) logic:

$(document).ready(function() {
  $("#formOne").submit(function() {

    var firstName1Input = $("input#firstName1").val();
    var lastName2Input = $("input#lastName2").val();
    var favoritebevInput= $("#favoritebev").val();
    var appointmentDate1Input = $("input#appointmentDate1").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

    var message = ("Thank you for taking our survey. Here are your results: Your name is " + firstName1Input + " " + lastName2Input + ", and you love "+ favoritebevInput + ". You also prefer " + appointmentDate1Input + " and " + flavor);

//User interface (or front-end) logic
    event.preventDefault();
    $(".firstName1").add(firstName1Input);
    $(".lastName2").add(lastName2Input);
    $(".favoritebev").add(favoritebevInput);
    $(".appointmentDate1").add(appointmentDate1Input);
    $(".radio").add(flavor);


    alert(message);
   //$("#story").show();
  });
});
