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
import IMAGES from '../../Assets';
const {width, height} = Dimensions.get('window');

const Error = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.Container}>
        <View>
          <Image
            source={IMAGES.ERR}
            style={styles.imgsize6}
          />
        </View>
        <View style={styles.Contentimg}>
          <Text style={styles.content2}>
            Sorry, no results found!
          </Text>
          <Text
            numberOfLines={2}
            style={styles.content}>
            Please check the spelling or try searching for something else
          </Text>
        </View>
        <View></View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
 Container: {
  flex: 1, justifyContent: 'center', alignItems: 'center'
  },
 Contentimg: {
  justifyContent: 'center', alignItems: 'center'
  },
  content:{
    fontSize: 15, maxWidth: '80%', textAlign: 'center'
  },
  content2:{
    fontSize: 20, fontWeight: 'bold'
  },
  imgsize6:{
    height: hp('15%'), width: wp('32%'), marginBottom: '10%'
  }
});

export default Error;
