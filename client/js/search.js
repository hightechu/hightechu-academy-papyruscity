// createAccount
function searchID() {
  // If the response has an error -> inform user
  // Else is successful -> inform user
  responseStatus = function(response, status) {
      if (response.metadata.author == null) {
          // Inform User of Error
          console.log("error");
      } else {
          // Account Created Successfully
          console.log("Request Succesful");
          // Redirect User to Homepage
          document.getElementById("dataFromAPI").innerHTML = response.metadata.title;
      }
  }


  // Grab data from search page
  var jsonObj = new Object();
  jsonObj.id = document.getElementById("bookID").value;


  // Connect to the API
  connectAPI("texts/{0}".format(jsonObj.id), "GET", responseStatus);
}

// keyword serach
function search() {
  // If the response has an error -> inform user
  // Else is successful -> inform user
  responseStatus = function(response, status) {
      if (Array.isArray(response.texts) && response.texts.length == 0) {
          // Inform User of Error
          console.log("Invalid Search")
          document.getElementById("searchTitle").innerHTML
      } else {
          // Account Created Successfully
          console.log(response.texts);
          // Redirect User to Homepage

          for (let step = 0; step < response.texts.length; step++) {
              // Runs 5 times, with values of step 0 through 4.
              console.log(response.texts[step]);
              document.getElementById("dataFromAPI").innerHTML += response.texts[step].author + ",\ ";
              document.getElementById("dataFromAPI").innerHTML += response.texts[step].language + ",\ ";
              document.getElementById("dataFromAPI").innerHTML += response.texts[step].rights + ",\ ";
              for (let i = 0; i < response.texts[step].subject.length; i++) {
                  document.getElementById("dataFromAPI").innerHTML += response.texts[step].subject[i] + ",\ ";
              }
              document.getElementById("dataFromAPI").innerHTML += response.texts[step].text_id;
              document.getElementById("dataFromAPI").innerHTML += "<br>";
          }

      }
  }


  // Grab data from searchr page
  var jsonObj1 = new Object();
  jsonObj1.search = document.getElementById("searchTitle").value;

  // Connect to the API
  connectAPI("search/title eq {0}?include=author,language,rights,title,subject".format(jsonObj1.search), "GET", responseStatus);
}