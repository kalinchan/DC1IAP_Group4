function validateForm() {
    let countryCallingCode = callingCode();
    if(!validPhoneNumberLength()) {
        alert("Your phone number isn't a valid length.")
    }
    if (!validPhoneNumberCallingCode(countryCallingCode)) {
        alert("Your phone number doesn't match the country you're based in.")
    }
    alert("Thank you for registering!")
}

function otherSelected() {
    let hearAboutUs = document.getElementById("register-interest").elements["hear-about-us-input"];
    if (hearAboutUs.value === "Other") {
        //If other is selected reveal additional input box
        document.getElementById("hear-about-us-other").hidden = false;
        document.getElementById("hear-about-us-other").setAttribute('required', "true")
        document.getElementById("hear-about-us-other-label").classList.remove('hide');
    } else {
        document.getElementById("hear-about-us-other").hidden = true;
        document.getElementById("hear-about-us-other").removeAttribute('required')
        document.getElementById("hear-about-us-other-label").classList.add('hide');
    }
}

function contactSelected() {
    let contactMe = document.getElementById("register-interest").elements["contact-me"];
    if(contactMe.checked === true) {
        //If allowing us to contact them get a phone number
        document.getElementById("phone").hidden = false
        document.getElementById("phone").setAttribute('required', "true")
        document.getElementById("phone-label").classList.remove('hide');
    } else {
        document.getElementById("phone").hidden = true
        document.getElementById("phone").removeAttribute('required')
        document.getElementById("phone-label").classList.add('hide')
    }
}

function callingCode() {
    let country = document.getElementById("register-interest").elements["country"];
    if(country.value === "UK") {
        return "+44"
    }
    if(country.value === "ROI") {
        return "+353"
    }
}
function validPhoneNumberLength() {
    let phoneNo = document.getElementById("register-interest").elements["phone"]
    return phoneNo.value.length === 11;

}
function validPhoneNumberCallingCode (callingCode) {
    let phoneNo = document.getElementById("register-interest").elements["phone"]
    return phoneNo.value.startsWith(callingCode);

}
