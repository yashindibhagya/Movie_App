import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import TrendingMovies from '../../components/trendingMovies';

export default function index() {

  const [trending, setTrending] = useState([1, 2, 3]);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ marginTop: Platform.OS === 'ios' ? -40 : 40 }}>
        <StatusBar style='light' />
        <View style={styles.safeView}>
          <Octicons name="three-bars" size={30} color="white" />
          <Text style={styles.movies}>Movies</Text>
          <Feather name="search" size={30} color="white" />
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <TrendingMovies data={trending} />
      </ScrollView>


    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937', // equivalent to bg-neutral-800
  },
  safeArea: {

  },
  safeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20
  },
  movies: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
}) 