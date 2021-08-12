import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    // backgroundColor: "#f00",
    marginVertical: 10,
  },
  cardImage: {
    flex: 1,
    height: 100,
  },

  cardInfosContainer: {
    marginLeft: 16,
    flex: 2,
    height: 100,
    justifyContent: "space-between",
  },

  cardInfoName: {
    fontSize: 24,
    fontWeight: "bold",
  },

  cardInfoCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#919191",
  },
});
