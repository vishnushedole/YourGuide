const db = require('../utils/db.js');
module.exports  = class User{
    constructor()
    {

    }
    static Login(req)
    {
        const username = req.body.username;
        const pass = req.body.pass;
        console.log(username)
        console.log(pass)
        return db.execute(`select * from users where email_id = '${username}';`);
    }
}