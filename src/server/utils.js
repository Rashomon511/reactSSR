import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';


export const render = (req, store, Routes) => {
    // 如果在这里拿到异步数据并填充到store中
    // store里面到底填充什么，我们不知道，需要更具路由路径进行判断往store添加数据
    // 如果用户访问/路径，我们就拿home组件到数据，如果访问login，则拿login组件到数据

    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {Routes.map(route => (
                        <Route {...route} />
                    ))}
                </div>
            </StaticRouter>
        </Provider>
    ))
    return `
    <html>
        <head>
           <title>react-ssr</title>
        </head>
        <body>
        <div id="root">${content}</div>
        <script>
            window.context = {
                state: ${JSON.stringify(store.getState())}
            }
        </script>
        <script src='/index.js'></script>
        </body>
    </html>`
}