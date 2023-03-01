const { Router } = require('express');
const db = require('../database');
const router = Router();

router.use((req, res, next) => {
    console.log('Request made to /USERS ROUTE');
    next();
});

router.get('/', (req, res) => {
    res.send(200);
});

router.get('/posts', (req, res) => {
    res.json({ route: 'Posts' });
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
    
    if(username && password)
    {
        console.log(username, password);
        // try
        // {
        //     db.promise().query(`insert into LunarImage values('${username}, ${password}')`);
        //     res.status(201);
        // }
        // catch(error)
        // {
        //     console.log(error);
        // }
    }
})

module.exports = router;