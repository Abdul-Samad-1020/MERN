const express= require('express');
const app = express();
const morgan = require('morgan');

// Middleware to log HTTP requests  
  app.use(morgan('dev'));
  app.use(express.json());
  app.set("view engine",'ejs');

  app.get('/', (req,res)=>{
    res.render('index');
  });

  app.post('/process', (req,res)=>{
    console.log(req.body);
    res.send('Form submitted successfully');
  });
  
app.get('/', (req,res,next)=>{
    console.log("this is middleware");
    return next();
})

  app.listen(3000, ()=> console.log('Server started on port 3000'));
