// Function to handle sign-up form submission
function handleSignup(event) {
    event.preventDefault();

    // Get input values
   const username = document.getElementById("signupUsername").value;
   const email = document.getElementById("signupEmail").value;
   const password = document.getElementById("signupPassword").value;

    // You should implement the backend here to store the user data
    // For this example, we'll just show an alert message with the collected data
    alert(`Sign Up Successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);

    // You can also redirect the user to a new page after successful sign-up
}

function postSignups(){

    let newObject={
       name:document.getElementById("signupUsername").value,
       email:document.getElementById("signupEmail").value,
       password:document.getElementById("signupPassword").value
   }

    fetch("http://localhost:3000/signups", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newObject)
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
}

let form = document.getElementById("signupForm")
form.addEventListener("submit",function(event){
    event.preventDefault()
    postSignups()
    form.reset() 
})

function updateSignups(id){
    let updatedObject = {
        signupUsername:"brian",
        signupEmail:"briankiplangat895@gmail.com",
        signupPassword:12345678
    }

    fetch(`http://localhost:3000/signups/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(updatedObject)
    })
    .then(response=>console.log(response.status))
    .catch(error=>console.log(error))
}

let updateButton = document.getElementById("updateButton")
updateButton.addEventListener("click",function(){
    updateSignups()
})

//the object this time only has one key-value pair
function deletesignups(id){
    fetch(`http://localhost:3000/signups/${id}`,{
        method:"DELETE"
    })
    .then(response=>console.log(response.status))
    .catch(error=>console.log(error))
}

let deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener("click", function(){
    deletesignups()
    
} )