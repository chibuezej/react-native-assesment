import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Payment from '@/components/Payment';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 

export default function Home() {
  const [hasActivePlan, setHasActivePlan] = useState(true);

  const packages = [
    {
      imageSource: 'assets/images/heart.svg',
      title: 'Health insurance',
      description: 'Subscribe to your preferred insurance packages',
      arrowImage: 'assets/images/arrow.svg',
      backgroundColor: '#F4FDE7',
      borderColor: '#D4F9AC'
    },
    {
      imageSource: 'assets/images/phone.svg',
      title: 'Consultation',
      description: 'Subscribe to your preferred insurance packages',
      arrowImage: 'assets/images/arrow.svg',
      backgroundColor: '#E6F0FE',
      borderColor: '#A7C9FD'
    },
    {
      imageSource: 'assets/images/pres.svg',
      title: 'Prescription',
      description: 'View and manage all your prescriptions here.',
      arrowImage: 'assets/images/arrow.svg',
      backgroundColor: '#FFFAE5',
      borderColor: '#FFE89E',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>

      <Text style={styles.title}>Packages</Text>
      <View style={styles.boxContainer}>
        {packages.map((packageData, index) => (
          <Payment key={index} {...packageData} />
        ))}
      </View>
      <View style={styles.subscriptionContainer}>
        <Text style={styles.current}>Current subscription</Text>
        {hasActivePlan ? (
          <View style={styles.boxShadow}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.blackButton}  onPress={() => setHasActivePlan(true)} >
            <Text style={styles.standard}>STANDARD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.whiteButton}  onPress={() => setHasActivePlan(true)} >
            <Text style={styles.monthly}>Monthly</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.number}>N 6,000</Text>
          <View style={styles.textContainer}>
          <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <View style={styles.smallText}>
          <Text style={styles.span}>Days left:</Text>
          <Text style={styles.spanText}>25</Text>
          </View>
          
          </View>
          <TouchableOpacity style={styles.button}  onPress={() => setHasActivePlan(true)} >
            <Text>Renew</Text>
          </TouchableOpacity>
          </View>
        ) : (
          <Text>No active plan</Text>
        )}
      </View> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 10,
    paddingLeft: 10,
    paddingRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 30,
    paddingTop: 15,
  },
  boxContainer: {
       gap: 20,
  },
  smallText: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  boxShadow: {
    backgroundColor: "#EEFCF8", 
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor:  '#ADEFDF',
    marginBottom: 10,
  },
  subscriptionContainer: {
    marginTop: 20,
  },
  current: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 10,
    paddingTop: 10,
  },
  blackButton: {
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 1,
    borderRadius: 3,
  },
  whiteButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 1,
    borderRadius: 3,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#E2E4E8',
    padding: 10,
    borderRadius: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  standard: {
    color: '#FFFFFF',
    padding: 5,
    textAlign: 'center',
  },
  monthly: {
    color: 'black',
    padding: 5,
    textAlign: 'center',
  },
  number: {
    fontSize: 24,
    fontWeight: '700',
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between'
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
    padding: 10
  },
  spanText: {
    fontSize: 10,
    fontWeight: 'bold',
  }
});
