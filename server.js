const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require ('./routes/htmlRoutes');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false });

app.listen(PORT);