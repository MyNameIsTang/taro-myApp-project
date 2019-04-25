import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
// import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

import Home from '../home/home'
import Recommend from '../recommend/recommend'
import Classify from '../classify/classify'
import Cart from '../cart/cart'
import Mine from '../mine/mine'


import mine from '../../assets/images/icon_03.jpg'
import home from '../../assets/images/icon_06.jpg'
import recom  from '../../assets/images/icon_08.jpg'
import classify from '../../assets/images/icon_10.jpg'
import cart from '../../assets/images/icon_12.jpg'

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
//   }))
  
class Index extends Component {
  config = {
    navigationBarTitleText: '必要商城'
  }
  state = {
    current: 0
  }

  handleClick(current) {
    this.setState({
      current
    })
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='wrapper'> 
        { this.state.current === 0 && <Home /> }
        { this.state.current === 1 && <Recommend /> }
        { this.state.current === 2 && <Classify /> }
        { this.state.current === 3 && <Cart /> }
        { this.state.current === 4 && <Mine /> }
        <AtTabBar
          tabList={[
            { title: '首页', image: home },
            { title: '推荐', image: recom },
            { title: '分类', image: classify },
            { title: '购物车', image: cart },
            { title: '我的', image: mine }
          ]}
          fixed
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          selectedColor='#7f4395'
        />
        
      </View>
    )
  }
}

export default Index
