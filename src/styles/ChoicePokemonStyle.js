import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002247',

      },
      image:{
        height: 40,
        width: 40,
      },
      boxButtons:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      backScreen:{
        marginTop: 30,
        marginLeft: 30,

    },
    iconImage:{
        width: 50,
        height: 50,
        marginLeft: 120,
        position: 'absolute'
    },
    button:{
        backgroundColor: "#FE9000",
        width: 200,
        height: 45,
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 18,  
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 8,

        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
      },
    },
        buttons:{
            padding: 50,
        },
      buttonText:{
          fontSize: 25,
          fontFamily: 'sans-serif-light',
      },
      choiceType:{
        color:"#E7E7E7",
        fontFamily: 'serif',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 25,
      }
})

module.exports = styles;