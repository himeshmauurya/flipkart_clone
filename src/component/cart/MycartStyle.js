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
    cartback: {
      height: hp('4%'),
      width: wp('8%'),
      objectFit: 'contain',
    },
    carttext: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 5,
    },
    cartbox2: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cartbottom: {
      backgroundColor: 'white',
    },
    pricedetail: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 5,
    },
    botbox1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: wp('98%'),
      padding: 3,
      margin: 4,
    },
    botprice: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    carttotal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: wp('100%'),
      padding: 3,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
    tottext: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    butcont: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: wp('100%'),
      marginTop: 8,
    },
    butact: {
      backgroundColor: 'orange',
      marginBottom: 15,
      padding: 4,
      marginRight: 2,
      width: wp('70%'),
      height: hp('6%'),
      //borderWidth:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    butacttext: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 1,
    },
  });
  