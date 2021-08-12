import { StyleSheet, Dimensions, StatusBar } from "react-native";

export default StyleSheet.create({
  ScrollViewContainer: {
    width: "100%",
    height: Dimensions.get("screen").height,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#FFF",
  },

  HeaderContainer: {
    width: "100%",
    backgroundColor: "#FFF",
    marginBottom: 32,
  },

  HeaderInfos: {
    flexDirection: "row",
    marginTop: 32,
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  BackIcon: { width: 24, height: 24 },

  HeaderInfosCode: { fontSize: 16, fontWeight: "bold", color: "#000" },

  HeaderImageContainer: { alignItems: "center" },

  HeaderImage: { width: 250, height: 250 },

  StatsContainer: {
    width: "90%",
    alignSelf: "center",
  },

  PokemonName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textTransform: "capitalize",
    marginBottom: 32,
    alignSelf: "center",
  },

  PokemonStats: {
    alignSelf: "center",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  PokemonStatsInfosContainer: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    marginTop: 32,
  },
});
