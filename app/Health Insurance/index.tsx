import Container from "@/components/Container";
import MasterCardPaymentPage from "@/components/PaymentPage";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

interface HealthInsuranceProps {
  navigation: any;
}

interface MonthlyTabProps {
  navigation: any;
}

interface AnnuallyTabProps {
  navigation: any;
}

const MonthlyTab: React.FC<MonthlyTabProps> = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Container
        buttonBackground="#EEEFF2"
        backgroundColor="#F5F6F7"
        buttonText="Subscribe"
        button="BASIC"
        buttonBackgroundColor="#FFFFFF"
        buttonTextColor="#525C76"
        standardTextColor="#000000"
        number="N 5,000"
        paragraph="This plans covers for your most basic needs and regular treatments"
        period="month"
        navigation={navigation}
      />
      <Container
        backgroundColor="#EEFCF8"
        buttonText="Subscribe"
        button="STANDARD - RECOMMENDED"
        buttonBackground="black"
        buttonBackgroundColor="#08AC85"
        buttonTextColor="white"
        standardTextColor="#fff"
        number="N 6,000"
        paragraph="This plans covers for your most basic needs and regular treatments"
        period="month"
        borderColor="#08AC85"
        navigation={navigation}
      />
      <Container
        backgroundColor="#F5F6F7"
        buttonText="Subscribe"
        button="PREMIUM"
        buttonBackgroundColor="#FFFFFF"
        buttonTextColor="#525C76"
        standardTextColor="#000000"
        number="N 8,000"
        paragraph="This plans covers for your most basic needs and regular treatments"
        period="month"
        navigation={navigation}
      />
    </View>
  </SafeAreaView>
);

const AnnuallyTab: React.FC<AnnuallyTabProps> = ({ navigation }) => (
  <ScrollView>
    <View style={styles.container}>
      <Container
        buttonBackground="#EEEFF2"
        backgroundColor="#F5F6F7"
        buttonText="Subscribe"
        button="BASIC"
        buttonBackgroundColor="#FFFFFF"
        buttonTextColor="#525C76"
        standardTextColor="#000000"
        number="N 5,000"
        paragraph="This plan covers for your most basic needs and regular treatments"
        period="year"
        navigation={navigation}
      />
      <Container
        backgroundColor="#EEFCF8"
        buttonText="Subscribe"
        button="STANDARD - RECOMMENDED"
        buttonBackground="black"
        buttonBackgroundColor="#08AC85"
        buttonTextColor="white"
        standardTextColor="#fff"
        number="N 6,000"
        paragraph="This plans covers for your most basic needs and regular treatments"
        period="year"
        borderColor="#08AC85"
        navigation={navigation}
      />
      <Container
        backgroundColor="#F5F6F7"
        buttonText="Subscribe"
        button="PREMIUM"
        buttonBackgroundColor="#FFFFFF"
        buttonTextColor="#525C76"
        standardTextColor="#000000"
        number="N 8,000"
        paragraph="This plans covers for your most basic needs and regular treatments"
        period="year"
        navigation={navigation}
      />
    </View>
  </ScrollView>
);

const Stack = createStackNavigator();

const HealthInsurance: React.FC<HealthInsuranceProps> = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "monthly", title: "Monthly" },
    { key: "annually", title: "Annually" },
  ]);

  const renderScene = SceneMap({
    monthly: () => <MonthlyTab navigation={navigation} />,
    annually: () => <AnnuallyTab navigation={navigation} />,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ height: 0 }}
      style={{ backgroundColor: "#CACDD5" }}
      labelStyle={{ color: "black", fontWeight: "bold" }}
      renderLabel={({ route, focused }) => (
        <TouchableOpacity
          style={[
            styles.tabButton,
            { backgroundColor: focused ? "#4F4F4F" : "#CACDD5" },
          ]}
          onPress={() => setIndex(route.key === "monthly" ? 0 : 1)}
        >
          <Text style={{ color: "black" }}>{route.title}</Text>
        </TouchableOpacity>
      )}
    />
  );

  return (
    <Stack.Navigator initialRouteName="HealthInsurance">
      <Stack.Screen name="HealthInsurance" options={{ headerShown: false }}>
        {(props) => (
          <ScrollView style={{ flex: 1 }}>
            <Text style={styles.header}>
              Subscribe to your preferred monthly insurance packages
            </Text>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              renderTabBar={renderTabBar}
            />
          </ScrollView>
        )}
      </Stack.Screen>
      <Stack.Screen name="MasterCardPayment" component={MasterCardPaymentPage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    width: "100%",
  },
  container: {
    padding: 15,
  },
  header: {
    fontSize: 14,
    fontWeight: "600",
    color: "#525C76",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
});

export default HealthInsurance;
