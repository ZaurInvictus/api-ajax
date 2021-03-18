$(document).ready(function () {

  $("#generate").click(function () {
    // GET INPUT VALUE
    var number = $("input").val();
    $("input").val(""); // Clears the form

    // API CALL
    // AJAX LOADS DATA WITHOUT REFRESHING BROWSER
    $.ajax({
      url: `https://randomuser.me/api/?results=${number}`,
      dataType: "json",
      success: function (res) {
        const data = res.results

        var html_str = ""

        // LOOP OVER USER DATA
        for (var i = 0; i < data.length; i++) {
          // console.log('data[i]', data[i])
          html_str += `<div class='col-12 col-sm-6 col-md-4'>
          <button id='btn-delete' class='btn btn-danger w-100'>Delete</button>
          <div class='card my-1 p-2'>
              <img class='card-img-top' alt='user' src="${data[i].picture.large}">
              <div class='card-body'>
                  <h5 class="card-title">
                   ${data[i].name.first}
                   ${data[i].name.last}
                  </h5>
                  <p class="card-text">
                    ${data[i].location.city}
                    ${data[i].location.street.number}
                    ${data[i].location.street.name}
                  </p>
                  <button class='btn btn-primary'>Email</button>
              </div>
            </div>
          </div>`
        }

        // APPEND CARD TO THE PAGE
        $(".row").append(html_str)
      }
    })
  })

  // REMOVE CARDS ON BUTTON CLICK
  $(document).on("click", "#btn-delete", function () {
    $(this).parent().remove()
  })

})
