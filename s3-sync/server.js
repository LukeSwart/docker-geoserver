// const S3 = new require('aws-sdk/clients/s3')();
// const aws = new require('aws-cli')();
const express = require('express');

const handleSync = require('./sync-handler');
require('dotenv').config()

const app = express();
// serve our static files:
app.use('/', express.static('public'))
// serve our api requests:
app.post('/', handleSync)
app.listen(3000, function() { console.log('listening') })

