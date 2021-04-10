import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002247',

    },
    buttons:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 150,
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
      borderRadius: 30,
      fontFamily: 'Concert One',

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
    height: 150,
    marginLeft: 40,
    marginTop: 50,
  },
  });

  module.exports = styles;