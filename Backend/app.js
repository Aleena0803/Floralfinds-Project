// Installation of express and mongoose
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

// Initialization
const app=express();
const port=3000;

// Connection to database and assinging to a connection variable db
mongoose.connect('mongodb+srv://aleena21ubc210:aleena123@cluster0.op8qmif.mongodb.net/FloralFinds?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', () => {
    console.log('MongoDB Connected Successfully');
});

// Enable CORS
const corsOptions = {
    origin: '*',
    credentials: true,
  };
  app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Serve the react app as build
app.use(express.static('build'));

// Handle the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.js')); 
  });
// Routes
// Route for login and signup
const authRoutes = require('./Routes/auth');
app.use('/api/auth', authRoutes);

// Route for adding products
const addProductRoutes = require('./Routes/addProuct');
app.use('/api/addProduct', addProductRoutes);

//Route for getting all products
const viewProductRoutes = require('./Routes/viewProduct');
app.use('/api/viewproduct', viewProductRoutes)

// Starting the server
app.listen(port,()=>{
    console.log(`Sever is up and it is running on port ${port}`);
});


