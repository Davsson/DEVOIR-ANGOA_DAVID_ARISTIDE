const express = require('express');
const userRoutes = require('./routes/userRoutes');
const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
app.use('/user',userRoutes);
app.use('/contacts',contactsRoutes);
const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log('server is running on port ${PORT}');
});