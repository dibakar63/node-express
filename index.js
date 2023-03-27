import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './users.js'


const app=express();
const PORT=5000;

app.use(bodyParser.json());
app.use('/users',usersRoutes);
app.get('/',(req,res)=>{
    res.send('Hello Dibakar')
});
app.listen(PORT,()=>console.log(`Server is running on port: http://localhost:${PORT}`))