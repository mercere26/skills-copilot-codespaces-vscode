// Create web server
app.get('/comments', function (req, res) {
    // Get the comments from the database
    var comments = [
        {}]; // Get comments from the database