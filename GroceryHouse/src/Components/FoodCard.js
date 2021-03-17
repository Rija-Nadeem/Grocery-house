import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from '../utils/Navigator';
import {colors, fonts, metrics} from '../utils/Theme';
import Fav from './Fav';

export default class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {name, image, description, price,bgcolor,isFav} = this.props.item;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => Navigator.navigate('ProductDetail',{item:this.props.item,category:this.props.category})}>
        <View style={[styles.container,{backgroundColor:bgcolor}]}>
          <View style={styles.imageView}>
            <Image source={image} style={styles.image} />
          </View>
          <Fav isFav={isFav} item={this.props.item}/>
          
          <View style={styles.detailView}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
            <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">
              {description}
            </Text>
            <Text style={styles.price}>
              <Text style={{fontSize: 14}}>$</Text> {price.replace('$', '')}
            </Text>
            <View style={styles.iconView}>
              <Icon name="plus" color="white" size={24} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    marginRight: metrics.defaultMargin,
    borderRadius:30

  },
  imageView: {
    width: 200,
    height: 200,
    alignSelf:'center',
    backgroundColor:'white',
    borderRadius:30,
    marginVertical:15,
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:'contain'
  },
  detailView: {
    paddingLeft: 30,
    paddingBottom: 20,
    paddingRight: 10,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
  },
  iconView: {
    backgroundColor: colors.secondary,
    borderBottomEndRadius: 15,
    borderTopStartRadius: 15,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.secondaryBold,
  },
  desc: {
    color: colors.grey,
    marginVertical: 5,
    fontFamily: fonts.secondary,
  },
  price: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: fonts.secondaryBold,
  },
});
