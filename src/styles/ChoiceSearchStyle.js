import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002247',

    },
    buttons:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
    },
    title:{
      color:"#E7E7E7",
      fontFamily: 'serif',
      fontSize: 30,
    },
    button:{
      backgroundColor: "#FE9000",
      width: 175,
      height: 45,
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop: 30,
      borderRadius: 5,
      fontFamily: 'Concert One',
      borderColor: "#fff",
      borderWidth: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
  },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,

      elevation: 17,
  },
  logo:{
    height: 130,
    marginLeft: 60,
    marginTop: 100,
  },
  ash:{
    position: 'absolute',
    height: 280,
    width: 430,
    marginLeft: 1,
    bottom:0,
  }
  });

  module.exports = styles;