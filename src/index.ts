import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { adminRouter } from './routes/admin';
import shopRouter from './routes/shop';

const app = express();

console.log(express.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

adminRouter.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
