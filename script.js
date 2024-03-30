function validation(){
    if(document.formfill.username.value==""){
        document.getElementById("result").innerHTML="Enter username*";
        return false
    }
   else if(document.formfill.username.value.length<6){
        document.getElementById("result").innerHTML="Atleat six letter*";
        return false
    }
    else if(document.formfill.email.value==""){
        document.getElementById("result").innerHTML="enter your email*";
        return false
    }
    else if(document.formfill.password.value==""){
        document.getElementById("result").innerHTML="enter your password*";
        return false
    }
    else if(document.formfill.password.value.length<6){
        document.getElementById("result").innerHTML="kata sandi harus berupa angka*";
        return false
    }
    else if(document.formfill.cpassword.value==""){
        document.getElementById("result").innerHTML="masukan konfirmasi kata sandi*";
        return false
    }
    else if(document.formfill.cpassword.value !== document.formfill.password.value){
        document.getElementById("result").innerHTML="kata sandi tidak masuk*";
        return false
    }
    else if(document.formfill.cpassword.value == document.formfill.cpassword.value){
        popup.classList.add("open-slide")
        return false
    }
          
}

let popup = document.getElementById('popup');
