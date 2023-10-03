import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      width: '100%',
      backgroundColor: '#047BD5',
      padding: 5,
    },
    backbut: {
      height: hp('4%'),
      width: wp('8%'),
      objectFit: 'contain',
    },
    cartimg: {
      height: hp('4%'),
      width: wp('8%'),
      objectFit: 'contain',
    },
    cartcount: {
      backgroundColor: 'red',
      position: 'absolute',
      right: -4,
      borderRadius: 50,
      height: 18,
      width: 18,
    },
    cartcounttext: {
      color: 'white',
      textAlign: 'center',
    },
    titlewishlist: {
      fontSize: 25,
      fontWeight: 'bold',
      margin: 4,
    },
    lockcont: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 4,
    },
    lockimg: {
      height: hp('3%'),
      width: wp('6%'),
      objectFit: 'contain',
    },
    favcont: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 2.8,
     // alignItems:'center',
      justifyContent:'center'
    },
  });
  