import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scan = ({ userData }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const foundUser = userData.find(user => user.email == data);

    if (foundUser) {
      alert(`Welcome back ${foundUser.firstName}!`);
    } else {
      alert(`This user is not currently enrolled. Please try scanning again.`);
    }
  };

  if (hasPermission === null) {
    console.log("requesting for camera permission");
  }
  if (hasPermission === false) {
    console.log("No access to camera");
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    flex: 1,
    flexDirection: 'column'
  }
});

export default Scan;
