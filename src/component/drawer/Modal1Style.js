import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
  import { Dimensions,
  } from 'react-native';
  
  const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    gotorow:{
      flexDirection: 'row'
    },
    modalContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    imgsize5:{
      height: 30, width: 30
    },
    modalContent: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      // padding: 20,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    modbox1: {
      width: '100%',
      backgroundColor: '#047BD5',
      height: '17%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modlogo: {
      height: '60%',
      width: '60%',
      objectFit: 'contain',
    },
    modbox2: {
      padding: 6,
      justifyContent: 'space-between',
      height: hp('80%'),
    },
    box1: {
      backgroundColor: 'skyblue',
      opacity: 0.4,
      marginTop: 10,
      borderRadius: 5,
    },
    modimg1: {
      height: 17,
      width: 17,
      marginLeft: 5,
      marginTop: 7,
    },
    modtext: {
      color: '#047BD5',
      fontSize: 18,
      fontWeight: 'bold',
      padding: 3,
      marginLeft: 5,
    },
    logoutcont: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      paddingTop: 5,
      paddingBottom: 5,
    },
    logouttext: {
      fontSize: 25,
      marginLeft: 8,
      color: 'black',
      fontWeight: 'bold',
    },
  });
  