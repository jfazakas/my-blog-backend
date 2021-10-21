import express from 'express';
import {MongoClient} from 'mongodb';

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Example code
// app.get('/hello', (req, res) => res.send('Hello'));
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

const withDb = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');

        await operations(db);

        client.close();
    } catch(error) {
        res.status(500).json({message: 'Failed!', error});
    }
};

app.get('/api/articles/:name', async (req, res) => {
    withDb(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection("articles").findOne({name: articleName});
       
        res.status(200).json(articleInfo);
    }, res);
});

app.post('/api/articles/:name/upvote', async (req, res) => {
    withDb(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({name: articleName});

        await db.collection('articles').updateOne({name: articleName}, {
            '$set': {
                upvotes: articleInfo.upvotes + 1
            }
        });
        
        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});
        
        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.post('/api/articles/:name/add-comment', async (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDb(async (db) => {
        const articleInfo = await db.collection('articles').findOne({name: articleName});

        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text})
            }
        });

        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});

        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.listen(8000, () => console.log('Listening on port 8000'));