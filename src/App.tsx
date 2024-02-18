import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{ imageUrl: ImageSourcePropType }>;

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};
const SecondDice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};


function App(): JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [secondDiceImage, setSecondDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let secondRandomDice = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }

    switch (secondRandomDice) {
      case 1:
        setSecondDiceImage(DiceOne);
        break;
      case 2:
        setSecondDiceImage(DiceTwo);
        break;
      case 3:
        setSecondDiceImage(DiceThree);
        break;
      case 4:
        setSecondDiceImage(DiceFour);
        break;
      case 5:
        setSecondDiceImage(DiceFive);
        break;
      case 6:
        setSecondDiceImage(DiceSix);
        break;

      default:
        setSecondDiceImage(DiceOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
      <Dice imageUrl={diceImage} />
      <SecondDice imageUrl={secondDiceImage} />
      </View>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
    flexDirection:'row',
  },
  diceImage: {
    width: 100,
    height: 100,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
