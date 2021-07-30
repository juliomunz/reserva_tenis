// const express = require('express');
// const app = express();
// const port = 8000; 
// const cors = require('cors');
// //const cookieParser = require('cookie-parser');

// //require('dotenv').config()
// //process.env
// //console.log("🚀 ~ file: server.js ~ line 9 ~ process.env", process.env.SECRET_KEY)

// require('./server/config/mongoose.config');

// //app.use(cookieParser())
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// app.use(express.json(), express.urlencoded({extended: true}));

// //const allMyTweetsRoutes = require('./server/routes/tweet.routes');
// const userRoutes = require('./server/routes/user.routes');
// userRoutes(app);
// //allMyTweetsRoutes(app);

// app.listen(port, () => console.log(`Ey ninjas the server is running in the port ${port}`))

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('./server/config/mongoose.config.js');

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/reserva.routes')(app);
app.use('/api/user', require('./server/routes/user.routes'));

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});