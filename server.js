const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();

const router = jsonServer.router('./db/db.json');