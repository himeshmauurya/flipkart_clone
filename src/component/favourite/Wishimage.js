// import {useNavigation} from '@react-navigation/native';
// import React, {useContext, useEffect, useState} from 'react';
// import {
//   Text,
//   View,
//   ScrollView,
//   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   Button,
// } from 'react-native';
// import { styles } from './WishimageStyle';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// import {useSelector, useDispatch} from 'react-redux';
// import {
//   aaddapidata,
//   addtot,
//   addcc,
//   addlog,
//   addfav,
//   removefav,
//   addcart,
//   removecart,
// } from '../redux/Myslice';

// function Wishimage(props) {
//   const p34 = useSelector(state => {
//     return state.alldata;
//   });
//   const dispatch = useDispatch();
//   const {data1, log, cc, tot, favitem} = p34;
//   const {title, price, image, rating, category, id, count} = props.value8;

//   const navigation = useNavigation();
//   const img1 = image;
//   const [added, setadded] = useState(false);
//   useEffect(() => {
//     p34.cartitem.map(val => {
//       //console.log("hello")
//       if (val.id == id && val.count > 0) {
//         setadded(true);
//       } else if (val.id == id && val.count <= 0) {
//         setadded(false);
//       }
//       return val;
//     });
//   }, [p34.cc]);

//   return (
//     <TouchableOpacity
//       activeOpacity={1}
//       onPress={() => {
//         navigation.navigate('Imageclick', {val2: props.value8});
//       }}>
//       <View style={styles.container}>
//         <View style={styles.wishbox1}>
//           <TouchableOpacity
//             onPress={() => {
//               //console.log('red');
//               let t1 = p34.data1.map((val, ind) => {
//                 if (val.id == id) {
//                   dispatch(removefav(id));
//                 }
//                 return val;
//               });
//             }}
//             activeOpacity={0.7}>
//             <Image
//               source={require('../../Assets/Images/delete.png')}
//               style={styles.wishdel}
//             />
//           </TouchableOpacity>
//         </View>
//         <Image source={{uri: img1}} style={styles.wishimg} />
//         <View style={styles.wishbox3}>
//           <Text numberOfLines={1} ellipsizeMode="tail" style={styles.wishtitle}>
//             {title}
//           </Text>
//           <Text numberOfLines={1} ellipsizeMode="tail" style={styles.wishprice}>
//             ${price}
//           </Text>
//           <View style={styles.rateouter}>
//             <TouchableOpacity activeOpacity={0.7} style={styles.rateinner}>
//               <Text style={styles.wishrate}>{rating.rate}</Text>
//               <Image
//                 source={require('../../Assets/Images/star.png')}
//                 style={styles.wishstar}
//               />
//             </TouchableOpacity>
//             <Image
//               source={require('../../Assets/Images/plus.png')}
//               style={styles.wishplus}
//             />
//           </View>

//           <View style={styles.addouter}>
//             {added ? (
//               <View style={{padding: 1, width: '80%'}}>
//                 <Text style={styles.wishadded}>ADDED</Text>
//               </View>
//             ) : (
//               <TouchableOpacity
//                 onPress={() => {
//                   p34.data1.map(val => {
//                     if (val.id == id) {
//                       dispatch(addcart(id));
//                       dispatch(addtot(p34.tot + val.price));
//                     } else {
//                     }
//                     return val;
//                   });
//                 }}
//                 activeOpacity={0.7}
//                 style={styles.wishaddtocart}>
//                 <Text style={styles.addtocarttext}>ADD TO CART</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// }

// export default Wishimage;
