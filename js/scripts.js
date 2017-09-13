// Business (or back-end) logic:

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var firstName1Input = $("input#firstName1").val();
    var lastName2Input = $("input#lastName2").val();
    var appointmentDescription1Input= $("input#appointmentDescription1").val();
    var appointmentDate1Input = $("input#appointmentDate1").val();
    var startTime1Input = $("input#startTime1").val();
    var endTime1Input = $("input#endTime1").val();

//User interface (or front-end) logic

    $(".firstName1").append(firstName1Input);
    $(".lastName2").append(lastName2Input);
    $(".appointmentDescription1").append(appointmentDescription1Input);
    $(".appointmentDate1").append(appointmentDate1Input);
    $(".startTime1").append(startTime1Input);
    $(".endTime1").append(endTime1Input);

    $("#story").show();

  });
});
