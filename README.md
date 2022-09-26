<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://drive.google.com/uc?export=view&id=1lXh66UaJXOf67HXmoTIgMRz55YxqA6G-" alt="People"></a>
</p>

<h3 align="center">People Challenge</h3>

---

<p align="center"> Few lines describing your project.
  <br>
</p>

- [About](#questions)
- [Getting Started](#getting_started)
- [Structure](#structure)
- [Authors](#authors)

## 🧐 Questions <a name = "questions"></a>

Questions:

### Pregunta 1:

- Supongamos que en un repositorio GIT hiciste un commit y te olvidaste un archivo.
Explica cómo se soluciona si hiciste push, y cómo si aún no hiciste.
De ser posible, busca que quede solo un commit con los cambios.

```
* NUEVAS ADICIONES AL PR
* adicionar el comentario - confirmar commit
* git push -f origin BRANCH-XXXXX
* git checkout master
* git pull --rebase // se descarga todo lo ultimo
* git checkout BRANCH-XXXXX
* git rebase master --interactive
* Verificar en el Git Graph
* git push -f origin BRANCH-XXXXX
* git checkout master
* git merge --squash BRANCH-XXXXX
* dejar el ultimo comentario - git commit desde linea comandos o directamente desde el visual studio.
* git branch -m BRANCH-XXXXX TEMP-BRANCH-XXXXX
* git branch -m BRANCH-XXXXX
* git branch -D BRANCH-XXXXX
* verificar en el Git Graph que mi branch este renombrado correctamente y arriba de todo
```

### Pregunta 2:

- ¿Qué se utiliza en ReactJS para pasar datos de un padre al hijo?

```
Lifting (alzamiento) para pasar datos de hijos a padres. Lifting es una técnica que consiste en pasar funciones a los hijos/as y que sean estos quienes se encarguen de ejecutarlas cuando sea necesario, provocando un cambio hacia arriba, en los padres.
```

### Pregunta 3:

- ¿Cuál o cuáles métodos se invocan en ReactJS antes de que el elemento se inserte
en el DOM?

```
La primera fase ocurre solo una vez por componente cuando este se crea y monta en la UI. Esta fase se divide en 4 funciones.
constructor(props)
Este método se ejecuta cuando se instancia un componente.

componentWillMount()
Este método se ejecuta cuando el componente se está por renderizar.

render()
En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente. 
```

### Pregunta 4:

- Si React se centra en construir la UI, ¿puedes decirme algunos problemas con los que
nos podemos encontrar desarrollando apps en React?

```
- grandes listas de datos, - Largas listas de artículos.
- renders inútiles, - renderizaciones desperdiciadas
- optimización de motores de búsqueda (SEO),
- descomposición de las capas lógica y de interfaz de usuario.
- Al final del día, React solo resuelve los problemas de la interfaz de usuario
- Altos tiempos de carga en aplicaciones React complejas
- División de código
- Grandes módulos de terceros
- Representación del lado del servidor
- Problemas de indexación de motores de búsqueda
```

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

What things you need to install the software and how to install them.

```
npm --version
14.18.3 or superior
```

### Installing

Install all dependencies:

```
npm i
```

To run the project locally:

```
npm run start
```

## ⛏️ Structure: <a name = "structure"></a>

### assets

- I host all the images and icons resources statically.

### components

- I host the shared components throughout the app like the MVP or WhiteBoard

### constants

- hosts all database connection parameters and LMS and endpoints

### entities

- hosts all typed entities that are the responses coming from the backend

### hooks

- it hosts all the main logic of the application that calls the redux actions and obtains, through selectors, the properties that are needed in the components and pages of the app

### views

- hosts all the pages grouped by the different phases of which this project is composed

```
1. Login
2. People
```

### redux

- hosts all storage logic, actions, types, reducers, react-redux-persist, initialState, store

### services

- hosts all the logic for calling the backend endpoints

### styles

- hosts all the css styles of the application

### utils

- hosts utility functions based on the current path of the app that help specify conditions and declarations

## ✍️ Authors <a name = "authors"></a>

- [@daniel.gallo](https://github.com/dany338)
