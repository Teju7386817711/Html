!DOCTYPE html>

<html>

<body>

<h2>JavaScript Prompt Example</h2>

<button onclick="myFunction()">Please Try for Prompt message</button>

<p id="Prompt Example"></p>

<script>

function myFunction() {

  let text;

  let user = prompt("Please enter your name:", "Your First Name");

  if (user == null || user == "") {

    text = "User cancelled the prompt.";

  } else {

    text = "Hello " + person + "! How are you?";

  }

  document.getElementById("Prompt Example").innerHTML = text;

}

</script>

</body>

</html>