
function validatephone(phone) 
    {
    if(phone.match(/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/))
        {
            document.getElementById("errphone").innerHTML = "";
        }
        else
        {
            document.getElementById("errphone").innerHTML = "Please Enter Valid Australian phone number";
        }
    }


// validate email

function email_validate()

    {
        var email_x = document.getElementById("email").value;
        filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email.value)) {
            document.getElementById("emailval").innerHTML = "";
            return true;
        } else {
            document.getElementById("emailval").innerHTML = "Please enter valid email";
            return false;
        }
    }