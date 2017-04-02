function setURL(url) {
    document.getElementById('activeWindow').src = url;
    scroll(0, 0);
}
function setURLFromInner(url) {
    myVar = window.location.href;
    window.location.href = url;
    scroll(0, 0);
}
function setNewURLFromInner(url) {
    window.open(url);
    scroll(0, 0);
}




function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["phone"].value;

    if (x == null || x == "") {
        alert("Please fill out your email.");
        return false;
    }
    else if (y == null || y == "") {
        alert("Please fill out your phone number.");
        return false;
    }
    else
        return true;
    
}
