function validate()
{
    var uv = document.getElementById("uname").value
    var up = /^[A-Za-z]+$/
    var phv = document.getElementById("phno").value
    var php = /^[6-9]{1}[0-9]{9}$/
    const psv = document.getElementById("Password").value
    const psp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const cpsv = document.getElementById("ConfirmPassword").value
    
    if(uv=="")
    {
        document.getElementById("msg").innerHTML="The username should not be empty."
        return false
    }

    if(uv.match(up))
    true;
    else
    {
        document.getElementById("msg").innerHTML="Enter a valid username Pattern"
        return false
    }

    if(uv.length<3)
    {
        document.getElementById("msg").innerHTML="The username should contain atleast 8 characters"
        return false
    }

    if(uv.length>8)
    {
        document.getElementById("msg").innerHTML="The username should not contain more than 8 characters"
        return false
    }

    if(phv=="")
    {
        document.getElementById("msg1").innerHTML="Enter the phone number"
        return false
    }

    if(phv.match(php))
    true;
    else
    {
        document.getElementById("msg1").innerHTML="Enter a valid phone number"
        return false
    }   

    if(psv=="")
    {
        document.getElementById("msg2").innerHTML="please enter the password"
        return false
    }

    if(psv.match(psp))
    true;
    else
    {
        document.getElementById("msg2").innerHTML="Enter a valid password"
        return false
    } 

    if(cpsv=="")
    {
        document.getElementById("msg3").innerHTML="please enter the confirm password"
        return false
    }
    
    if(psv==cpsv)
    true;
    else
    {
        document.getElementById("msg3").innerHTML="cofirm password do not match with the password"
        return false
    }
    
    alert("submitted successfully")
}