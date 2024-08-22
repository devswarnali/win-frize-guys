$('.slider').slick({
  dots: false,
  arrow: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
})

// $(document).ready(function(){
//     $("#submit").on("click",function(e){
//       // e.preventdefault();
//       let firstname = $("#firstname").val();
//       let lastname = $("#lastname").val();
//       let city = $("#city").val();
//       let email = $("#email").val();
//       let tel = $("#tel").val();
//       let subject = $("#subject").val();
//       let message = $("#message").val();

//       $('.error').remove();

//       if(firstname.length == ""){
//         // alert("Enter Your First Name")
//         $("#firstname").after('<span class="error">Enter Your First Name </span>');
//         $('.error').fadeOut(5000);
//       }else if(lastname.length ==""){
//         // alert("Enter Your Last Name")
//         $("#lastname").after('<span class="error"> Enter Your Last Name </span>');
//         $('.error').fadeOut(5000);
//       }else if(city.length ==""){
//         // alert("Enter Your City")
//         $("#city").after('<span class="error"> Enter Your City </span>');
//         $('.error').fadeOut(5000);
//       }else if(email.length ==""){
//         $("#email").after('<span class="error"> Enter Your Email </span>');
//         $('.error').fadeOut(5000); 
//       }else if(tel.length ==""){
//         $("#tel").after('<span class="error"> Enter Your Phone No </span>');
//         $('.error').fadeOut(5000);
//       }else if(subject.length ==""){
//         $("#subject").after('<span class="error"> Enter Your Subject </span>');
//         $('.error').fadeOut(5000);
//       }else if(message.length ==""){
//         $("#message").after('<span class="error"> Enter Your Message </span>');
//         $('.error').fadeOut(5000);
//       }else {
//         $("#firstname").val("");
//         $("#lastname").val("");
//         $("#city").val("");
//         $("#email").val("");
//         $("#tel").val("");
//         $("#subject").val("");
//         $("#message").val("");
//       }

//       return false;

//     });
//   })


$(document).ready(function(){
  $("#formValidation").validate({
    rules: {
      firstname: {
        required: true,
        minlength: 2
      },
      lastname: {
        required: true,
        minlength: 2
      },
      city: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      tel: {
        number: true,
        digits: true,
        minlength: 10,
        maxlength: 10
      }
    },

    messages: {
      firstname: {
        required: "Please enter your first name",
        minlength: "Name atleast 2 characters"
      },
      lastname: {
        required: "Please enter your last name",
        minlength: "Name atleast 2 characters"
      },
      city: {
        required: "Please enter your city name",
        minlength: "Name atleast 2 characters"
      },
      email: "Please enter your email",
      tel: "Please enter your phone number",
      subject: "Please enter your subject",
      message: "Please enter your message"
    },


    submitHandler: function (form) {
      form.submit();
    },


  })
})

var inp = $("input[name='tel'] ");

var count = 0;
inp.bind('keyup', function () {
  count++;
  this.value = this.value.replace(/[^0-9]/, '');

});