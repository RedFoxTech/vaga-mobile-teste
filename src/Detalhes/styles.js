import {StyleSheet} from 'react-native';
import * as theme from './../../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.preto,
    },    
    header: {
        paddingHorizontal: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:40,
    },
    dashView:{
        height:220,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: theme.colors.verde,

    },
    cadTitulo:{
        alignItems: 'center',
        paddingBottom: 30
    },
    cadType:{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 20,
        marginHorizontal:30,
        flexDirection: 'row'
        
    },
    nameType:{
        fontSize: 15,
        fontWeight:'bold',
        color: theme.colors.preto, 
        backgroundColor: theme.colors.branco,
        paddingHorizontal: 40,
        paddingVertical: 5,
        borderRadius: 15, 
    },
    titulo:{
        fontSize: 30,
        fontWeight:'bold',
        color: "#FFF",

    }, 
    subtitulo:{
        fontSize: 16,
        color: theme.colors.branco,
    },
    ImgPoke:{
        height: 230,
        width: 230,
    },
    dashView2:{
        height:800,
        paddingHorizontal: 30,
        paddingTop: 60,
        paddingLeft: 30,
    },
    info:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    valueinfo:{
        fontSize: 30,
        fontWeight:'bold',
        color: theme.colors.branco,
    },
    nameinfo: {
        fontSize: 16,
        fontWeight:'bold',
        color: theme.colors.branco,
    },
    baseStats:{
        marginHorizontal: 20,
        marginTop:20,
    },
    lineStats:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    progressBar: {
        flexDirection: 'row',
        height: 15,
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        
    },
    colorBar:{
        borderRadius: 15 
    },
    textBar:{
        color: theme.colors.preto,
        fontWeight: 'bold',
    }
    
})