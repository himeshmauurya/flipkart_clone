import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: 'white',
      height: hp('31%'),
      width: wp('100%'),
      padding: '2%',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    cartbox1: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    cartimg: {
      height: hp('16%'),
      width: wp('20%'),
      borderWidth: 1,
      paddingTop: 3,
      objectFit: 'contain',
    },
    cartbox2: {
      width: wp('70%'),
      height: hp('16%'),
      justifyContent: 'center',
    },
    carttitle: {
      fontWeight: 'bold',
      fontSize: hp('2.5%'),
      marginBottom: 1,
    },
    cartcat: {
      fontWeight: 'bold',
      fontSize: hp('2%'),
      marginBottom: 1,
    },
    senddate: {
      fontWeight: 'bold',
      fontSize: hp('2%'),
      marginBottom: 1,
      color: 'blue',
    },
    rateouter: {
      backgroundColor: 'green',
      marginBottom: 1,
      padding: 4,
      marginRight: 2,
      width: '25%',
      borderRadius: 3,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textrate: {
      color: 'white',
      textAlign: 'center',
      marginBottom: 1,
    },
    cartstar: {
      height: hp('2%'),
      width: wp('4%'),
    },
    cartbox3: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    incdec: {
      flexDirection: 'row',
      marginRight: wp('10%'),
    },
    cartplus: {
      height: hp('4%'),
      width: wp('7%'),
      objectFit: 'contain',
    },
    itemcount: {
      height: hp('4%'),
      width: wp('8%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemcounttext: {
      fontSize: 20,
    },
    cartminus: {
      height: hp('4%'),
      width: wp('7%'),
      objectFit: 'contain',
    },
    itemtot: {
      fontWeight: 'bold',
      fontSize: hp('2.5%'),
      marginBottom: 1,
    },
    cartbox4: {
      flexDirection: 'row',
    },
    rembut: {
      marginBottom: 1,
      padding: 4,
      marginRight: 2,
      width: wp('48%'),
      height: hp('6%'),
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buybut:{
      marginBottom: 1,
      padding: 4,
      marginRight: 2,
      width: wp('50%'),
      height: hp('6%'),
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },buytext:{
      color: 'black', textAlign: 'center', marginBottom: 1
    },
    remtext: {
      color: 'black',
      textAlign: 'center',
      marginBottom: 1,
    },
  });
  