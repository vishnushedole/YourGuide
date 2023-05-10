const express = require('express');
const db = require('../utils/db.js')
module.exports = class College{
    constructor()
    {

    }
    static getColleges()
    {
       return db.execute('select * from college_data;');
    }
    
}