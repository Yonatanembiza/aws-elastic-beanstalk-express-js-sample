const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is Yonatan - Trying Git, AWS CodeBuild, AWS CodePipeline, AWS Elastic Beanstalk Service '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
