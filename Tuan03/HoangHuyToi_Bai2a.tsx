import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const renderInput = (placeholder, iconUri, hasRightIcon = false) => (
    <SafeAreaView style={styles.input}>
      <View style={styles.inputContent}>
        <Image source={{ uri: iconUri }} style={styles.icon} />
        <TextInput style={styles.text} placeholder={placeholder} />
        {hasRightIcon && <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bb8e6498d17a21face18972834122eed' }} style={styles.icon} />}
      </View>
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.gradient} colors={['#FBCB00', '#BF9A00']}>
        <Text style={styles.title}>LOGIN</Text>
        {renderInput('Name', 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/32ddd7aa5495a0bfa4a48d0ffa4c4fd6')}
        {renderInput('Password', 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/648401a3fc2da07be619ea0fcd822ae1', true)}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  gradient: { flex: 2, padding: 20 },
  title: { fontSize: 30, fontWeight: '700', marginBottom: 20 },
  input: { width: 330, height: 54, backgroundColor: 'rgba(196, 196, 196, 0.3)', borderWidth: 1, borderColor: '#F2F2F2', marginBottom: 20 },
  inputContent: { flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingRight: 20 },
  icon: { width: 32, height: 32 },
  text: { fontSize: 18, paddingLeft: 20, flex: 1 },
  button: { width: 330, height: 45, backgroundColor: '#060000', justifyContent: 'center', alignItems: 'center', marginVertical: 50 },
  buttonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  createAccount: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});
