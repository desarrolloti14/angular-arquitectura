# Arquitectura en Angular 🖥️
Este proyecto tiene como finalidad mostrar una **arquitectura escalable** y  modular tomando las mejores practicas de Angular y la programación en general.

## Sobre la modularidad 📖
La arquitectura consiste en hacer todo modular, esto permite que la aplicación crezca sin conflicto de escalabilidad, haciendo reutilizables todo los módulos y lo que estas contienen. No solo es buena practicar crear proyectos modulares para su escalabilidad en angular, si no en mayor parte de los lenguajes, framewok o librerías, aun que es un hecho que angular tiene mejor estructurada la visión de la modularidad.

## Estructura de la arquitectura 🏗️
*ejemplo sobre la estrucrura de la carpeta*
- app (Carpeta raiz)
    - core (Carpeta de servicios globales)
    - demo (Modulo)
        - components (Carpeta contenedora de componentes)
            - post (Componente)
        - models (Carpeta contenedora de modelos(interfaces))
        - services (Carpeta contenedora de servicios)
    - landing (Modulo)
        - components (Carpeta contenedora de componentes)
            - about (componente)
            - home (componente)
            - review (componente)
    - shared (Modulo)
        - header (Componente)
        - footer (Componente)

En este ejemplo podemos ver como el cuerpo principal del proyecto esta modularizado, permitiendo el reutilizo de los componentes, cabe mencionar que aqui se muestra solo un ejemplo la estructura pude cambiar totalmente, aun que de forma modular claro...

Es buena practica nombrar variables, clases, funciones, carpetas archivos el ingles y minúsculas es por estándar y lenguaje universal, aun que el lenguaje puede cambiar, si la empresa pide nombrarlos en ingles no existe algún problema ya que no afecta a la funcionalidad.

Por ultimo el proyecto contiene algunos métodos o forma de crear una interfaz grafica, que si bien sin ellos puede funcionar una aplicación, si afecta directamente en el rendimiento.

## Metodos de construcción 🏗️
- LazyLoad (Carga lenta): Consiste en no cargar de primera instancia todos los módulos, componentes servicios etc. si no cargarlos solo cuando el usuario haga la petición sin afectar el termino SPA (single page aplication).
- Arquitectura modular: Estructura un software en pequeños pedazos para que estos sean reutilizables y la aplicación sea escalable.
- Routing modular: Cada modulo que sea una pieza de interfaz grafica debe de tener su propia routing para enrutar sus componentes sin que este afecta al routing principal.
- Conexión API: La conexión se realizo a una API Rest publica los métodos funcionan pero no se verán reflejados (Puedes hacer las pruebas en un Postman).

## Funciones utilizadas
- Reactive Forms
- Observable
- HttpModule

## Tecnologias 🛠️
- Angular 12.2.6
    - TypeScript 4.3.5
    - rxjs 6.6.7
- Bootstrap 5.1.1
    - Bootstrapwatch - Lux 5.0

## Requisitos ✅
- nodejs 14.14.6
- npm 7.10.0
- angular CLI 12.2.6

## Ejecutar 🏳️
Paso 1
```
npm install
```
Paso 2
```
ng serve -o
```

## Escrito por 👨‍💻
*GitHub: [Moises Arrona](https://github.com/moisesarrona)*