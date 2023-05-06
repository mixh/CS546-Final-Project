// AJAX FOR DELETE 
$(document).ready(function () {
  $("#delete-account").on("click", function (event) {

    event.preventDefault();

    const userId = $(this).attr("href").split("/").pop();

    $.ajax({
      url: `/delete/${userId}`,
      type: "GET",
      success: function (response) {
        const message = "Your account has been successfully deleted.";
        window.location.href = `/?message=${message}`;
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});

//The main advantage of using an AJAX request in this case is that it allows to delete 
//the user's account without reloading the entire page. 
//This can improve the user experience by making the process feel more seamless and responsive