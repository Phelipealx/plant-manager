import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Welcome() {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Gerencie {'\n'} suas plantas {'\n'} de forma fácil</Text>

            <Image source={wateringImg} />

            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity
                style={style.button}
                activeOpacity={0.6}
            >
                <Text>
                    <Feather
                        name="chevron-right"
                        style={style.buttonIcons}
                    />
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcons: {
        color: colors.white,
        fontSize: 32
    }
})