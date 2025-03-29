![image](https://github.com/user-attachments/assets/861458eb-5ef7-47f2-a9bb-456d0f813610)

Instalacion de dependencias nativas (NO USANDO expo install)
- npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

Instalar el Stack Navigator
- npm install @react-navigation/native-stack

Instalar peer dependencias faltantes
- npm install react-native-svg

Enlazar librerias (Solo si react native RN es < 0.60 o por si acaso)
- npx react-native link

Limpiar y correr el proyecto
- npx react-native start --reset-cache
- npx react-native run-web

Agregar el CLI Interno
- npm install --save-dev @react-native-community/cli

Limpiar y correr el proyecto nuevamente
- npx react-native start --reset-cache
- npx react-native run-web
