import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
      width: wp('100%'),
    },
    mycc29:{
      color: 'white', textAlign: 'center'
    },
    navouter: {
      backgroundColor: '#047BD5',
      height: hp('10%'),
      alignItems: 'center',
    },
    drawercontainer:{
      marginRight: '10%'
    },
    favouter17:{
      flexDirection: 'row', alignItems: 'center'
    },
    navbox1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#047BD5',
      paddingStart: 10,
      paddingEnd: 10,
      height: hp('10%'),
      width: wp('100%'),
    },
    menuouter: {
      flexDirection: 'row',
      //justifyContent: 'space-between',
  
      alignItems: 'center',
      height: hp('12%'),
      width: wp('48%'),
      // backgroundColor: 'red',
    },
    menu: {
      height: hp('.6%'),
      width: wp('8%'),
      marginBottom: 2,
    },
    navflip: {
      height: hp('15%'),
      width: wp('32%'),
      marginBottom: '10%',
      objectFit: 'contain',
    },
    navbox2: {
      height: hp('12%'),
      width: wp('40%'),
      // backgroundColor: 'green',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    navuser: {
      height: hp('4%'),
      width: wp('8%'),
      objectFit: 'contain',
    },
    navfev: {
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
    catouter: {
      height: hp('29%'),
      width: wp('90%'),
      margin: 10,
      justifyContent: 'space-around',
    },
    catbox1: {
      height: hp('14%'),
      width: wp('90%'),
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    catbox11: {
      height: hp('13%'),
      width: '40%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    men1: {
      height: hp('13%'),
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imgmen1: {
      height: 70,
      width: 70,
      objectFit: 'contain',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 35,
    },
    mentext: {
      textAlign: 'center',
      color: 'black',
    },
    contisearch: {
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold',
      margin: 7,
    },
    contiitem: {
    paddingTop:10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor:'#047BD5'
    },
    load:{
      backgroundColor: 'white'
    }
  });
  