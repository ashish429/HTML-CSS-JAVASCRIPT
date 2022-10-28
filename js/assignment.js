function isValidForm() {

    var name = document.getElementById('UserName').value;
    var email = document.getElementById('Email').value;
    var web = document.getElementById('Website').value;
    var gender = document.forms["EnrollmentForm"]["Gender"].value;
   
    if(EnterName(name)){
      if(EnterEmail(email)){
        if(EnterWebsite){
          if(isValidGender(gender)) {
            if(isValidSkills())
              if(confirm('Do you want to submit the form?')) {
                addRow();  
                return true;
              }
          }

        }
      }
    }
    
  }

  function EnterName(name) {
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    return true;
  }
  
  function EnterEmail(email) {
    string="@";
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (email.includes(string)==false){
      alert("@ must be included in an Email. Write the correct Email");
      return false;
    }
  
    return true;
  }
  
  function EnterWebsite(web) {
    if (web == "") {
      alert("web must be filled out");
      return false;
    }
    let url;
  
    try {
      url = new URL(web);
    } catch (_) {
      alert("Enter a correct Website");
      return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
    return true;
  }
  
  
  function isValidGender(gender) {
    if (gender == "") {
      alert("Gender must be filled out");
      return false;
    }
    return true;
  }
  
  function isValidSkills() {
    var java = document.getElementById("Java");
    var sql = document.getElementById("SQL");   
    var html = document.getElementById("HTML");  
    var css = document.getElementById("CSS");
    var js = document.getElementById("Javascript");
    if (java.checked == false && sql.checked == false && html.checked == false && css.checked == false && js.checked == false) {
      alert("Mention at least 1 skill");
      return false;
    }
    return true; 
  }
  
  
  function addRow(){
    // get input values
    var name = document.getElementById('UserName').value;
    var email = document.getElementById('Email').value;
    var web = document.getElementById('Website').value;
    var image = document.getElementById('ImageLink').value;
    var gender = document.forms["EnrollmentForm"]["Gender"].value;
  
    // For Skills
    var java = document.getElementById("Java"); 
    var sql = document.getElementById("SQL"); 
    var html = document.getElementById("HTML");  
    var css = document.getElementById("CSS");
    var js = document.getElementById("Javascript");
    
    var skills = " ";
  
    if(java.checked == true) {
      skills = skills + java.value+" ";
    }

    if(sql.checked == true) {
      
      skills =  skills + sql.value+" ";
    }
  
    if(html.checked == true) {
      
      skills =  skills + html.value+" ";
    }
  
    if(css.checked == true) {
      
      skills =  skills + css.value+" ";
    }

    if(js.checked == true) {
      
      skills =  skills + js.value+" ";
    }
  
  
    // 0 = the first table
    var table = document.getElementsByTagName('table')[0];
  
    var img = document.createElement('img');
    img.src = image;
    // add new empty row to the table
    // table.rows.length = the end
    var newRowTable = table.insertRow(table.rows.length);
  
    // add cells to the row
    var col1 = newRowTable.insertCell(0);
    var col2 = newRowTable.insertCell(1);
    var fade = "fade-in";
    // add values to the cells
    col1.innerHTML =  "<div class="+fade+"><ul><li> <b>" + name + "</b></li><li>" 
    + gender + "</li><li>" + email + "</li><li> <a href=" 
    + web + " target= _blank>"  + web + "</a></li><li>"+ skills + " </li></ul>";
    col2.innerHTML =  "<div class="+fade+"><img src= " + image + " alt=User Image class = responsive>";
  
  var DefaultImg = src="js/default_image.png";
  
  var replaceDefaultImage = function( defImg ) {
  
    // sanitize domImg
    if ( !defImg || !defImg.nodeName || defImg.nodeName != 'IMG' ) {
      // get all images from DOM
      var Img1 = document.getElementsByTagName('IMG');
      i    = Img1.length;
      if ( i ) {
        while ( i-- ) {
            replaceDefaultImage( Img1[i] );
        }
      }
      return;
    }
  
    // New_image
    var Img2         = new Image();       // create new Image
    Img2.onerror = function() {       // assign onerror
        defImg.src = DefaultImg; // handler function
    };
    Img2.src     = defImg.src;        //  new Image set
  
  };
  
  replaceDefaultImage()
  
  
  
  
  $('#subBtn').on('click', function() {
    if ($('#UserTable').css('opacity') == 0) $('#UserTable').css('opacity', 1);
    else
     {$('#UserTable').css('opacity', 0);}
    
    $('#UserTable').css('opacity', 1).delay(5000);
    
  });
  
  } 