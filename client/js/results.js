
function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < myList.length; i++) {
      var rowHash = myList[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
    $(selector).append(headerTr$);
  
    return columnSet;
  }
  
  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }
search(getUrlVars());
console.log(search_result);
function waitForIt() {
    if (isPaused) {
        setTimeout(function(){waitForIt()},100);
    }
    else {
        console.log(search_result);
        for (let step = 0; step < books.length; step++) {
            let div = document.createElement('div');
            div.innerHTML = 
                '<div class = "resultsbox">\
                    <td>\
                    <h3 id="title" class="centre">' + books[step].title + '</h3>\
                    <h4 id="author" class="centre">' + books[step].author + '</h4>\
                    <ul id="Subjects">' + addSubject(books[step].subject) + '</ul>\
                    <p style="font-size: 20px; margin-left: 10px" id="rights">' + books[step].rights + "\ " + books[step].language + '</p>\
                    <textarea class="BookReview">\
                (Book Review)\
                    </textarea>\
                    </td>\
                    <td>\
                        <button>Like</button>\
                        <button>Dislike</button>\
                    </td>\
                </div>';
            document.getElementById("bookResults").appendChild(div);
        }
        
    }
}
waitForIt();
function addSubject(subjects) {
    formatedSubjects = [];
    for (let i = 0; i < subjects.length; i++) {
        console.log(subjects[i]);
        formatedSubjects.push('<li>' + subjects[i] + '</li>');
    }
    console.log(formatedSubjects);
    return formatedSubjects.join(" ");
}