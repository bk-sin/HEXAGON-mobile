import React from 'react';
import Hero from '../components/Hero'
import { ScrollView } from 'react-native';

export default function Home({ navigation }) {
    return (
        <ScrollView >
            <Hero navigation={navigation}/>
        </ScrollView>
    );
  }

  