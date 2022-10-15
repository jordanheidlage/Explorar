const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Book.js
const locationSchema = require('./Locations');

module.exports = User;