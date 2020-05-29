import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  homeDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homePageImage: {
    width: '75%',
    height: '50%'
  },
  header: {
    fontSize: 30,
    color: 'orange',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 50,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#DA5A57',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: '#FFF',
    shadowColor: "#DA5A57",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    paddingLeft: 16
  },
  imagemList: {
    width: 100,
    height: 100
  },
  textList: {
    paddingLeft: 10
  },
  searchCont: {
    display: 'flex',
    position: 'absolute',
    marginBottom: 70,
    alignSelf: 'center',
    zIndex: 1,
    marginTop: 10,
  },
  searchPokemon: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;