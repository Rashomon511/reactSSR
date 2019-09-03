
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { getHomeList } from './store/action';

class Home extends Component {
    // 在服务器端不执行
    componentDidMount(){
        this.props.getHomeList()
    }
    render (){
        const {name, list} = this.props;
        console.log(list)
        return (
            <div>
                <Header/>
                <div> {name}</div>
                {
                    list.map((item, index) => {
                        return <div key={index}>ss</div>
                    })
                }
                <button onClick={() => {alert('click')}}>click</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    name: state.home.name,
    list: state.home.newList
})

const mapDispatchToProps = dispatch => ({
    getHomeList(){
        dispatch(getHomeList())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);