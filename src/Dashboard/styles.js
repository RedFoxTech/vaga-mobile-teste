import {StyleSheet} from 'react-native';
import * as theme from './../../theme';

export default StyleSheet.create({
    container: {
        flex: 1
    },    
    header: {
        paddingHorizontal: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:60,
        backgroundColor: theme.colors.cinza
    },
    inputBusca: {
        borderRadius: 30,
        color: theme.colors.branco,
        width:300,
        height: 40,
        backgroundColor: theme.colors.preto,
        fontSize: 14
    },

    dashView: {
        backgroundColor: theme.colors.preto,
        
    },
    card:{
        height: 150,
        marginTop: 20,
        marginHorizontal: 30,
        backgroundColor: theme.colors.cinza,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardType: {
        color: theme.colors.preto,
        backgroundColor: theme.colors.branco,
        marginVertical: 8,
        marginRight: 5,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 5
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.branco
    },
    ImgPoke:{
        width: 150,
        height:150,
        margin: 20,

    },
    containerCard:{
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    detalhes: {
        marginTop: 5,
        fontSize: 16,
        color: theme.colors.branco,
        paddingBottom: 5,
    },
    
})