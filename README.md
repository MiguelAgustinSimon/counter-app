# 🏗️ Proyecto Base de React Native

¡Bienvenido al **proyecto base** de React Native! 🚀

Este es un **esqueleto** optimizado para desarrollar aplicaciones móviles con React Native de manera rápida y eficiente. Incluye las dependencias más utilizadas, como:

✅ `react-native-paper` (Componentes UI con Material Design)  
✅ `Ionicons` (Íconos personalizables para tu app)  

Este repositorio está diseñado para ser una **plantilla base**, evitando la instalación manual de paquetes en cada nuevo proyecto.

---

## 📥 Cómo usar este proyecto base
Sigue estos pasos para crear un nuevo proyecto basado en este esqueleto:

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git NUEVO_PROYECTO
```
📌 *Reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con la URL real del repositorio.*

---

### 2️⃣ Ingresar al nuevo proyecto y reiniciar Git
```bash
cd NUEVO_PROYECTO
rm -rf .git
```
💡 *Este comando elimina el historial de Git para que puedas iniciar un nuevo repositorio sin rastros del proyecto base.*

---

### 3️⃣ Instalar las dependencias del proyecto
```bash
npm install
```
Esto instalará todas las dependencias necesarias.

---

### 4️⃣ Instalar los pods (iOS)
```bash
npx pod-install
```
📌 *Este paso es obligatorio si desarrollas para iOS.*

---

### 5️⃣ Ejecutar el proyecto en iOS o Android
🔹 Para iOS:
```bash
npm run ios
```
🔹 Para Android:
```bash
npm run android
```

---

## 🔄 Crear un nuevo repositorio en GitHub
Si deseas subir este nuevo proyecto a un repositorio en GitHub:

```bash
git init
git add .
git commit -m "Initial commit from React Native base"
git remote add origin https://github.com/TU_USUARIO/NUEVO_REPO.git
git branch -M main
git push -u origin main
```
📌 *Reemplaza `NUEVO_REPO` con el nombre de tu nuevo repositorio.*

---

## 📦 Paquetes incluidos
Este proyecto base ya viene con algunas dependencias esenciales:

- `react-native-paper` → Material Design UI para React Native.
- `react-native-vector-icons` → Biblioteca de iconos, incluyendo `Ionicons`.
- `@react-navigation/native` (Opcional) → Si deseas agregar navegación fácilmente.

---

## 🚀 Mejores prácticas recomendadas
🔹 Usa `react-native-rename` para cambiar el nombre del proyecto fácilmente:
```bash
npx react-native-rename "MiNuevaApp"
```
🔹 Configura `.env` con `react-native-config` para manejar variables de entorno.
🔹 Usa `eslint` y `prettier` para mantener un código limpio y consistente.

---

¡Listo! Ahora tienes un **proyecto base** listo para expandirse. 🚀🔥
