const express = require('express');
const db = require('../utils/db.js')
module.exports = class schools{
    constructor()
    {

    }
    static getSchools()
    {
       return db.execute('select * from school_data;');
    }
    
}