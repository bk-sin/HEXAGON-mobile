
import React from 'react';
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import AboutSection from '../components/AboutSection'


import { ScrollView } from 'react-native';

export default function Home({ navigation }) {
    return (
        <ScrollView >
            <Hero navigation={navigation}/>
            <Categories />
            <AboutSection />
        </ScrollView>
    );
  }