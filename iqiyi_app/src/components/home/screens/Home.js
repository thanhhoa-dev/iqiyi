import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { HomeStyles } from '../styles/HomeStyles'

const Home = () => {
  return (
    <SafeAreaView style={HomeStyles.container}>
      <View style={HomeStyles.header}>
        <View style={HomeStyles.logo}>
          <Text style={HomeStyles.iqiyi}>iQIYI</Text>
        </View>
        <TouchableOpacity
          onPress={()=>{
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
    </SafeAreaView>
  )
}

export default Home