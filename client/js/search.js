// Book Id search
let search_result;
let searchSubject = [];
let books = [];

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

  // Create Global Variable for Gutenberg ID ---------------------------------------------------------------------------
}

function remLSPref(pref, newName) {
    for (var key in sessionStorage) {
        if (key.indexOf(pref) == 0) {
            if (key != newName) {
                sessionStorage.removeItem(key);
            }
        }
    }
}

sessionStorage.getItem("TEST");
sessionStorage.setItem("TEST", "Hello");

// keyword serach
function search(urlVars) {
    isPaused = true;
    var pref = 'label-';
    var key = pref;
    
    // rem old ls
    remLSPref(pref);
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
          books = response.texts;
        //   for (let step = 0; step < response.texts.length; step++) {
        //     sessionStorage.getItem('Author-' + [step]);
        //     sessionStorage.getItem('Language-' + [step]);
        //     sessionStorage.getItem('Rights-' + [step]);
        //     sessionStorage.getItem('Title-' + [step]);
        //     console.log(response.texts[step]);
        //     sessionStorage.setItem('Author-' + [step], response.texts[step].author);
        //     sessionStorage.setItem('Language-' + [step], response.texts[step].language);
        //     sessionStorage.setItem('Rights-' + [step], response.texts[step].rights);
        //     sessionStorage.setItem('Title-' + [step], response.texts[step].title);

            

        //     for (let i = 0; i < response.texts[step].subject.length; i++) {
        //         sessionStorage.getItem('Subject-' + [step] + '-' + [i]);
        //         sessionStorage.setItem('Subject-' + [step] + '-' + [i], response.texts[step].subject[i]);
        //         searchSubject.push(response.texts[step].subject[i]);
        //     }
        //       /*for (let i = 0; i < response.texts[step].subject.length; i++) {
        //           document.getElementById("dataFromAPI").innerHTML += response.texts[step].subject[i] + ",\ ";
        //       }
        //       document.getElementById("dataFromAPI").innerHTML += response.texts[step].text_id;
        //       document.getElementById("dataFromAPI").innerHTML += "<br>";*/
        //   }

      }
      search_result = response.texts.length;
      isPaused = false;
  }


  // Grab data from searchr page
  var jsonObj1 = new Object();
  //jsonObj1.search = document.getElementById("searchTitle").value;
  jsonObj1.search = urlVars['searchTitle'];

  // Connect to the API
  connectAPI("search/title eq {0}?include=author,language,rights,title,subject".format(jsonObj1.search), "GET", responseStatus);

  // Create Global Variable for Gutenberg ID -------------------------------------------------------------------------------------
}

// Term search
function searchTerm() {
    // If the response has an error -> inform user
    // Else is successful -> inform user
    responseStatus = function(response, status) {
        if (response == null) {
            // Inform User of Error
            console.log("error");
        } else {
            // Account Created Successfully
            console.log("Request Succesful");
            // Redirect User to Homepage
            document.getElementById("dataFromAPI").innerHTML = response;
        }
    }
  
  
    // Grab data from search page
    var jsonObj2 = new Object();
    jsonObj2.id = document.getElementById("searchTerm").value;
  
  
    // Connect to the API
    connectGutendex("topic={0}".format(jsonObj2.id),"GET", responseStatus);
    
    // Create Global Variable for Gutenberg ID -------------------------------------------------------------------------------------????????
  }