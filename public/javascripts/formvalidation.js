function ValidationEvent1() {
    // Storing Field Values In Variables
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("date").value;
    var address = document.getElementById("address").value;
    var msg =  document.getElementById("msg");
    var emailval =  /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+.([a-zA-Z])+([a-zA-Z])+/ ;


    if (fname == '' || lname == '' || email == '' || dob == '' || address == ''  ) { 
            document.getElementById("filedsetfirsterr").innerHTML="Please complete all required fields";
            animating = true;
            return false;
    }

    
    if (email !== '' ) { 
            if (emailval.test(email)) {
                document.getElementById("filedsetfirsterr").innerHTML = "";
                animating = false;
            }
            else {
                document.getElementById("filedsetfirsterr").innerHTML = "Please enter your valid email Address";
                animating  = true;
                return false;
            }           
           
    }   
    
    else {
        document.getElementById("filedsetfirsterr").innerHTML="";
    animating = false;

    }

        
}


function ValidationEvent2(){
    var homerb=document.getElementsByName('home');
    var relstatus=document.getElementById('relstatus').value;
    var occupation=document.getElementById('occupation').value;
    var educationrb = document.getElementsByName('education');
    
    if (!(homerb[0].checked || homerb[1].checked)) {
        document.getElementById("filedsetSecErr").innerHTML="Please complete all required fields";
        animating  = true;
        return false;
    }  

    if (relstatus == '' || occupation == ''){
        document.getElementById("filedsetSecErr").innerHTML="Please complete all required fields";
        animating = true;
        return false;
    }
    
    if (!(educationrb[0].checked || educationrb[1].checked || educationrb[2].checked || educationrb[3].checked)) {
        document.getElementById("filedsetSecErr").innerHTML="Please complete all required fields";
        animating  = true;
        return false;
    } 

    else {
        document.getElementById("filedsetSecErr").innerHTML="";
    animating = false;

    }

}



function ValidationEvent3(){
    var phone=document.getElementById('phone').value;
    var aboutus=document.getElementById('aboutus').value;
    var phoneExpression = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;

    if (phone == '' || aboutus == ''){
        document.getElementById("filedsetThrErr").innerHTML="Please complete all required fields";
        animating = true;
        return false;
    }

    if (phone !== '' ) { 
        if (phoneExpression.test(phone)) {
            document.getElementById("filedsetThrErr").innerHTML = "";
            animating  = false;
            return true;
        }
        
        else {
            document.getElementById("filedsetThrErr").innerHTML = "Please Enter Valid Australian phone number";
            animating  = true;
            return false;
        }
       
    animating  = false;
    }

    else {
        document.getElementById("filedsetThrErr").innerHTML="";
    animating = false;

    }

}

