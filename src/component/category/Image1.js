import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IMAGES from '../../Assets';
import { NAV_PAGE } from '../../CONSTANT/String';
import { styles } from './Image1Style';
import {useSelector, useDispatch} from 'react-redux';
import {
  aaddapidata,
  addtot,
  addcc,
  addlog,
  addfav,
  removefav,
  addcart,
  removecart,
} from '../redux/Myslice';
function Image1(props) {
  const p34 = useSelector(state => {
    return state.alldata;
  });
  const dispatch = useDispatch();
  const {title, price, image, rating, category, id, isfavourite} = props.value2;
  const [added, setadded] = useState(false);
  const navigation = useNavigation();
  const [fav, setfav] = useState(false);
  useEffect(() => {
    const t = p34.cartitem.filter(val => {
      return val.id == id;
    });
    if (t.length > 0) {
      setadded(true);
    } else {
      setadded(false);
    }
  }, [p34.cartitem]);

  useEffect(() => {
    const t = p34.favitem.filter(val => {
      return val.id == id;
    });

    if (t.length > 0) {
      setfav(true);
    } else {
      setfav(false);
    }
  }, [p34.favitem]);
function detailPageImage(){
  navigation.navigate(NAV_PAGE.DETAILPAGE, {val2: props.value2});
}
function removeFavImage(){
   let t1 = p34.data1.map((val, ind) => {
    if (val.id == id) {
      dispatch(removefav(id));
    }
    return val;
  });
}

function gotoCart(){
  navigation.navigate(NAV_PAGE.MYCART);
}
function addToCartImage(){
  p34.data1.map(val => {
    if (val.id == id) {
      dispatch(addcart(id));
      dispatch(addtot(p34.tot + val.price));
    } else {
    }
    return val;
  });
}

function alertLogin(){
  Alert.alert('', 'Please login to the page', [
    {
      text: 'Cancel',
      onPress: () => {},
    },
    {text: 'OK', onPress: () => navigation.navigate(NAV_PAGE.LOGIN)},
  ]);

}
function addfavImage(){

  p34.data1.map(val => {
    if (val.id == id) {
      dispatch(addfav(id));
    }
    return val;
  });
}
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={detailPageImage}>
      <View style={styles.container}>
     {props.pagedata!="home1"?
     <View style={styles.wishbox1}>
     <TouchableOpacity
       onPress={removeFavImage}
       activeOpacity={0.7}>
       <Image
         source={IMAGES.DELETE}
         style={styles.wishdel}
       />
     </TouchableOpacity>
   </View>
     
     :<View></View>}
        <Image source={{uri: image}} style={styles.img1} />
        <View style={styles.catbox3}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cattitle}>
            {title}
          </Text>
          {props.pagedata=="home1"? <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.imgbottom}>
            {category}
          </Text>:<Text numberOfLines={1} ellipsizeMode="tail" style={styles.wishprice}>
            ${price}
          </Text>}
          {props.pagedata=="home1"?
           <View style={styles.ratebox}>
           <TouchableOpacity activeOpacity={0.7} style={styles.rateouter}>
             <Text style={styles.ratetext}>{rating.rate}</Text>
             <Image
               source={IMAGES.STAR}
               style={styles.starsize}
             />
           </TouchableOpacity>
           <Text>({rating.count})</Text>
         </View>
          :
          <View style={styles.rateouter12}>
          <TouchableOpacity activeOpacity={0.7} style={styles.rateinner}>
             <Text style={styles.wishrate123}>{rating.rate}</Text>
             <Image
               source={IMAGES.STAR}
               style={styles.wishstar}
             />
           </TouchableOpacity>
           <Image
            source={IMAGES.PLUS}
           style={styles.wishplus1}
           />
         </View>
        }
         {props.pagedata=="home1"?
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.price}>
            ${price}
          </Text>
          :<View></View>
          }
 
 {props.pagedata=="home1"?
          <View style={styles.box31}>
            {!p34.log ? (
              added ? (
                <TouchableOpacity
                  style={styles.imgadded}
                  onPress={gotoCart}>
                  <Text style={styles.movecart}>MOVE TO CART</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={addToCartImage}
                  activeOpacity={0.7}
                  style={styles.addouter}>
                  <Text style={styles.addtextimg1}>ADD</Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                onPress={alertLogin}
                activeOpacity={0.7}
                style={styles.addouter}>
                <Text style={styles.addtextimg1}>ADD</Text>
              </TouchableOpacity>
            )}
            {props.pagedata=='home1'?!p34.log ? (
              fav ? (
                <TouchableOpacity
                  onPress={removeFavImage}
                  activeOpacity={0.7}
                  style={styles.favouter}>
                  <Image
                    source={IMAGES.FAV_RED}
                    style={styles.favred1}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={addfavImage}
                  activeOpacity={0.7}
                  style={styles.favouter}>
                  <Image
                    source={IMAGES.FAV_WHITE}
                    style={styles.favred1}
                  />
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                onPress={alertLogin}
                activeOpacity={0.7}
                style={styles.favouter}>
                <Image
                  source={IMAGES.FAV_WHITE}
                  style={styles.favred1}
                />
              </TouchableOpacity>
            ):<View></View>}
          </View>
          :
          <View style={styles.box322}>
            {!p34.log ? (
              added ? (
                <TouchableOpacity
                  style={styles.imgadded}
                  onPress={gotoCart}>
                  <Text style={styles.movecart}>MOVE TO CART</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={addToCartImage}
                  activeOpacity={0.7}
                  style={styles.addouter1}>
                  <Text style={styles.addtextchange}>ADD</Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                onPress={alertLogin}
                activeOpacity={0.7}
                style={styles.addouter1}>
                <Text style={styles.addtextchange}>ADD</Text>
              </TouchableOpacity>
            )}
            {props.pagedata=='home1'?!p34.log ? (
              fav ? (
                <TouchableOpacity
                  onPress={removeFavImage}
                  activeOpacity={0.7}
                  style={styles.favouter}>
                  <Image
                    source={IMAGES.FAV_RED}
                    style={styles.favred1}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={addfavImage}
                  activeOpacity={0.7}
                  style={styles.favouter}>
                  <Image
                    source={IMAGES.FAV_WHITE}
                    style={styles.favred1}
                  />
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                onPress={alertLogin}
                activeOpacity={0.7}
                style={styles.favouter}>
                <Image
                  source={IMAGES.FAV_WHITE}
                  style={styles.favred1}
                />
              </TouchableOpacity>
            ):<View></View>}
          </View>}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Image1;
