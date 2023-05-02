
  $("form10").submit(function(event) {
    // Prevent the default form submission
    event.preventDefault();
  
    // Send an AJAX request to the server
    $.ajax({
      type: "GET",
      url: "/messages/{{userId}}/messages/{{matchUserId}}/",
      data: $(this).serialize(),
      success: function(response) {
        // If the server successfully saves the message, update the conversation view
        $("#messages-list").html(response);
      },
      error: function(error) {
        console.error(error);
      }
    });
  });
  
  // Send POST request to submit message
  $("form10").submit(function(event) {
    // Prevent the default form submission
    event.preventDefault();
  
    // Send an AJAX request to the server
    $.ajax({
      type: "POST",
      url: "/messages/{{userId}}/messages/{{matchUserId}}/send",
      data: $(this).serialize(),
      success: function(response) {
        // If the server successfully saves the message, update the conversation view
        $("#messages-list").html(response);
      },
      error: function(error) {
        console.error(error);
      }
    });
  });
  
