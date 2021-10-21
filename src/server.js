import express from 'express';

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments: []
    },
    'learn-extjs': {
        upvotes: 0,
        comments: []
    },
    'learn-node': {
        upvotes: 0,
        comments: []
    }
};
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// app.get('/hello', (req, res) => res.send('Hello'));
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`Article "${articleName}" now has ${articlesInfo[articleName].upvotes} upvotes!`);
});

app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].comments.push({ username, text });
    res.status(200).send(articlesInfo[articleName]);
});

app.listen(8000, () => console.log('Listening on port 8000'));