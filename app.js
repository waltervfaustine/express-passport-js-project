const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

// Base Routes
app.use('/', require('./routes/index'));

// User Routes
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});