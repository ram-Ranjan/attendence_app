const express = require('express');
const app = express();
const path = require('path');
const attendanceRoutes = require('./routes/attendanceRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use('/', attendanceRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});