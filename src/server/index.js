import express from 'express';
import { render } from './utils';

const app = express();
app.use(express.static('public')) // 到服务器文件夹下pulic下面找js文件


app.get('*', function(req, res){
    res.send(render(req))
})

const server = app.listen(3000, ()=> {
    console.log('listen on 3000!');
  })
