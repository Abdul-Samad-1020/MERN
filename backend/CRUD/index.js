let express = require('express');
let app = express();

app.use(
    express.json()
);
app.get('/student-read',(req,res)=>{
    res.send("this is a student api");
})
app.post('/student-insert',async(req,res)=>{
    let mydb= await dbconnection();
    let studentCollection = mydb.collection("students");
    
 res.send("this is a student insert api");
}
);
app.get('/',(req,res)=>{
    res.send("this is the main api");
}
);

app.listen("800");
