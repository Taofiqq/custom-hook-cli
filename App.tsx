import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.quicksandRegular}>
        This text uses a quick sand font
      </Text>
      <Text style={styles.quicksandLight}>
        This text uses a quick sand light font
      </Text>
      <Text style={styles.ralewayThin}>
        This text uses a thin italic raleway font
      </Text>
      <Text style={styles.ralewayItalic}>
        This text uses a thin italic raleway font
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quicksandLight: {
    fontFamily: 'Quicksand-Light',
    fontSize: 20,
  },
  quicksandRegular: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
  },
  ralewayItalic: {
    fontFamily: 'Raleway-Italic',
    fontSize: 20,
  },
  ralewayThin: {
    fontFamily: 'Raleway-ThinItalic',
    fontSize: 20,
  },
});
