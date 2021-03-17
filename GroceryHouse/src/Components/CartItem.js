import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts, metrics} from '../utils/Theme';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {name, image, price, bgcolor} = this.props.item;
    return (
      <View style={[styles.container,]}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <Image
            style={[styles.image, {backgroundColor: bgcolor}]}
            source={image}
          />
          <View style={{flex: 1}}>
            <Text numberOfLines={2} style={styles.title}>
              {name}
            </Text>
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
        <View style={styles.quantityView}>
          <Icon
            name="plus-box"
            style={styles.icon}
            onPress={this.props.onAdd}
          />
          <Text style={styles.quantity}>{this.props.quantity}</Text>
          <Icon
            name="minus-box"
            style={styles.icon}
            onPress={this.props.onMinus}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: metrics.defaultMargin,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor:'white'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius:20,

    marginRight: 20,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 18,
    color:colors.secondary,

    marginBottom: 5,
  },
  price: {
    fontFamily: fonts.primaryBold,
    fontSize: 18,
    marginBottom: 5,
  },
  quantityView: {
    backgroundColor: colors.lightBackground,
    padding: 5,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 5,
  },
  quantity: {
    alignSelf: 'center',
    marginVertical: 5,
    fontFamily: fonts.primaryBold,
  },
  icon: {
    fontSize: 24,
    color: colors.secondary,
  },
});