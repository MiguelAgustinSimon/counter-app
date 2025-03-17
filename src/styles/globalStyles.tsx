import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centra todo en la pantalla
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    paddingBottom: 20, // Espacio entre el título y los botones
  },
  buttonContainer: {
    flexDirection: 'row', // Pone los botones en línea
    alignItems: 'center', // Asegura alineación vertical
    justifyContent: 'center', // Centra horizontalmente
    gap: 20, // Espacio entre botones
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonPressed:{
    backgroundColor:'#008000'
  }
});