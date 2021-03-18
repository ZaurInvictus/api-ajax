$(document).ready(function () {
  // ADD CARDS
  $("#generate").click(function () {
    // GET INPUT VALUE
    var number = $("input").val();
    $("input").val(""); // Clear the form

    // API CALL
    // AJAX LOADS DATA WITHOUT REFRESHING BROWSER
    $.ajax({
      url: `https://randomuser.me/api/?results=${number}`,
      dataType: "json",
      // type: 'GET', // Optional
      success: function (res) {
        const data = res.results;
        console.log(data);
        // $('.row').append('Append Data to the UI')

        var html_str = "";

        // LOOP OVER USER DATA
        for (var i = 0; i < data.length; i++) {
          // console.log('data[i]', data[i])
          html_str += `<div class='col-12 col-sm-6 col-md-4'>
                
          <button id='btn-delete' class='btn btn-danger w-100'>Delete</button>
         
          <div class='card my-1 p-2'>  
          
          <img class='card-img-top' alt='user' src="${data[i].picture.large}">

          <div class='card-body'>      
          
          <h5 class="card-title">${data[i].name.first} ${data[i].name.last}</h5>

          <p class="card-text">City 
          ${data[i].location.city} 
          ${data[i].location.street.number}
          ${data[i].location.street.name}
          </p>

          <button class='btn btn-primary'>Email</button>
          
          </div>
          </div>
          </div>`;
        }

        // $(".row").html(html_str)
        // APPEND CARD TO THE PAGE
        // console.log(html_str)
        $(".row").append(html_str);
      },
    });
  });

  // REMOVE CARDS ON BUTTON CLICK
  $(document).on("click", "#btn-delete", function () {
    // console.log( $(this).parent())
    $(this).parent().remove();
  });

  // REMOVE CARDS ON CLICK ON CARDS
  // $(document).on("click", ".col", function () {
  //     $(this).remove();
  // })
});
