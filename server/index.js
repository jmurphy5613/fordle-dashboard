const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const port = 3001;
const db = require('./models');



const wordRouter = require('./routes/wordRouter');
app.use('/api/words', wordRouter);


db.sequelize.sync({ force: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

