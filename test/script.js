// Open a connection to the IndexedDB database
var db;
var request = indexedDB.open("DBLogin", 1);

// Create or update the database schema
request.onupgradeneeded = function(event) {
  db = event.target.result;

  // Create an object store named "tblLogin" with auto-incrementing key
  var objectStore = db.createObjectStore("tblLogin", { keyPath: "id", autoIncrement: true });

  // Define the properties for the object store
  objectStore.createIndex("username", "username", { unique: true });
  objectStore.createIndex("password", "password", { unique: false });
};

// Handle the database open success
request.onsuccess = function(event) {
  db = event.target.result;

  // Add a user and password to the "tblLogin" object store when the button is clicked
  document.getElementById("form-button").addEventListener("click", function() {
    var username = document.getElementById("user-name").value;
    var password = document.getElementById("password").value;
    
    if (username && password) {
      addUserPassword(username, password);
    } else {
      alert("Please enter both username and password.");
    }
  });
};

// Handle errors
request.onerror = function(event) {
  console.error("Error opening DBLogin:", event.target.error);
};

// Define a function to add a user and password to the object store
function addUserPassword(username, password) {
  var transaction = db.transaction(["tblLogin"], "readwrite");
  var objectStore = transaction.objectStore("tblLogin");

  // Create an object representing the user and password
  var userPassword = {
    username: username,
    password: password
  };

  // Add the object to the object store
  var request = objectStore.add(userPassword);

  request.onsuccess = function(event) {
    console.log("User and password added to tblLogin");
    // Clear input fields after adding the user
    document.getElementById("user-name").value = "";
    document.getElementById("password").value = "";
  };

  request.onerror = function(event) {
    console.error("Error adding user and password:", event.target.error);
  };
}

function validRegister() {
  if (document.getElementById('user-name').value == "" || document.getElementById('password').value == "") {
    document.getElementById('display').innerText = 'Login failed!';
  } else {
    document.getElementById('display').innerText = 'Login successful!';
  }
}
