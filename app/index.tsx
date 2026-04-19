import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your Full Name 
        Year and Section
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',           
    fontSize: 30,             
    textAlign: 'center',
  },
});