const express = require('express');

const app = express();

// Base Routes
app.use('/', require('./routes/index'));

// User Routes
app.use('/', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});