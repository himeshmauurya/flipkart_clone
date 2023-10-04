import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  export const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      height: hp('50%'),
      width: wp('49%'),
      borderWidth: 1,
      padding: '2%',
      borderColor: 'lightgrey',
    },
    imgbottom:{
      marginBottom: 2
    },
    addtextimg1:{
      color: 'white', textAlign: 'center'
    },
    addtextchange:{
      color: 'white', textAlign: 'center',fontSize:14,fontWeight:'bold'
    },
    starsize:{
      height: hp('2%'), width: wp('4%')
    },
    wishbox1: {
      width: '100%',
      flexDirection: 'row',
      //alignItems:'center',
      justifyContent: 'flex-end',
      // backgroundColor:'red',
      paddingRight: 5,
    },
    wishdel: {
      height: hp('3%'),
      width: wp('8%'),
      objectFit: 'contain',
      marginTop: 2,
     
    },
    img1: {
      height: '53%',
      width: '80%',
      borderWidth: 1,
      paddingTop: 3,
      objectFit: 'contain',
    },
    rateouter12: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 1,
      //width:wp("50%")
      justifyContent: 'space-between',
      marginBottom:-7
    },
    rateinner: {
      backgroundColor: 'green',
      marginBottom: 1,
      padding: 4,
      marginRight: 2,
      //width: '30%',
      borderRadius: 3,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wishrate123: {
      color: 'white',
      textAlign: 'center',
      marginBottom: 1,
    },
    wishplus1: {
      // height: 20,
      // width: 50,
      height: hp('8%'),
      width: wp('28%'),
      objectFit: 'cover',
    },
    wishstar: {
      height: hp('2%'),
      width: wp('4%'),
    },
    catbox3: {
      backgroundColor: 'white',
      height: '40%',
      width: '100%',
      padding: 3,
      // borderWidth: 1,
    },
    cattitle: {
      fontWeight: 'bold',
      fontSize: hp('2%'),
      marginBottom: 2,
    },
    ratebox: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 2,
    },
    wishprice: {
      fontWeight: 'bold',
      fontSize: hp('2.5%'),
      marginBottom: -13,
    },
    rateouter: {
      backgroundColor: 'green',
      marginTop: 3,
      marginBottom: 1,
      padding: 2,
      marginRight: 2,
      width: '32%',
      borderRadius: 3,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ratetext: {
      color: 'white',
      textAlign: 'center',
      marginBottom: 2,
      paddingLeft: 2,
    },
    price: {
      fontWeight: 'bold',
      fontSize: hp('2.5%'),
      marginBottom: 1,
    },
    box31: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    box322: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      //width:200
    },
    imgadded: {
      padding: 5,
      width: '70%',
      borderRadius: 5,
    },
    movecart: {
      color: 'white',
      textAlign: 'center',
      backgroundColor: 'green',
      borderRadius: 5,
      fontSize: 11,
      // padding: 3,
      paddingTop: 5,
      paddingBottom: 5,
    },
    addouter: {
      backgroundColor: '#FF4200',
      padding: 5,
      borderRadius: 6,
      width: '30%',
    },
    addouter1: {
      backgroundColor: '#FF4200',
      padding: 5,
      borderRadius: 6,
      width: '80%',
    },
    favouter: {
      padding: 5,
  
      width: '20%',
    },
    favred1: {
      height: hp('2.8%'),
      width: wp('5%'),
      objectFit: 'contain',
    },
  });
  