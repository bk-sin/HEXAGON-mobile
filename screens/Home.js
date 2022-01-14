import Hero from '../components/Hero'
import { ScrollView, Text } from 'react-native';

export default function Home({ navigation }) {
    return (
        <ScrollView >
        {/* <ImageBackground source={require('../assets/)} style={styles.skyImage}> */}
            <Hero/>
            {/* <Text style={styles.title}>Popular MyTineraries</Text> */}
            {/* <Carousel style={styles.carousel}/> */}
        {/* </ImageBackground> */}
        {/* <Footer style={styles.footer}/> */}
        </ScrollView>
    );
  }

  