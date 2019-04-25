/* eslint-disable react/no-unused-state */
import Taro, { Component } from '@tarojs/taro'

import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
// import { } from 'taro-ui'

import fetch from '../../../utils/fetch-data'

import './recommend.scss'

class Recommend extends Component {
  constructor(props){
    super(props)
    this.state = {
      homeList: {}
    }
    this.fetchData()
  }
  async fetchData() {
    let result = await fetch({
      url: `http://localhost:9000/homedata`
    })
    this.setState({
      homeList: result.data
    })
  }
  render() { 
    return(
      <View className='recommend-container'>
        {/* 轮播图部分 */}
        <View className='recommend-swiper'>
          <Swiper
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
          >
            {
              this.state.homeList.banners
                ? this.state.homeList.banners.map(
                  value => {
                    return (
                      <SwiperItem
                        key={value.ext.supplierID}
                      >
                        <Image
                          src={value.webpNewImageUrl}
                          style='width:100%;height:100%;'
                        ></Image>
                      </SwiperItem>
                    )
                  }
                )
                : null
            }
          </Swiper>
        </View>
        {/* 标签 */}
        <View className='recommend-tag'>
          {
            this.state.homeList.platformAssurance 
              ? this.state.homeList.platformAssurance.map(
                (value, index) => {
                  return (
                    <View
                      key={index}
                    >{value}</View>
                  )
                }
              )
              : null
          }
        </View>
        {/* 表格区域 */}
        <View className='operate_g'>
          <View className='operate-inner'>
            {
              this.state.homeList.operationNavigation
                ? this.state.homeList.operationNavigation.map(
                  value => {
                    return(
                      <View
                        key={value.title}
                      >
                        <Image
                          src={value.webpImageUrl}
                        >
                        </Image>
                        <Text>{value.title}</Text>
                      </View>
                    )
                  }
                )
                : null
            }
          </View>
        </View>
        {/* body */}
        <View className='section-cateList section-proList'>
          {/* 发现 */}
          <View className='narrowSingleline'>
            <Image
              src='https://bfs.biyao.com/group1/M00/AD/F4/rBACW1yTQlqAITQ8AACTzmSgeq0050.jpg'
            ></Image>
          </View>
          <View className='blockline' style='width:100%;height:20rpx;background:#F4F4F4;'></View>
          <View className='blockline' style='width:100%;height:10rpx;background:#ffffff;'></View>
          {/* doubleleft */}
          <View className='doubleleft'>
            <View className='doubleleft-inner'>
              <View className='doubleleft-left'>
                <View className='left-text'>
                  <Text className='escp mainTitle' style='color: #CC967A;'>春季风尚</Text>
                  <Text className='escp subtitle' style='color: #BBBBBB;'>春风十里我最懂你</Text>
                </View>
                <View className='left-img'>
                  <Image
                    src='https://bfs.biyao.com/group1/M00/AD/34/rBACW1yR19eAFU7eAACQLl9BpwM401.jpg'
                  ></Image>
                  <Image
                    src='https://bfs.biyao.com/group1/M00/AD/34/rBACW1yR19eAFU7eAACQLl9BpwM401.jpg'
                  ></Image>
                </View>
              </View>
              <View className='doubleleft-right'>
                <View className='left-text'>
                  <Text className='escp mainTitle' style='color:#CC7A96;'>足迹发现</Text>
                  <Text className='escp subtitle' style='color:#BBBBBB;'>在必要遇见品质生活</Text>
                </View>
                <View className='right-img'>
                  <Image
                    src='https://bfs.biyao.com/group1/M00/AD/34/rBACW1yR19eAFU7eAACQLl9BpwM401.jpg'
                  ></Image> 
                </View>
              </View>
            </View>
          </View>

          {/* triple */}

          <View className='triple'>
            <View className='triple-model'>
              <View className='left-text'>
                <Text className='escp mainTitle' style='color:#A37ACC;'>人气推荐</Text>
                <Text className='escp subtitle' style='color: #BBBBBB;'>精选品类好货</Text>
              </View>
              <View className='triple-img'>  
                <Image
                  src='https://bfs.biyao.com/group1/M00/1B/2C/rBACW1mfzGCAO5O8AAAvLOWIcyU741.jpg'
                ></Image>
              </View>
            </View>
            <View className='triple-model'>
              <View className='left-text'>
                <Text className='escp mainTitle' style='color:#A37ACC;'>必要小院</Text>
                <Text className='escp subtitle' style='color: #BBBBBB;'>甄选好物 为你推荐</Text>
              </View>
              <View className='triple-img'>  
                <Image
                  src='https://bfs.biyao.com/group1/M00/53/6A/rBACVFuOBuiAE5vnAAAw8mbtRHw813.jpg'
                ></Image>
              </View>
            </View>
            <View className='triple-model'>
              <View className='left-text'>
                <Text className='escp mainTitle' style='color:#A37ACC;'>人气推荐</Text>
                <Text className='escp subtitle' style='color: #BBBBBB;'>精选品类好货</Text>
              </View>
              <View className='triple-img'>  
                <Image
                  src='https://bfs.biyao.com/group1/M00/1B/2C/rBACW1mfzGCAO5O8AAAvLOWIcyU741.jpg'
                ></Image>
              </View>
            </View>
          </View>

          <View className='blockline' style='width:100%;height:20rpx;background:#F4F4F4;'></View>

          {/* titleline */}
          <View className='titleline'>
            <Text className='mainTitle' style='color:#4A4A4A;border-color:#4A4A4A'>大牌制造商</Text>
            <Text className='minTitle' style='color:#BF9E6B;'>WHOO后、欧舒丹等制造商直供</Text>
          </View>
        
          {/* doubleunfill */}
          <View className='doubleunfill'>
            <View className='doubleunfill-model'>
              <View className='left-text'>
                <Text className='escp mainTitle' style='color:#4A4A4A'>GUESS制造商</Text>
                <Text className='escp subtitle' style='color: #BBBBBB;'>男装</Text>
              </View>
              <Image
                src='https://bfs.biyao.com/group1/M00/A8/61/rBACVFyLBuKAcNO3AAC_1jGJJxQ226.jpg'
              ></Image>
            </View>
            <View className='doubleunfill-model'>
              <View className='left-text'>
                <Text className='escp mainTitle' style='color:#4A4A4A'>GUESS制造商</Text>
                <Text className='escp subtitle' style='color: #BBBBBB;'>男装</Text>
              </View>
              <Image
                src='https://bfs.biyao.com/group1/M00/A8/61/rBACVFyLBuKAcNO3AAC_1jGJJxQ226.jpg'
              ></Image>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Recommend