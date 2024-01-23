import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export const ProfileStyles = StyleSheet.create({
    txtConfirmChangePass : {
        fontSize : 16,
        fontWeight : '700',
        color : '#4A4949',
        textAlign : 'center'
    },
    btnConfirmChangePass : {
        width : 198,
        height : 50,
        backgroundColor : '#B9F0B8',
        borderRadius : 10,
        marginTop : 30,
        alignSelf : 'center',
        justifyContent : 'center'
    },
    inputChangePass : {
        width : 310,
        height : 52,
        backgroundColor : '#ECF8F7',
        marginTop : 42,
        marginHorizontal : 25,
        paddingStart : 21,
        borderRadius : 10
    },
    txtTitleChangePass : {
        fontSize : 18,
        fontWeight : '900',
        color : '#4b4848',
        textAlign : 'center'
    },
    viewTitleChangePass : {
        width : '100%',
        height : 54,
        backgroundColor : '#DEF2EF',
        justifyContent : 'center',
        borderRadius : 10
    },
    modal : {
        width : 360,
        height : 440,
        alignSelf : 'center',
        backgroundColor : 'white',
        borderRadius : 10
    },
    containerMODAL : {
        width : WIDTH,
        height : HEIGHT,
        backgroundColor : 'rgba(0, 0, 0, 0.5)',
        justifyContent : 'center'
    },
    txtOption : {
        fontSize : 16,
        fontWeight : '400',
        color : '#4a4949',
        marginStart : 7
    },
    viewOption : {
        borderWidth : 1,
        borderColor : "#D9D9D9",
        width : 336,
        height : 47,
        paddingStart : 5,
        alignSelf : 'center',
        marginTop : 20,
        flexDirection : 'row',
        alignItems : 'center',
        borderRadius : 10
    },
    btn_ads : {
        height : 40,
        backgroundColor : '#B9F0B8',
        width : 200,
        borderRadius : 5,
        alignItems : 'center',
        justifyContent : 'center',
        marginStart : 15,
        marginBottom : 15
    },
    txt_btn_ads : {
        fontSize : 14,
        fontWeight : "700",
        color : '#4a4949'
    },
    view_content_ads : {
        marginTop : 10,
        marginStart : 15
    },
    txtContent_ads : {
        fontSize : 10,
        fontWeight : '500',
        color : '#4a4949',
        marginBottom : 15
    },
    txtTitle_ads : {
        fontSize : 14,
        fontWeight : '900',
        color : '#ff9393'
    },
    img_ads : {
        width : 70,
        height : 70,
        borderRadius : 35,
        marginTop : 30
    },
    Ads : {
        width : '96%',
        backgroundColor : '#F1F7EB',
        marginTop : 5,
        marginHorizontal : '2%',
        borderRadius : 20,
        flexDirection : 'row',
        borderWith : 1,
        borerColor : '#D9D9D9'
    },
    txtRole : {
        fontSize : 14,
        fontWeight : '400',
        color : '#4A4949'
    }
    ,
    txtName : {
        fontSize : 16,
        fontWeight : '800',
        color : '#4B4848',
        marginBottom : 10
    },
    viewName : {
        marginStart : 18,
        paddingTop : 14
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius : 37.5,
        resizeMode : 'contain'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    Header: {
        height: 75,
        paddingHorizontal: 15,
        flexDirection: 'row',
        marginTop : 4
    }
})