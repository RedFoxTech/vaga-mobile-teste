import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002247',
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
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 30,  

      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 8,
  },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,

      elevation: 17,
    },
  input:{
      borderBottomColor: "#fff",
      borderBottomWidth: 2,
      marginTop: 20,
      height: 40,
      color: "#fff",
      width: 274,
  },
  inputs:{
    flex:0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back:{
    marginTop: 40,
    marginLeft: 40,
    display: 'flex',

  },
  pokeball:{
    position: 'absolute',
    width: 30,
    marginTop: 500,
    marginLeft: 25,
}
  });

  module.exports = styles;