import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput } from 'react-native';
import Svg, { Line } from 'react-native-svg';

export default function App() {
  const renderInput = (placeholder, iconUri) => (
    <SafeAreaView style={styles.input}>
      <Image source={{ uri: iconUri }} style={styles.icon} />
      <TextInput style={styles.inputText} placeholder={placeholder} />
    </SafeAreaView>
  );

  const renderLoginMethod = (iconUri, bgColor) => (
    <View style={[styles.loginMethod, { backgroundColor: bgColor }]}>
      <Image source={{ uri: iconUri }} style={styles.icon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9791d1eb6ef5c463f756c462c12184aa' }} style={styles.logoImage} />
      </View>
      {renderInput('Please input user name', 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/cd05ffc853571d079b05609a1ad9f1d2')}
      {renderInput('Please input password', 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/86c3c5d221607125e9e3f93fdb32497a')}
      <Pressable style={styles.buttonLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
      <View style={styles.underButton}>
        <Text style={styles.linkText}>Register</Text>
        <Text style={styles.linkText}>Forgot Password</Text>
      </View>
      <View style={styles.otherLoginText}>
        <Svg height="18" width="62"><Line x1="0" y1="10" x2="100%" y2="10" stroke="#0E18F5" strokeWidth="1" /></Svg>
        <Text style={styles.linkText}>Other Login Methods</Text>
        <Svg height="18" width="62"><Line x1="0" y1="10" x2="100%" y2="10" stroke="#0E18F5" strokeWidth="1" /></Svg>
      </View>
      <View style={styles.otherLogin}>
        {renderLoginMethod('https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6f8f97b56b9a771a8f44abe2fa54b068', '#3AB4FF')}
        {renderLoginMethod('https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4572d7bddb451d3dd79928d245cecd1a', '#F4AA47')}
        {renderLoginMethod('https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6296b6a9914aa659733b49c8f1ea894f', '#3A579C')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 30 },
  logo: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoImage: { width: 140, height: 140 },
  input: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#C4C4C4', marginBottom: 30, alignItems: 'center', width: 300, height: 50 },
  inputText: { fontSize: 18, color: 'black', marginLeft: 10, flex: 1 },
  icon: { width: 30, height: 30 },
  buttonLogin: { width: 300, height: 48, backgroundColor: '#386FFC', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 30 },
  buttonText: { fontSize: 18, color: 'white' },
  underButton: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  linkText: { fontSize: 18 },
  otherLoginText: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  otherLogin: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  loginMethod: { width: 74, height: 74, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
});
