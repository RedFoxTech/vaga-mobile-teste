import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  HeaderContainer: {
    width: "100%",
    backgroundColor: "#FFF",
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  HeaderTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  HeaderSearchContainer: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },

  HeaderSearchIcon: { width: 24, height: 24, marginHorizontal: 18 },

  ListContainer: {
    backgroundColor: "#ffF",
    width: "90%",
    marginVertical: 10,
  },

  FooterContainer: {
    width: "100%",
    flex: 1,
    marginVertical: 10,
    // backgroundColor: "#00f",
    alignItems: "center",
    justifyContent: "center",
  },

  FooterLoadingGif: { width: 64, height: 64 },

  FooterLoadingText: { fontSize: 16, color: "#919191" },
});
