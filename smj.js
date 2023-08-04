// this a jsquery code creating new clases thst aligns the text to the center
$(document).ready(function(){
    $('div.jumbotro').addClass("text-center")
    $('div.jumbotro').addClass("text-white")
    $('div.about').addClass("text-center")
    $('div.services').addClass("text-center text-white mt-5")
    $('div.we-do').addClass("text-center")
    $('div.we-do.contain').addClass("justify-content-center")
    $('.port').addClass("text-center")
    $('.what').on('click',function(){
        $('.contain').toggle(2000)
    })
    $('.designing1').click(function(){
        $('.des').toggle(100)
        $('.design').toggle(100)
    })
    $('.designing2').click(function(){
        $('.dev').toggle(100)
        $('.develop').toggle(100)
    })
    $('.designing3').click(function(){
        $('.product').toggle(100)
        $('.manage').toggle(100)
        })
});
//  ----verivication----

function verify(){
    let name = document.getElementById('idname').value;
    let email = document.getElementById('idemail').value;
    if(name==''){
        alert('input valid name');
        return false
    }
    if(email==''){
        alert('input valid email');
        return false
    }
alert('welcome '+name)
alert('email is noted')
}

function on(){
    document.getElementById('overlay').style.display="block";
}
function off(){
    document.getElementById('overlay').style.display="none";
}
function hove(){
    document.getElementById('overla').style.display="block";
}
function nohove(){
    document.getElementById('overla').style.display="none";
}
function hov(){
    document.getElementById('overl').style.display="block";
}
function nohov(){
    document.getElementById('overl').style.display="none";
}
function ho(){
    document.getElementById('overlay').style.display="block";
}
function noho(){
    document.getElementById('overlay').style.display="none";
}
function hover1(){
    document.getElementById('over').style.display="block";
}
function nohover2(){
    document.getElementById('over').style.display="none";
}
function carry1(){
    document.getElementById('carry').style.display="block";
}
function carry2(){
    document.getElementById('carry').style.display="none";
}
function carr1(){
    document.getElementById('carr').style.display="block";
}
function carr2(){
    document.getElementById('carr').style.display="none";
}
function car1(){
    document.getElementById('car').style.display="block";
}
function car2(){
    document.getElementById('car').style.display="none";
}
function ca1(){
    document.getElementById('ca').style.display="block";
}
function ca2(){
    document.getElementById('ca').style.display="none";
}

// Add the Login and Signup buttons dynamically using JavaScript
window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');

    // Sample JSON data representing login and signup buttons
    const buttonsData = [
        { text: 'Login', url: 'login.html' },
        { text: 'Signup', url: 'signup.html' },
    ];

    // Create and add the buttons to the navigation bar
    buttonsData.forEach(button => {
        const anchor = document.createElement('a');
        anchor.textContent = button.text;
        anchor.href = button.url;
        navLinks.appendChild(anchor);
    });
});

// Example of fetching data from the JSON file
fetch('http://localhost:3000/signups')
  .then(response => response.json())
  .then(data => {
    // Use the fetched data here
    console.log(data); // This will log the data object containing the JSON data
  })
  .catch(error => {
    // Handle any errors that occur during the fetch process
    console.error('Error fetching data:', error);
  });
  // Function to handle login form submission
function handleLogin(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // You should implement the backend here to check the login credentials and respond accordingly
    // For this example, we'll just show an alert message based on a hardcoded username and password
        alert(`Sign In Successful!\nUsername: ${username}\nPassword: ${password}`);
         
        alert("Invalid credentials. Please try again.");
    }

    //You can also redirect the user to a new page after successful login