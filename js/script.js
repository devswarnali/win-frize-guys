$('.slider').slick({
    dots: false,
    arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
})

$(document).ready(function(){
    $("#submit").on("click",function(){
      let firstname = $("#firstname").val();
      let lastname = $("#lastname").val();
      let city = $("#city").val();
      let email = $("#email").val();
      let tel = $("#tel").val();
      let subject = $("#subject").val();
      let message = $("#message").val();

      $('.error').remove();

      if(firstname.length == ""){
        // alert("Enter Your First Name")
        $("#firstname").after('<span class="error">Enter Your First Name </span>');
        $('.error').fadeOut(5000);
      }else if(lastname.length ==""){
        // alert("Enter Your Last Name")
        $("#lastname").after('<span class="error"> Enter Your Last Name </span>');
        $('.error').fadeOut(5000);
      }else if(city.length ==""){
        // alert("Enter Your City")
        $("#city").after('<span class="error"> Enter Your City </span>');
        $('.error').fadeOut(5000);
      }else if(email.length ==""){
        $("#email").after('<span class="error"> Enter Your Email </span>');
        $('.error').fadeOut(5000); 
      }else if(tel.length ==""){
        $("#tel").after('<span class="error"> Enter Your Phone No </span>');
        $('.error').fadeOut(5000);
      }else if(subject.length ==""){
        $("#subject").after('<span class="error"> Enter Your Subject </span>');
        $('.error').fadeOut(5000);
      }else if(message.length ==""){
        $("#message").after('<span class="error"> Enter Your Message </span>');
        $('.error').fadeOut(5000);
      }else {
        $("#firstname").val("");
        $("#city").val("");
        $("#email").val("");
        $("#tel").val("");
        $("#subject").val("");
        $("#message").val("");
      }
    });
  })