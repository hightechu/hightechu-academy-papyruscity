// createAccount
function createAccount() {
  // If the response has an error -> inform user
  // Else is successful -> inform user
  responseStatus = function (response, status) {
    if (response.metadata.author == null) {
      // Inform User of Error
      console.log("error");
    }
    else {
      // Account Created Successfully
      console.log("Request Succesful");
      // Redirect User to Homepage
      document.getElementById("dataFromAPI").innerHTML = response.metadata.title;
    }
  }

  
  // Grab data from login-register page
  var jsonObj = new Object();
  jsonObj.id = document.getElementById("bookID").value;
  jsonObj.password = document.getElementById("passwordRegister").value;

  // Connect to the API
  connectAPI("texts/{0}".format(jsonObj.id), "GET", responseStatus);
}

// login
function login() {
  // If the response has an error -> inform user
  // Else is successful -> inform user
  responseStatus = function (response, status) {
    if ('error' in response) {
      // Inform User of Error
     console.log("{0}: {1}".format(status, response.error.message));
    }
    else {
      // Login Successful
      console.log("Login successful!");
      // Set userAuth in a cookie
      setCookie("userAuth", response.id);
      // Set userID in a cookie
      setCookie("userId", response.userId)

      // Redirect User to Homepage
      window.location = "/";
    }
  }

  // Grab data from login-register page
  var jsonObj = new Object();
  jsonObj.id = document.getElementById("bookID").value;
  jsonObj.password = document.getElementById("passwordLogin").value;

  // Connect to the API
  connectAPI("users/login", "POST", responseStatus, jsonObj);
}

// Check if user is already logged in
if (getCookie("userAuth")) {
  // User already logged in
 console.log("You are already logged in.");
  // Redirect User to Homepage
  window.location = "/";
}