import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  export const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'lightgreen',
      height: hp('15%'),
      width: wp('30%'),
     // borderWidth: 1,
      padding: '2%',
      borderColor: 'lightgrey',
      marginBottom:10,
      borderRadius:6
    },
    imgsmall: {
      height: hp('10%'),
      width: wp('25%'),
      borderWidth: 1,
      objectFit: 'contain',
    },
    imgtitle: {
      fontWeight: 'bold',
      fontSize: hp('2%'),
      marginBottom: 2,
      color:'green'
    },
  });
  