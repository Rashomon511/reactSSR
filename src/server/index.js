import express from 'express';
import { matchRoutes } from "react-router-config";
import proxy from 'express-http-proxy';
import { render } from './utils';
import { getStore } from '../store';
import Routes from '../Routes';

const app = express();
app.use(express.static('public')) // 到服务器文件夹下pulic下面找js文件

app.use('/api',proxy('http://47.95.113.63', {
    proxyReqPathResolver: function (req) {
      return '/ssr/api' + req.url
    }
  }));

app.get('*', function(req, res){
    const store = getStore()
    const matchedRoutes = matchRoutes(Routes, req.path)
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    })
    Promise.all(promises).then(() => {
        res.send(render(req, store, Routes))
    })
})

const server = app.listen(3000, ()=> {
    console.log('listen on 3000!');
  })
