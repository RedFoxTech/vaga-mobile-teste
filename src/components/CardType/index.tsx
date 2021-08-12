import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const CardType = (type: { type: string }) => {
  const [containerStyle, setContainerStyle] = useState({});
  const [textStyle, setTextStyle] = useState({});

  useEffect(() => {
    switch (type.type.toLocaleLowerCase()) {
      case "fire":
        setContainerStyle(styles.FireContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "water":
        setContainerStyle(styles.WaterContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "grass":
        setContainerStyle(styles.GrassContainer);
        setTextStyle(styles.BlackText);
        break;

      case "poison":
        setContainerStyle(styles.PoisonContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "bug":
        setContainerStyle(styles.BugContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "flying":
        setContainerStyle(styles.FlyingContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "normal":
        setContainerStyle(styles.NormalContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "electric":
        setContainerStyle(styles.ElectricContainer);
        setTextStyle(styles.BlackText);
        break;

      case "ground":
        setContainerStyle(styles.GroundContainer);
        setTextStyle(styles.BlackText);
        break;

      case "fairy":
        setContainerStyle(styles.FairyContainer);
        setTextStyle(styles.BlackText);
        break;

      case "fighting":
        setContainerStyle(styles.FightingContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "psychic":
        setContainerStyle(styles.PsychicContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "rock":
        setContainerStyle(styles.RockContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "steel":
        setContainerStyle(styles.SteelContainer);
        setTextStyle(styles.BlackText);
        break;

      case "ice":
        setContainerStyle(styles.IceContainer);
        setTextStyle(styles.BlackText);
        break;

      case "ghost":
        setContainerStyle(styles.GhostContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "dark":
        setContainerStyle(styles.DarkContainer);
        setTextStyle(styles.WhiteText);
        break;

      case "dragon":
        setContainerStyle(styles.DragonContainer);
        setTextStyle(styles.WhiteText);
        break;

      default:
        break;
    }
  }, []);

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{type.type}</Text>
    </View>
  );
};

export default CardType;
