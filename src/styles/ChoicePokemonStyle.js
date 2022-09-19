import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002247',

      },
      image:{
        height: 40,
        width: 40,
        marginLeft: 10,
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
        width: 230,
        height: 60,
        alignItems: 'center', 
        borderRadius: 5,
        marginBottom: 18, 
        marginLeft: 0, 
        flexDirection: 'row',
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: 'flex-start',

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
          marginLeft: 10,
      },
      choiceType:{
        color:"#E7E7E7",
        fontFamily: 'serif',
        fontSize: 30,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        width: 230,
        height: 50,
        textAlign: 'center',
        marginTop: 25,
      }
})

module.exports = styles;