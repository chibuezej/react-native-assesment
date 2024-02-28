import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Container({
  backgroundColor = "#EEFCF8",
  buttonText = "Renew",
  button="h",
  buttonBackground= "",
  buttonBackgroundColor = '#E2E4E8',
  buttonTextColor = 'black',
  standardTextColor = '#FFFFFF',
  number = 'N 6,000',
  paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  period = 'year',
  borderColor = '#CACDD5',
  navigation = null,
}) {
  const [hasActivePlan, setHasActivePlan] = useState(true);

  const handleSubscribePress = () => {
    if (navigation) {
      (navigation as any).navigate('PaymentPage');
    } else {
      console.error("Navigation prop is not available in Container component.");
    }
  };

  return (
    
    <View style={[styles.boxShadow, { backgroundColor, borderColor}]}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.blackButton]}
          onPress={handleSubscribePress}
        >
          <Text style={[styles.standard, { color: standardTextColor, backgroundColor: buttonBackground }]}>
            {button}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.number}>{number}<span style={{fontSize: '10px', fontWeight: '200'}}>/{period}</span></Text>
      <View style={styles.textContainer}>
        <Text style={styles.paragraph}>{paragraph}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor, borderColor: borderColor }]}
        onPress={handleSubscribePress} 
      >
        <Text style={{ color: buttonTextColor }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ADEFDF',
    marginBottom: 10,
  },
  blackButton: {
    alignItems: 'center',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  standard: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#E2E4E8',
    padding: 5,
    borderRadius: 3,
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  number: {
    fontSize: 24,
    fontWeight: '700',
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  paragraph: {
    fontSize: 12,
    fontWeight: '500',
  },
  span: {
    fontSize: 10,
    fontWeight: '500',
    color: '#8C93A3',
    justifyContent: 'flex-end',
    padding: 10,
  },
});
