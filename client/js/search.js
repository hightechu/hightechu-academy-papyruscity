// createAccount
function searchID() {
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

  
  // Grab data from search page
  var jsonObj = new Object();
  //jsonObj.id = document.getElementById("bookID").value;
  

  // Connect to the API
  connectAPI("texts/{0}".format(jsonObj.id), "GET", responseStatus);
}

// keyword serach
function search() {
  // If the response has an error -> inform user
  // Else is successful -> inform user
  responseStatus = function (response, status) {
    if (response.texts == null) {
      // Inform User of Error
      console.log("error");
    }
    else {
      // Account Created Successfully
      console.log("Request Succesful");
      // Redirect User to Homepage
      document.getElementById("dataFromAPI").innerHTML = response.texts;
  }
}

  // Grab data from searchr page
  var jsonObj1 = new Object();
  jsonObj1.search = document.getElementById("searchTerm").value;

  // Connect to the API
  connectAPI("search/title eq {0}?include=author,language,rights,title,subject".format(jsonObj1.id), "GET", responseStatus);
}