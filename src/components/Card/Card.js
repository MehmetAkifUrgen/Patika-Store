import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './card.style';

const Card = ({sepet}) => (
  <View style={styles.container}>
    <Image
      resizeMode="stretch"
      source={{uri: sepet.imgURL}}
      style={styles.image}></Image>
    <Text style={styles.textContainer}>{sepet.title} </Text>
    <Text style={styles.priceText}>{sepet.price} </Text>
  </View>
);

export default Card;
