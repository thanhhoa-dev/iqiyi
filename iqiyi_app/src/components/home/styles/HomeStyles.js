import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export const HomeStyles = StyleSheet.create({
    oneline_horiz : {
        width : 1,
        height : '50%',
        borderWidth : 1,
        borderStartColor : 'white'
    },
    img_search : {
        width : 18,
        height : 18,
        opacity : 0.8
    },
    txt_placeholder_input : {
        color : 'white',
        fontFamily : 'Inter-Thin',
        width : '70%'
    },
    txt_vip : {
        fontSize : 13,
        fontFamily : 'Inter-Medium',
        color : 'black'
    },
    btnVip : {
        width : WIDTH * 0.18,
        height : '70%',
        backgroundColor : '#F2BF83',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        borderRadius : 6
    },
    viewSearch : {
        backgroundColor : '#3B3D3F',
        width : WIDTH * 0.5,
        height : '70%',
        borderRadius : 8,
        flexDirection : 'row',
        paddingHorizontal : 10,
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    iqiyi : {
        color : '#00DC5A',
        fontFamily : 'Inter-Bold',
        fontSize : 28
    },
    logo : {

    },
    header : {
        width : WIDTH,
        height : 65,
        backgroundColor : '#2e3034',
        flexDirection : 'row',
        paddingHorizontal : 10,
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingTop : 15
    },
    container : {
        flex : 1,
        backgroundColor : '#111319'
    }
})