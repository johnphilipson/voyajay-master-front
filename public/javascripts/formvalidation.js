

function validatephone(phone) 
{
    var maintainplus = '';
    var numval = phone.value 
    if ( numval.charAt(0)=='+' )
    {
        var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;

}

// validates text only
function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
// validate email
function email_validate(email)
{
var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(email) == false)
    {
    document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else
    {
    document.getElementById("status").innerHTML	= "";	
    }
}


function checkphone(){
    
                if (document.getElementById("phone").value.length < 8)
                 {
                document.getElementById("errphone").innerHTML = "your phone no is incorrect.";
                err = 1;
                 }
                else
                {
                document.getElementById("errphone").innerHTML = '';
                }              
                    
              }



              function myFunction() {
                var inpObj = document.getElementById("fname");
                if (!inpObj.checkValidity()) {
                   alert("form is empty.");
                    // document.getElementById("demo").innerHTML = inpObj.validationMessage;
                } else {
                    document.getElementById("demo").innerHTML = "Input OK";
                } 
            } 



function required()
              {
              var empt = document.form1.text1.value;
              if (empt === "")
              {
              alert("Please input a Value");
              return false;
              }
              else 
              {
              alert('Code has accepted : you can try another');
              return true; 
              }
              }       



function checkForm(form)
{
  // validation fails if the input is blank
  if(form.inputfield.value == "") {
    alert("Error: Input is empty!");
    form.inputfield.focus();
    return false;
  }

  // regular expression to match only alphanumeric characters and spaces
  var re = /^[\w ]+$/;

  // validation fails if the input doesn't match our regular expression
  if(!re.test(form.inputfield.value)) {
    alert("Error: Input contains invalid characters!");
    form.inputfield.focus();
    return false;
  }

  // validation was successful
  return true;
}


