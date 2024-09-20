import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>LOGIN</Text>
        <SafeAreaView style={styles.input}>
          <TextInput style={styles.inputText} placeholder="Email" />
        </SafeAreaView>
        <SafeAreaView style={[styles.input, styles.inputPassword]}>
          <TextInput style={styles.inputText} placeholder="Password" />
          <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/bb8e6498d17a21face18972834122eed' }} style={styles.icon} />
        </SafeAreaView>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.smallText}>When you agree to terms and conditions</Text>
          <Text style={[styles.smallText, styles.linkText]}>Forgot your password?</Text>
          <Text style={styles.smallText}>Or login with</Text>
        </View>
        <View style={styles.socials}>
          {['https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6296b6a9914aa659733b49c8f1ea894f',
            'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2c621e89680fd893eaa8c04bcf6d0d39',
            'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ca2f7db280e9c773e341589a81c15082'].map((uri, index) => (
            <View key={index} style={styles.socialButton}>
              <Image source={{ uri }} style={styles.iconSocial} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  background: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(49 170 82 / 0.25)' },
  title: { fontSize: 25, fontWeight: '700', marginBottom: 30 },
  input: { width: 330, height: 54, backgroundColor: 'rgba(196, 196, 196, 0.3)', justifyContent: 'center', paddingLeft: 17, marginBottom: 30 },
  inputText: { fontSize: 18 },
  inputPassword: { flexDirection: 'row', justifyContent: 'space-between', paddingRight: 17 },
  icon: { width: 38, height: 24.5 },
  button: { width: 330, height: 45, backgroundColor: '#E53935', justifyContent: 'center', alignItems: 'center'},
  buttonText: { fontSize: 18, fontWeight: '700', color: 'white' },
  textContainer: { alignItems: 'center', marginBottom: 30 },
  smallText: { fontSize: 14 },
  linkText: { color: '#5D25FA' },
  socials: { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' },
  socialButton: { width: 110, height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: '#25479B', borderRadius: 2 },
  iconSocial: { width: 30, height: 30 },
});
