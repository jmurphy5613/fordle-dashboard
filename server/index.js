const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const port = 3001;
const db = require('./models');



const wordRouter = require('./routes/wordRouter');
app.use('/words', wordRouter);


db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running`);
    });
});

