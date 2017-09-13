// Business (or back-end) logic:

$(document).ready(function() {
  $("#formOne").submit(function() {

    var firstName1Input = $("input#firstName1").val();
    var lastName2Input = $("input#lastName2").val();
    var appointmentDescription1Input= $("input#appointmentDescription1").val();
    var appointmentDate1Input = $("input#appointmentDate1").val();
    var startTime1Input = $("input#startTime1").val();
    var endTime1Input = $("input#endTime1").val();
    var message = ("Here is the information about your appointment: " + firstName1Input + " " + lastName2Input + "for "+ appointmentDescription1Input + " on " + appointmentDate1Input + " between " + startTime1Input + " and " + endTime1Input);

//User interface (or front-end) logic
    event.preventDefault();
    $(".firstName1").append(firstName1Input);
    $(".lastName2").append(lastName2Input);
    $(".appointmentDescription1").append(appointmentDescription1Input);
    $(".appointmentDate1").append(appointmentDate1Input);
    $(".startTime1").append(startTime1Input);
    $(".endTime1").append(endTime1Input);

    alert(message);
   //$("#story").show();
  });
});
