import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  export const styles = StyleSheet.create({
    container: {
      width: wp('100%'),
    },
    joincenter:{
      alignItems:'center'
    },
    mycount:{
      color: 'white', textAlign: 'center'
    },
    navouter: {
      backgroundColor: '#047BD5',
      height: hp('17%'),
      alignItems: 'center',
    },
    navbox1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      width: '100%',
      backgroundColor: '#047BD5',
      padding: 5,
    },
    navback: {
      height: hp('4%'),
      width: wp('8%'),
      objectFit: 'contain',
    },
    navuser: {
      height: hp('4%'),
      width: wp('8%'),
      objectFit: 'contain',
    },
    navbox2: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    navwish: {
      height: hp('3.5%'),
      width: wp('7%'),
      marginRight: 10,
      marginTop: 4,
      objectFit: 'contain',
    },
    navcart: {
      height: hp('4%'),
      width: wp('8%'),
      objectFit: 'contain',
    },
    navcartcount: {
      backgroundColor: 'red',
      position: 'absolute',
      right: -4,
      borderRadius: 50,
      height: 18,
      width: 18,
    },
    navsearch: {
      flexDirection: 'row',
      justifyContent: 'center',
  
      //borderWidth: 1,
      height: hp('6%'),
      width: wp('96%'),
      backgroundColor: 'white',
      // backgroundColor: 'purple',
      borderRadius: 6,
    },
    searchbox1: {
      width: wp('9%'),
      padding: wp('1%'),
      backgroundColor: 'white',
      justifyContent: 'center',
      borderRadius: 6,
    },
    searchimg: {
      height: hp('2.8%'),
      width: wp('5%'),
      objectFit: 'contain',
    },
    textinput: {
      flex: 1,
      backgroundColor: 'white',
    },
    searchbox3: {
      width: wp('7%'),
      backgroundColor: 'white',
      justifyContent: 'center',
      borderRadius: 6,
    },
    micro: {
      height: hp('2.8%'),
      width: wp('5%'),
    },
    activeindecator:{
      backgroundColor: 'white'
    }
  });
  