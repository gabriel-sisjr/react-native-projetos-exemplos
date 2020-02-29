# Uso de mapas e marcação de rota com React-Native

<!-- MAPS -->
# react-native-maps -> [Documentação Oficial](https://github.com/react-native-community/react-native-maps)


## **Instalação**


### 1° Passo
Instale a dependência via npm:
```
npm install react-native-maps --save-exact
```
ou via yarn:
```
yarn add react-native-maps -E
```

<!-- Lista de avisos -->
#### Avisos:
* *Foi utilizada as flags "--save-exact"(npm) e "-E"(yarn) para que o gerenciador instale a dependência na versão **EXATA** da lib, para evitar que o gerenciador de pacotes atualize a dependência futuramente e "quebre" sua aplicação.*
* *Se a sua versão do React Native for maior que 0.60 o link é feito de maneira automática. Já para versões abaixo do 0.60, recomendo seguir [a documentação oficial](https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md) e olhar a parte (React Native 0.59 or lower), onde é explicado a instalação sem o [Autolinking](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md).*
<!-- FIM Lista de avisos -->

### 2° Passo
#### Configurando IOS (React Native 0.60 ou maior)
```
cd ios
pod install
```

#### Envio para App Store
O arquivo `Info.plist` do aplicativo deve conter um `NSLocationWhenInUseUsageDescription` com uma string de finalidade voltada para o usuário, explicando clara e completamente por que o aplicativo precisa da localização, caso contrário, a Apple rejeitará o envio do aplicativo.

#### Habilitando Google Maps no IOS (React Native todas versões)
Se você deseja ativar o Google Maps no iOS, obtenha a chave da API do Google para IOS [(aqui)](https://developers.google.com/maps/documentation/ios-sdk/get-api-key) e edite seu `AppDelegate.m` da seguinte maneira:
~~~objc
+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // Adicione essa linha utilizando sua API_KEY obtida do Google Console
...
~~~
O `[GMSServices provideAPIKey]` deve ser a **primeira chamada** do método.

(React Native 0.60 ou maior): Adicione o seguinte ao seu Podfile acima da função `use_native_modules!`:
  ```ruby
    # Dependências do React Native Maps
    rn_maps_path = '../node_modules/react-native-maps'
    pod 'react-native-google-maps', :path => rn_maps_path
    pod 'GoogleMaps'
    pod 'Google-Maps-iOS-Utils'
  ```
E então execute `pod install` na pasta ios.

(React Native 0.59 ou menor): [Siga esses passos.](https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md#enabling-google-maps-on-ios-react-native-all-versions)

Feito isso, tudo funcionará normalmente! 👍

---
#### Configurando Android (React Native 0.60 ou maior)
Configurando o `build.gradle` na raíz da pasta `android`.
```groovy
buildscript {
    ext {
        buildToolsVersion = "28.0.3"
        minSdkVersion = 16
        compileSdkVersion = 28
        targetSdkVersion = 28

        // Adicione esta linha.
        supportLibVersion = "28.0.0" 
    }
    ...
}
```
> Essas versões são do meu `build.gradle`, podendo haver divergências.

Após a adição do código no `build.gradle`, adicione a TAG abaixo com a sua API_KEY [(obtida aqui)](https://developers.google.com/maps/documentation/android-sdk/get-api-key) do google maps no `AndroidManifest.xml` que encontra-se em `android/app/src/main/AndroidManifest.xml`.

```xml
<application>
   <!-- Essa TAG "meta-data" deverá ficar dentro da TAG application. -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="API_KEY_AQUI"/>
</application>
```
> XML é case sensitive, então adicione exatamente como está. 

Adicionei no `AndroidManifest.xml` a solicitação de permissão para o app utilizar a localização.
```xml
<!-- Adicionar acima da TAG application -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```
> A permissão deverá ser chamada via código na aplicação durante a montagem do componente, caso não utilize a TAG no `AndroidManifest` ou não seja permitido o uso da localização na execução do aplicativo, deverá ser ativado manualmente nas configurações da aplicação, caso contrário, o mapa não funcionará.

(React Native 0.59 ou menor): [Siga esses passos.](https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md#build-configuration-on-android)

Feito isso, tudo funcionará normalmente! 👍

---

<!-- Directions -->
# react-native-maps-directions -> [Documentação Oficial](https://github.com/bramus/react-native-maps-directions)

## **Instalação**

Instale a dependência via npm:
```
npm install react-native-maps-directions
```
ou via yarn:
```
yarn add react-native-maps-directions
```

Feito isso, tudo funcionará normalmente! 👍

---
<!-- MAPS -->
# react-native-geolocation-service -> [Documentação Oficial](https://github.com/Agontuk/react-native-geolocation-service)

## **Instalação**

Instale a dependência via npm:
```
npm install react-native-geolocation-service
```
ou via yarn:
```
yarn add react-native-geolocation-service
```

> Você precisa incluir a chave `NSLocationWhenInUseUsageDescription` no `Info.plist` para ativar a localização geográfica ao usar o aplicativo. Para ativar a localização geográfica em segundo plano, você precisa incluir a chave `NSLocationAlwaysUsageDescription` no `Info.plist` e adicionar local como um modo de segundo plano na guia 'Capabilities' no Xcode.<br>
> Esta biblioteca usa [@react-native-community/geolocation](https://github.com/react-native-community/react-native-geolocation). Ele será instalado junto com esta biblioteca. As instruções a seguir descrevem como integrá-lo ao seu projeto.

#### Configurando IOS (React Native 0.60 ou maior)

 - Atualize seu `Podfile`
    ```objc
    pod 'react-native-geolocation', path: '../node_modules/@react-native-community/geolocation'
    ```
 - Após isso execute o comando `pod install` dentro da pasta `ios`.

 (React Native 0.59 ou menor): [Siga esses passos.](https://github.com/Agontuk/react-native-geolocation-service#ios)

 #### Configurando Android (React Native 0.60 ou maior)
 
- __Nenhuma configuração adicional é necessária para versão 0.60 ou superior .__

 (React Native 0.59 ou menor): [Siga esses passos.](https://github.com/Agontuk/react-native-geolocation-service#android)

Feito isso, tudo funcionará normalmente! 👍

---