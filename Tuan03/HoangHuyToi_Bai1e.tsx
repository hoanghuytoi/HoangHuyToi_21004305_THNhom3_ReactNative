import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const renderInput = (placeholder) => (
    <SafeAreaView style={styles.input}>
      <TextInput style={styles.inputText} placeholder={placeholder} />
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>REGISTER</Text>
        {['Name', 'Phone', 'Email', 'Birthday'].map((placeholder) => renderInput(placeholder))}
        <SafeAreaView style={[styles.input, styles.inputPassword]}>
          <TextInput style={styles.inputText} placeholder="Password" />
          <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bb8e6498d17a21face18972834122eed' }} style={styles.icon} />
        </SafeAreaView>
        <View style={styles.checkGender}>
          {['Male', 'Female'].map((gender) => (
            <View style={styles.genderOption} key={gender}>
              <RadioButton value={gender} />
              <Text>{gender}</Text>
            </View>
          ))}
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </Pressable>
        <Text style={styles.termsText}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  background: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(49, 170, 82 / 0.25)' },
  title: { fontSize: 25, fontWeight: '700', marginBottom: 20 },
  input: { width: 330, height: 54, backgroundColor: 'rgba(196, 196, 196, 0.3)', justifyContent: 'center', paddingLeft: 17, marginBottom: 15 },
  inputText: { fontSize: 18 },
  inputPassword: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: 17 },
  icon: { width: 38, height: 24.5 },
  button: { width: 330, height: 45, backgroundColor: '#E53935', justifyContent: 'center', alignItems: 'center', marginTop: 15 },
  buttonText: { fontSize: 18, fontWeight: '700', color: 'white' },
  termsText: { fontSize: 14, marginTop: 25 },
  checkGender: { flexDirection: 'row', justifyContent: 'flex-start', width: 330, paddingLeft: 25},
  genderOption: { flexDirection: 'row', alignItems: 'center' },
});
