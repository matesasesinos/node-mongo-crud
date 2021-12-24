import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

//import routes
import indexRouter from './routes/index.route';

const app = express();

//Templates
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
}));

app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use(indexRouter);

// static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;