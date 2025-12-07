const express = require('express')
const logger = require('morgan');


const app = express();

const subjectRouter = require('./routes/subjectRouter.js')

app.listen(8080,()=>{
    console.log('We are runing at Localhost:3000');
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/a-010/api",subjectRouter)

module.exports = app;