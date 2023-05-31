function generatePassword(length, includeSpecial) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    //if user presses the button
    if (includeSpecial) {
      charset += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
    }
    //clears array
    var password = "";
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    return password;
  }
  
  function generateAndInsertPassword() {
    var passwordLength = document.getElementById("length").value;
    var includeSpecial = document.getElementById("includeSpecial").checked;
    //generates password including the top variables using the params of the length and special characters
    var generatedPassword = generatePassword(passwordLength, includeSpecial);
    //inserts the password into the html
    document.getElementById("password").value = generatedPassword;
  }