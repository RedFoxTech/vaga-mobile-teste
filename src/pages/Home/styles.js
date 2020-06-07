import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,

    
 
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffd600',
    

  },


  headerTextBold: {
    fontSize: 15,
    color: '#737380',
    fontWeight: 'bold',
    fontFamily: 'Roboto_500Medium'
  },





  incidentList: {
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: '#e1e2e1',
  },

  incident: {
    padding: 24,
    borderRadius: 1,
    backgroundColor: '#f5f5f6',
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  pokemonImg:{
    width: 180,
    height: 180,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#0d47a1',
    fontFamily: 'Roboto_400Regular',

  },

  incidentValue: {
    marginTop: 8,
    fontSize: 25,
    marginBottom: 16,
    color: '#002171',
    fontFamily: 'Roboto_700Bold',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#0d47a1',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular'
  },
});