# 🏗️ Proyecto Base de React Native

¡Bienvenido al **esqueleto de React Native**! 🚀

Este proyecto base incluye:
✅ `react-native-paper` (Componentes UI con Material Design)  
✅ `Ionicons` (Íconos personalizables)  
✅ `react-native-config` (Manejo de variables de entorno)  

---

## 📥 Uso rápido
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git NUEVO_PROYECTO
cd NUEVO_PROYECTO
rm -rf .git
```

### 2️⃣ Instalar dependencias
```bash
npm install
npx pod-install  # Solo para iOS
```

### 3️⃣ Ejecutar la app
```bash
npm run ios  # Para iOS
npm run android  # Para Android
```

---

## 🌍 Variables de Entorno
1. Instalar `react-native-config` (ya incluido en este proyecto):
   ```bash
   npm install react-native-config
   ```
2. Crear un archivo `.env` en la raíz con:
   ```ini
   API_URL=https://api.miapp.com
   APP_NAME=MiApp
   DEBUG_MODE=true
   ```
3. Usarlas en el código:
   ```javascript
   import Config from 'react-native-config';
   console.log(Config.API_URL);
   ```

### 🔹 Configuración en Android
En `android/app/build.gradle`, asegúrate de incluir:
```gradle
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

### 🔹 Configuración en iOS
1. Abre `ios/MyApp.xcworkspace` en Xcode.
2. Ve a **Build Settings > All > User-Defined** y agrega las variables.

---

## 🚀 Extras
✅ Usa `react-native-rename` para cambiar el nombre del proyecto:
   ```bash
   npx react-native-rename "MiNuevaApp"
   ```
---

¡Listo! Ahora tienes un **proyecto base** listo para usar. 🚀🔥

