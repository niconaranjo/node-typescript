import path from 'path';
import express from 'express';

import { adminRouter } from './routes/admin';
import shopRouter from './routes/shop';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((_, res) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found', path: ''});
});

app.listen(3000);
