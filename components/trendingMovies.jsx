import React from 'react';
import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

var { width, height } = Dimensions.get('window');

export default function TrendingMovies({ data }) {
    return (
        <View style={{ marginBottom: 8 }}>
            <Text style={{ color: '#fff', fontSize: 'xl', marginBottom: 5 }}>TrendingMovies</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard movie={item} />}
                sliderWidth={width}
                itemWidth={width * 0.62}
                firstItem={1}
                inactiveSlideScale={0.60}
                slideStyle={{ display: 'flex', alignItems: 'center' }}
            />
        </View>
    )
}

const MovieCard = ({ item }) => {
    return (
        <TouchableWithoutFeedback>
            <Image
                source={require('../assets/images/plant.png')}
                style={{
                    width: width * 0.6,
                    height: height * 0.4,
                    borderRadius: 30
                }}

            />
        </TouchableWithoutFeedback>
    );
}