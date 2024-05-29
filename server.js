import express from 'express';
import router from './Routes/Notification.js';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/notification',router);
const PORT=process.env.PORT||5000

app.listen(PORT,()=>console.log('server started on port 5000',PORT))
