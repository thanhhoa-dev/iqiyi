import {
  View, Text, SafeAreaView, TouchableOpacity, Image,
  FlatList,
  ScrollView,
  PanResponder,
  ImageBackground,
  Animated
} from 'react-native'
import React, { useState, useRef } from 'react'
import { HomeStyles } from '../styles/HomeStyles'

const Home = () => {
  const [bg_header, setbg_header] = useState('rgba(0, 0, 0, 0)')
  const [indexCategory, setIndexCategory] = useState(1);
  const flatListRef = useRef(null);
  const renderTitleCategory = val => {
    const { id, nameTitle } = val.item;
    const onSelectItem = () => {
      setIndexCategory(id);
      if (id >= 4){
        flatListRef.current.scrollToEnd({ animated: true });
      }else{
        flatListRef.current.scrollToIndex({ index: 0, animated: true });
      }
    };

    return (
      <TouchableOpacity onPress={onSelectItem}>
        <Text
          style={
            id.toString() == indexCategory.toString()
              ? [HomeStyles.title, HomeStyles.titile_focus]
              : [HomeStyles.title, HomeStyles.title_unfocus]
          }>
          {nameTitle}
        </Text>
      </TouchableOpacity>
    );
  };
  const scrollViewRef = useRef(null);
  const [swipeDetected, setSwipeDetected] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx } = gestureState;

      // Xác định hướng vuốt (swipe) nếu chưa được phát hiện
      if (!swipeDetected) {
        if (dx > 0 && indexCategory > 1) {
          // Vuốt sang phải
          if(indexCategory == 4){
            flatListRef.current.scrollToIndex({ index: 0, animated: true });
          }
          setIndexCategory(indexCategory - 1);
        } else if (dx < 0 && indexCategory < 6) {
          // Vuốt sang trái
          if (indexCategory == 3){
            flatListRef.current.scrollToEnd({ animated: true });
          }
          setIndexCategory(indexCategory + 1);
          
        }

        // Đặt trạng thái đã phát hiện vuốt
        setSwipeDetected(true);
      }
    },
    onPanResponderRelease: () => {
      // Đặt lại trạng thái khi người dùng đã thả tay
      setSwipeDetected(false);
    },
  });

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    const new_bg_header = 'rgba(0, 0, 0, ' + y / 25 + ')';
    setbg_header(new_bg_header);
  };

  return (
    <SafeAreaView style={HomeStyles.container}>
      <ScrollView
        ref={scrollViewRef}
        {...panResponder.panHandlers}
        horizontal={false}
        onScroll={handleScroll}
      >
        <View>
        
          <ImageBackground source={require('../../../media/images/hoaAvatar.jpg')}>
            <View style={{ backgroundColor: bg_header}}>
              <View style={HomeStyles.header}>
                <View style={HomeStyles.logo}>
                  <Text style={HomeStyles.iqiyi}>iQIYI</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    //go to Search.js
                  }}
                >
                  <View style={HomeStyles.viewSearch}>
                    <Text style={HomeStyles.txt_placeholder_input} ellipsizeMode="tail" numberOfLines={1}>Tiên Kiếm Kỳ Hiệp 4</Text>
                    <View style={HomeStyles.oneline_horiz}></View>
                    <Image source={require('../../../media/images/ic_search_white.png')} style={HomeStyles.img_search}></Image>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={HomeStyles.btnVip}>
                    <Image source={require('../../../media/images/ic_vip.png')} />
                    <Text style={HomeStyles.txt_vip}>VIP</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={HomeStyles.categories}>
                <FlatList
                  ref={flatListRef}
                  data={DataCategory}
                  renderItem={renderTitleCategory}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </View>
            <View style={HomeStyles.slideHot}></View>
          </ImageBackground>
          
        </View>

        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <Text>abc</Text>
        <View style={{backgroundColor: 'pink', height : 800, width : '100%'}}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
var DataCategory = [
  {
    id: 1,
    nameTitle: 'For You',
  },
  {
    id: 2,
    nameTitle: 'Drama',
  },
  {
    id: 3,
    nameTitle: 'Movie',
  },
  {
    id: 4,
    nameTitle: 'Anime',
  },
  {
    id: 5,
    nameTitle: 'K_Drama',
  },
  {
    id: 6,
    nameTitle: 'VIP',
  }
];