import express from 'express';
import router from './Routes/Notification.js';
const app=express();
app.use(express.json());

app.use('/api/notification',router);
const PORT=process.env.PORT||5000

app.listen(PORT,()=>console.log('server started'))