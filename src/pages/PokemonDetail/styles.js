import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  img: {
    width: 100,
    height: 100,
  },
  header: {
    padding: 16,
    fontSize: 20,
  },
  list: {
    maxHeight: 500,
  },
  card: {
    padding: 8,
  },
  cardHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 8,
    textTransform: 'capitalize',
  },
  cardContent: {
    margin: 0,
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    height: 30,
  },
});
