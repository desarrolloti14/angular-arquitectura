# Arquitectura en Angular 🖥️
Este proyecto tiene como finalidad mostrar una **arquitectura escalable** y  modular tomando las mejores practicas de Angular y la programación en general.

## Sobre la modularidad 📖
La arquitectura consiste en hacer todo modular, esto permite que la aplicación crezca sin conflicto de escalabilidad, haciendo reutilizables todo los módulos y lo que estas contienen. No solo es buena practicar crear proyectos modulares para su escalabilidad en angular, si no en mayor parte de los lenguajes, framewok o librerías, aun que es un hecho que angular tiene mejor estructurada la visión de la modularidad.

## Estructura de la arquitectura 🏗️
- app (Carpeta raiz)
    - core (Carpeta de servicios globales)
    - users (Modulo)
        - components (Carpeta contenedora de componentes)
            - index (Componente)
            - form (Componente)
        - services (Carpeta contenedora de servicios)
        - models (Carpeta contenedora de modelos(interfaces))
    - tasks (Modulo)
        - components (Carpeta contenedora de componentes)
            - index
            - form
        - services (Carpeta contenedora de servicios)
        - models (Carpeta contenedora de modelos(interfaces))
    - shared (Modulo)
        - header (Componente)
        - footer (Componente)

Por buena practica los nombres de variables, funciones, clases, carpetas etc se nombran en ingles por lenguaje global, aun que depende de la empresa no hay problema si son en español, no influye en su funcionalidad.

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