import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.info}>Course & Section: Bachelor of Science In Information System_3B</Text>
        <Text style={styles.info}>Name: Margarette Austria Calumpiano</Text>
        <Text style={styles.info}>Age: 21</Text>
        <Text style={styles.info}>Favorite Hobby: Reading, Drawing, Sleeping</Text>
        
        <View style={styles.peevesContainer}>
          <Text style={styles.peeveTitle}>3 Pet Peeves:</Text>
          <Text>1. Maingay sa Class.</Text>
          <Text>2. Unclear Instructions.</Text>
          <Text>3. Barely participating in class during group activities.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#27146e',
  },
  card: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  info: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  peevesContainer: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#7329b8',
  },
  peeveTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default ProfileDemo;