const firebaseConfig = {
    apiKey: "AIzaSyC802qB8zu_KxfHD7TRcbGnFw-ErVQwNQs",
    authDomain: "portfolio-c4ead.firebaseapp.com",
    databaseURL: "https://portfolio-c4ead-default-rtdb.firebaseio.com",
    projectId: "portfolio-c4ead",
    storageBucket: "portfolio-c4ead.appspot.com",
    messagingSenderId: "366197497047",
    appId: "1:366197497047:web:0b0ae9b2777af081676492"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

var commentsRef = database.ref('comments/');

// Handle form submission
document.getElementById('touch').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var comment = document.querySelector('textarea[name="text"]').value;

    // Push new comment to the database
    commentsRef.push({
        name: name,
        email: email,
        comment: comment,
        timestamp: Date.now() // Add a timestamp
    }).then(function() {
        alert('Comment submitted successfully!');
    }).catch(function(error) {
        console.error('Error submitting comment:', error);
    });

    // Clear the form after submission
    document.getElementById('touch').reset();
});


