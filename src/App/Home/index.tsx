import { StatusBar, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          backgroundColor: "#316643",
          padding: 10
        }}
      >
        <NavBar />
      </View>

      
      <Footer />
      
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaView>
  );
}
