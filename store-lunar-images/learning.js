const express = require('express');     // required entire express module into express variable
const app = express();      // create application

// middleware functions (need these functions in order for data to be present)
// if the functions aren't called, the post request data would not be created
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();     // invoke the next middleware function
});

const mockDatabase = [
    { name: 'Rich', age: 23 },
    { name: 'Joe', age: 22 },
    { name: 'Salman', age: 21 },
    { name: 'Jesus', age: 33 }
]

const posts = [
    { title: 'My favorite games' },
    { title: 'My favorite language' }
];

// first parameter of get request is the route path
app.get('/', (req, res) => {
    res.send('Hello World');   // send() method sends a body back to the client
});     // making a get request (route method)

app.get('/mockDatabase', (req, res) => {
    res.status(200).send(mockDatabase);
});

app.get('/mockDatabase/:name', (req, res) => {
    const { name } = req.params;
    const user = mockDatabase.find((user) => user.name === name);

    if(user)
        res.status(200).send(user);
    else
        res.status(404).send('Not Found');
});

app.post('/mockDatabase', (req, res) => {   
    const user = req.body;
    mockDatabase.push(user);
    res.status(201).send('Created user!');
});

app.get('/posts', (req, res) => {
    console.log(req.query);
    const { title } = req.query;
    
    if(title)
    {
        const post = posts.find((post) => post.title === title);
        
        if(post) 
            res.status(200).send(post);
        else    
            res.status(404).send('Not Found');
    }

    res.status(200).send(posts);
});

function validateAuthenticationToken(req, res, next) 
{
    console.log('Inside Validate Authorization Token');
    const { authorization } = req.headers;

    if(authorization && authorization === '123')    
        next();
    else
        res.status(403).send({ msg: 'Forbidden. Incorrect Credentials' });
}

app.post('posts', validateAuthenticationToken, (req, res) => {
    const post = req.body;
    posts.push(post);
    res.status(201).send(post);

});

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});