import {useNavigation} from '@react-navigation/native';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');

const Error = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Image
            source={require('../../Assets/Images/err.png')}
            style={{height: hp('15%'), width: wp('32%'), marginBottom: '10%'}}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Sorry, no results found!
          </Text>
          <Text
            numberOfLines={2}
            style={{fontSize: 15, maxWidth: '80%', textAlign: 'center'}}>
            Please check the spelling or try searching for something else
          </Text>
        </View>
        <View></View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  modalContent: {
    width: '80%', // Adjust the width as needed
    height: 200, // Adjust the height as needed
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Error;
