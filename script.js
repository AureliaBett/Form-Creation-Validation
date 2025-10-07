document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form=feedbac");
    form.addEventListener("submit", function(event){
        event.preventDefault();

    const username =  document.getElementById('username').value.trim();
    const email =  document.getElementById('email').value.trim();
    const password =  document.getElementById('password').value.trim();

    let isValid = true;
    const messages =[ ];

    if (username.value.length < 3){
        isValid = false;
        messages.push = ('Your name should be more than three chracters long');
        return messages
    }

    if (!email.includes('@') || !email.includes('.')){
        isValid = false;
        messages.push("Please enter a valid email adress")
    }

    if (password.value.length < 8){
        isValid = false;
        messages.push("Password should be atleast 8 characters long")
    }
    feedbackDiv.style.display ="block";
    if (isValid = true){
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    
    }
    else{feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"

    }


    })
})
