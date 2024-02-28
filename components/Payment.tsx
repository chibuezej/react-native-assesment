import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Payment({ imageSource, title, description, arrowImage, backgroundColor, borderColor  }: any) {
    const navigation = useNavigation();

  const handlePress = () => {
    if (title === 'Health insurance') {
      (navigation as any).navigate('Health Insurance');
    } else {
        (navigation as any).navigate('(tabs)');
    }
  };
  return (
    <Pressable onPress={handlePress}>
    <View style={[styles.box, { backgroundColor, borderColor: borderColor }]}>
      <View style={styles.images}>
        <Image
          source={{ uri: imageSource }}
          style={{ width: 49, height: 49 }}
        />
      </View>

      <View style={styles.textBox}>
        <Text style={styles.tittle}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.arrowContainer}>
        <Image
          source={{ uri: arrowImage }}
          style={styles.arrow}
        />
      </View>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: 'red',
    paddingTop: 16,
    paddingLeft: 24,
    paddingBottom: 16,
    paddingRight: 24,
    gap: 5,
    borderWidth: 1,
  },
  tittle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
  },
  images: {
padding: 5,
  },
  textBox: {
    flexDirection: "column",
    textAlign: "center",
    flex: 1,  
  },
  arrowContainer: {
    marginLeft: 'auto', 
  },
  arrow: {
    width: 24,
    height: 24,
  }
});
