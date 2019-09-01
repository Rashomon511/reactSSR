import express from 'express';
import React from 'react';
import Home from './containers/Home';
import { renderToString } from 'react-dom/server';

const app = express();
const content = renderToString(<Home/>)


app.get('/', function(req, res){
    res.send(`
        <html>
            <head>
               <title>ssr</title>
            </head>
            <body>
            ${content}
            </body>
        </html>
    `)
})

const server = app.listen(3000)
