const { Router } = require("express");
const routes = new Router();
const User = require("../models/user");
require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
const cors = require("cors");