const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));;
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Set tatic folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes 
app.use('/api/members', require('./route/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));










