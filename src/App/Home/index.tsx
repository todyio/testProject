import { StatusBar, View, Text, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';

export function Home() {

  const [matricula, onChangeMatricula] = React.useState("")
  const [senha, onChangeSenha] = React.useState("")


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
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

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
            fontWeight: "bold",
            color: "#444"
          }}
        >
          Um jeito mais fácil de ficarmos conectados!
        </Text>


        <FontAwesome name="user-circle" size={40} color="#444" />

        <TextInput
          style={{
            height: 40,
            width: "80%",
            borderWidth: 1,
            borderColor: "#ccc",
            margin: 12,
            padding: 8
          }}
          placeholder="Digite a Matrícula"
          onChangeText={onChangeMatricula}
          value={matricula}
        >
        </TextInput>

        <TextInput
          style={{
            height: 40,
            width: "80%",
            borderWidth: 1,
            borderColor: "#ccc",
            margin: 12,
            padding: 8
          }}
          placeholder="Digite a Senha"
          onChangeText={onChangeSenha}
          value={senha}
          secureTextEntry
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#e46b1b",
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={() => Alert.alert("Sucesso", "Aguarde, estamos te redirecionando para a tela principal!")}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Avançar
          </Text>
        </TouchableOpacity>

      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        <Image source={require("../../../assets/mobile.png")}
          style={{
            width: 200,
            height: 250,
            marginBottom: 25
          }}
        >
        </Image>
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
