import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    padding: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2,
    borderRadius: 5,
  },
  textContainer: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    width: Dimensions.get('window').width / 3,
  },
  priceText: {
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
    width: Dimensions.get('window').width / 3,
  },
  image: {
    width: '98%',
    height: Dimensions.get('window').height / 4,
    marginTop: 5,
    borderRadius: 5,
  },
});
