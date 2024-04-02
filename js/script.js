// Get the form and input elements
const form = document.querySelector(".bottom-box form");
const inputs = document.querySelectorAll(".bottom-box input");

// form submission
form.addEventListener("submit", function (e) {
    // Prevent default form submission behavior
    e.preventDefault();
    inputs.forEach((input) => {
        // console.log(input.value);
        if (!input.value) {
            input.parentElement.classList.add('error');
        } else {
            input.parentElement.classList.remove('error');
            if (input.type == 'email') {
                if (validateEmail(input.value)) {
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            }
        }
    })
});

// Function to validate email format
function validateEmail(email) {
    //regular expression for basic email validation
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}