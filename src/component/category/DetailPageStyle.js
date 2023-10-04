import {StyleSheet} from 'react-native';
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
  descriptionadded: {
    color: 'blue',
    fontWeight: 'bold',
  },
  marginBottompage: {
    marginBottom: 1,
  },
  marginRightpage: {
    marginRight: 7,
  },
  back1: {
    height: hp('4%'),
    width: wp('8%'),
    objectFit: 'contain',
  },
  cart1: {
    height: hp('4%'),
    width: wp('8%'),
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
  clickouter: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    // height: hp('100%'),
    // width: wp('100%'),
    // borderWidth: 1,
    padding: 9,
  },
  clickbox1: {
    width: wp('100%'),
    height: hp('10%'),
    flexDirection: 'row',
    //alignItems:'flex-end',
    justifyContent: 'flex-end',
    //backgroundColor:'red'
  },
  favout: {
    //backgroundColor: "#FF4200",
    padding: 5,
    height: hp('5%'),
    width: '20%',
  },
  favred: {
    height: hp('5%'),
    width: wp('10%'),
    objectFit: 'contain',
  },
  mainimg: {
    height: hp('40%'),
    width: '70%',
    borderWidth: 1,
    paddingTop: 1,
    objectFit: 'contain',
    marginTop: -hp('5%'),
  },
  bottomout: {
    backgroundColor: 'white',
    //height: hp('50%'),
    width: '100%',
    // borderWidth: 1,
    //backgroundColor:'red',
    // marginTop:10
  },
  bottitle: {
    fontWeight: 'bold',
    fontSize: hp('2%'),
    marginBottom: 1,
  },
  rateout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  ratebut: {
    backgroundColor: 'green',
    marginBottom: 1,
    padding: 4,
    marginRight: 2,
    width: '18%',
    borderRadius: 3,
  },
  ratetext: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 1,
  },
  botprice: {
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
    marginBottom: 1,
  },
  addedout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  butouter1: {
    padding: 1,
    width: wp('94%'),
    borderRadius: 5,
  },
  buttext: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'green',
    fontSize: 20,
    borderRadius: 5,
  },
  addtocart: {
    backgroundColor: '#FF4200',
    padding: 5,
    borderRadius: 5,
    width: '100%',
  },
  addtocarttext: {
    color: 'white',
    textAlign: 'center',
  },
  buynowout: {
    backgroundColor: '#FF4200',
    padding: 5,
    //borderWidth:1,
    width: '100%',
  },
  buynowtext: {
    color: 'white',
    textAlign: 'center',
  },
});
