var details = JSON.parse(localStorage.getItem("studentData")) || [];

var loginSection = document.getElementById("login-section");
var createSection = document.getElementById("create-pass-section");

var loginBtn = document.getElementById("login-page");
var createBtn = document.getElementById("create-pass-page");

function showLogin() {
    loginSection.style.display = "block";
    createSection.style.display = "none";

    loginBtn.classList.add("active-tab");
    createBtn.classList.remove("active-tab");
}

function showCreate() {
    loginSection.style.display = "none";
    createSection.style.display = "block";

    createBtn.classList.add("active-tab");
    loginBtn.classList.remove("active-tab");
}

function handleSubmit() {
    var getCNIC = document.getElementById('cnic-input-2').value;
    var getPassword = document.getElementById('pass-input-2').value;
    var getDOB = document.getElementById('DOB-input').value;
    var submitValid = false;

    if (getCNIC === '' || getPassword === '' || getDOB === '') {
        alert('CNIC Password and Date of Birth is must required for submit !');
    } else {

        if (!isNaN(getCNIC) && getCNIC.length === 13) {

            if (getPassword.length < 7) {
                alert('Password must be at least 7 characters long !');
            } else {

                for (var i = 0; i < details.length; i++) {
                    if (getCNIC === details[i].CNIC) {

                        submitValid = true;
                        break;
                    }
                }

                if (submitValid) {
                    alert('User Already Registered !');
                } else {
                    details.push({
                        CNIC: getCNIC,
                        DOB: getDOB,
                        PASS: getPassword
                    });

                    localStorage.setItem("studentData", JSON.stringify(details));

                    document.getElementById('cnic-input-2').value = '';
                    document.getElementById('pass-input-2').value = '';
                    document.getElementById('DOB-input').value = '';

                    console.log(details);
                    alert("Data submitted successfully");

                    showLogin();
                }
            }

        } else {
            alert("CNIC must contain exactly 13 numbers !");
        }
    }
}

function handleLogin() {
    var getCNIC = document.getElementById('cnic-input-1').value;
    var getPassword = document.getElementById('pass-input-1').value;
    var loginValid = false;

    if (getCNIC === '' || getPassword === '') {
        alert('CNIC and Password both required for login !');
    } else {

        for (var i = 0; i < details.length; i++) {
            if (getCNIC === details[i].CNIC && getPassword === details[i].PASS) {

                loginValid = true;
                break;
            }
        }

        if (loginValid) {
            alert('Login Succssesfull');

            document.getElementById('pass-input-1').value = '';
            document.getElementById('cnic-input-1').value = '';

            afterLogin();
        } else {
            alert('Please enter valid credintials !');

            document.getElementById('cnic-input-1').value = '';
            document.getElementById('pass-input-1').value = '';
        }
    }
}

function afterLogin() {
    var bothForms = document.getElementById('both-forms-section').style.display = 'none';
    var landingPage = document.getElementById('landing-page-container').style.display = 'block';
}

function handleLogout() {
    var landingPage = document.getElementById('landing-page-container').style.display = 'none';
    var bothForms = document.getElementById('both-forms-section').style.display = 'block';
}