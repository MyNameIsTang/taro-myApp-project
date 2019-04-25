import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'

import { connect } from '@tarojs/redux'

import Recommend from './recommend/recommend'

import './home.scss'

import search from '../../assets/images/search.png'
import down from '../../assets/images/down.png'
import { getHomeDataAsync } from '../../actions/home';



const mapState = (state) => {
  return {
    homeList: state.home.homeList
  }
}
const mapDispatch = (dispatch) => ({
  getHomeData(){ 
    dispatch(getHomeDataAsync())
  }
})

@connect(mapState, mapDispatch)


class Home extends Component{
  constructor (props) {
    super(props)
    this.state = {
      current: 0,
    }
    this.fetchData()
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  componentWillReceiveProps(nextProps) { 
    console.log(nextProps,11)
  }
  fetchData() {
    // eslint-disable-next-line taro/this-props-function
    this.props.getHomeData()
  }
  makeTabs() {
    let oneLevelCategoryList = this.props.homeList || []
    return oneLevelCategoryList.map((value) => {
      return {
        title: value.categoryName
      }
    })
  }
  render() {
    // const tabList = [{ title: '推荐' }, { title: '咖啡' }, { title: '正餐' }, { title: '饮食' }, { title: '男装' }, { title: '女装' }, { title: '眼镜' }, { title: '女装' }]
    return (
      <View className='home-container'>
        <View className='home-header'>
          <View className='head-search'> 
            <Image
              src={search}
              mode='aspectFit'
            ></Image>
            <Text>请输入您想要的商品</Text>
          </View>
          <View className='head-nav'> 
            <View className='head-nav-inner'>
              <AtTabs
                current={this.state.current}
                scroll
                animated
                tabList={[
                  { title: '推荐' },
                  { title: '咖啡' },
                  { title: '正餐' },
                  { title: '饮食' },
                  { title: '男装' },
                  { title: '女装' },
                  { title: '眼镜' },
                  { title: '内衣配饰' }
                ]}
                onClick={this.handleClick.bind(this)}
              >
                <ScrollView
                  className='scrollview'
                  scrollY
                  scrollWithAnimation
                  scrollTop='0'
                  style='height: 934rpx;'
                  lowerThreshold='20'
                  upperThreshold='20'
                >
                  <AtTabsPane current={this.state.current} index={0}>
                    <View style='width:100%;'>
                      <Recommend></Recommend>
                    </View> 
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={1}>
                    <View style='width:100%;height:522px;'>标签页二的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={2}>
                    <View style='width:100%;height:522px;'>标签页三的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={3}>
                    <View style='width:100%;height:522px;'>标签页四的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={4}>
                    <View style='width:100%;height:522px;'>标签页五的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={5}>
                    <View style='width:100%;height:522px;'>标签页六的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={6}>
                    <View style='width:100%;height:522px;'>标签页七的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={7}>
                    <View style='width:100%;height:522px;'>标签页八的内容</View>
                  </AtTabsPane>
                </ScrollView>
                
              </AtTabs>
              <View className='head-nav-img'>
                <Image
                  src={down}
                  mode='aspectFit'
                ></Image> 
              </View>
            </View>
            <View className='category-box none'></View>
          </View>
        </View>
      </View>
    )
  }
}

export default Home