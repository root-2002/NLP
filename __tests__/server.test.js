const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.post('/api', (req, res) => {
    const { text } = req.body;
    res.json({
        polarity: 'positive',
        subjectivity: 'subjective',
        text: text,
    });
});

describe('POST /api', () => {
    it('responds with JSON containing polarity, subjectivity, and text', async () => {
        const response = await request(app)
            .post('/api')
            .send({ text: 'Sample text' })
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toHaveProperty('polarity');
        expect(response.body).toHaveProperty('subjectivity');
        expect(response.body).toHaveProperty('text');
    });
});
