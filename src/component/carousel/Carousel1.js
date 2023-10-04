import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  Image,
  Platform,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';
import {Text} from 'react-native';
import {Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SplashScreen from 'react-native-splash-screen';
import IMAGES from './images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Carousel1 = () => {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  const _carousel = useRef();

  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const data = [
    {
      id: 1,
      image: IMAGES.PAY,
    },
    {
      id: 2,
      image: IMAGES.BROWSE,
    },
    {
      id: 3,
      image: IMAGES.BIKE,
    },
    {
      id: 4,
      image: IMAGES.LAPTOP,
    },
    {
      id: 5,
      image: IMAGES.TRACK,
    },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.imgpos}>
        <Image source={item.image} style={styles.imagecarousel} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Carousel
        ref={_carousel}
        data={data}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setActiveDotIndex(index)}
      />
      <View style={styles.paginate}>
        <Pagination
          carouselRef={_carousel}
          activeDotIndex={activeDotIndex}
          dotsLength={5}
          dotStyle={styles.dotstylecarousel}
          inactiveDotStyle={styles.inactivestyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default Carousel1;
export const styles = StyleSheet.create({
  imagecarousel: {
    height: hp('30%'),
    width: wp('90%'),
    objectFit: 'contain',
  },
  imgpos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  safe: {
    flex: 1,
    justifyContent: 'space-between',
  },
  paginate: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotstylecarousel: {
    width: 15,
    backgroundColor: 'orange',
  },
  inactivestyle: {
    width: 10,
    height: 10,
    backgroundColor: 'gray',
  },
});
