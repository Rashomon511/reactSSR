
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getHomeList } from './store/action';

class Home extends Component {
    // 在服务器端不执行
    componentDidMount() {
        //判断当前的数据是否已经从服务端获取
        //要知道，如果是首次渲染的时候就渲染了这个组件，则不会重复发请求
        //若首次渲染页面的时候未将这个组件渲染出来，则一定要执行异步请求的代码
        //这两种情况对于同一组件是都是有可能发生的
        if (!this.props.list.length) {
            this.props.getHomeList()
        }
    }
    render() {
        const { name, list } = this.props;
        return (
            <div>
                <Header />
                <div> {name}</div>
                {
                    list.map((item, index) => {
                        return <div key={index}>ss</div>
                    })
                }
                <button onClick={() => { alert('click') }}>click</button>
            </div>
        )
    }
}

Home.loadData = (store) => {
    // 这个函数负责在服务器端渲染之前把这个路由需要端数据提前加载好
    return store.dispatch(getHomeList())
}

const mapStateToProps = state => ({
    name: state.home.name,
    list: state.home.newList
})

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);