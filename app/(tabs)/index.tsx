import React from 'react';
import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://c.wallhere.com/photos/97/a2/One_Piece_Roronoa_Zoro_swordsman_sword_katana_red_eyes_demon_eyes-2242500.jpg!d' }}
            style={styles.reactLogo}
          />
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja Bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Eu sou Pedro Ramos</ThemedText>
        <ThemedText>
        Este e meu primeiro projeto, queria somente verificar como é feita a   e estrutura de pasta dos components e etc.

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Resolvi alguns problemas de instalação</ThemedText>
        <ThemedText>
Se a renderização no celular não funcionar deixe de lado o QR Code, utilize o IP do seu computador na porta 8082.
Para conseguir o IP utilize o Windows+R > Cmd > ipconfig        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">E por ultimo </ThemedText>
        <ThemedText>
Bora Codar 😎          
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reactLogo: {
    width: '100%',
    height: undefined, // Necessário para usar aspectRatio
    aspectRatio: 1, // Ajuste a proporção conforme necessário
  },
});
