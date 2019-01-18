**Juan Santillán**

<p align="center">
  <img src="/imgReadme/react-raro.PNG" width="100" height="100"/>
  <img src="/imgReadme/geguriyut.jpg" width="100" height="100"/>
</p>

**ReactJS**

React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React. Uno de sus puntos más destacados, es que no sólo se utiliza en el lado del cliente, sino que también se puede representar en el servidor, y trabajar juntos.

**WebPack**

Es un paquete de código abierto de JavaScript. Su propósito principal es agrupar los archivos JavaScript para su uso en un navegador, pero también es capaz de transformar, agrupar o empaquetar casi cualquier recurso o activo.

Para hacer un desarrollo modular.
Nos permite separar nuestro codigo en archivos y carpetas, utilizar nmp o yarn como gestor de dependencias.
Genera archivo unico JS (bundle).

**Entry:**

Indica cual es el punto de entrada donde empieza la aplicacion.

**Output:**

Indica cual es el punto de salida o los puntos de salida.

**Loaders:**

Realizan transformaciones en los archivos.

**Plugins:**

Realizan acciones en los archivos.

**ReactJS**

<p align="center">
  <img src="/imgReadme/react-raro.PNG" width="100" height="100"/>
</p>

**Componentes:**

  Un componente en React simplemente es una pieza de UI (user interface), que tiene una funcionalidad independiente definida.

**Renderizacion > render():**

  Es el metodo que se encarga de visualizar el codigo HMTL de los componentes React en el navegador.
  Se llama automaticamente cuando se crea el componente o cuando su estado cambia.

**Propiedades > props:**

  Son el mecanismo principal de React para pasar datos de un componente superior (padre) a uno inferior (hijo).
  Son informacion externa utilizada para definir aspectos del componente.
  Son INMUTABLES.
  Un Componente no puede cambiar sus Propiedades, estas quedan fijas durante todo el ciclo de vida del mismo.

  **+PropTypes:**
    
  Los componentes en React estan diseñados para poder agruparlos en componentes mas grandes y ser reutilizados.
  Por tal es una buena practica definir explicitamente las propiedades que acepta un componente, cuales son requeridas y los tipos de dato de cada una.

  **+DefaultProps:**
    
    Cuando queremos asignar el valor a una propiedad y este no se proporciona, podemos usar el objeto defaultProps.

    Validadores de PropTypes (Especiales)
      PropTypes.node:
        Cualquier tipo que pueda mostrar su valor [number, string, boolean, elemento de arreglo]
      PropTypes.element:
        Un elemento de React.
      PropTypes.instanceOf:
        Una instancia de una clase.
      PropTypes.oneOf:
        Este limitado a un numero especifico de valores.

**Estado > state:**

  - Representa como se encuentra un componente en un momento especifico.
  - Es Mutable.
  - Cada que el estado cambie, el componente se renderizara automaticamente.
  - Si queremos cambiar el estado, tenemos a nuestra disposicion el metodo:
  - .setState()
  - No se Hereda, no tiene herencia, fin.
  - Solo el componente tiene la capacidad de modificar su estado, ni el Padre ni los Hijos podran hacerlo.
  Es muy util para contener datos en el componente, o para enviar informacion a los Hijos en forma de propiedad.

**Eventos > Synthetic Events:**

- Sirven para modificar el estado del componente.
- Mientras que las propiedades se pasan de padres a hijos, los eventos se disparan de hijos a padres.
- Un evento que dispare un hijo, puede capturarlo el padre.

**Autobinding**

- Los componentes declarados como clases ES6, los metodos siguen la misma semantica que las clases. No enlazan automaticamente **this** a la instancia.

**Delegacion de Eventos**

- Los eventos en JSX se nombran con **camelCase**, en vez de lowercase y se pasan como funcion en vez de cadena.
- React no genera manejadores de eventos por cada nodo. Cuando arranca, escucha todos los eventos en el nivel superior con un simple listener.

**Tipos de Componentes**

**Staless**

- Los componentes de presentacion se limitan a mostrar datos y no tienen estado.
- Es preferible que la mayoria de los componentes de una aplicacion sean de este tipo porque son mas faciles de manejar.
- Orientados al aspecto visual.
- No tienen dependencia con fuentes de datos.
- Reciben callbacks por medio de props.
- Pueden ser escritos como componentes funcionales.
- No tienen estado, monkaS.

**Stateful**

- Los componentes contenedores encapsulan a otros componentes y proporcionan propiedades, ademas se encargan de manejar el estado de la aplicacion.
- Orientados al funcionamiento de la aplicacion.
- Se comunican con las fuentes de datos.
- Contienen componentes de presentacion u otros contenedores.
- Tienen estado, monkaS.

**Stateless vs Stateful**

Ventajas de esto:

- Favorece la separacion de responsabilidades, cada componente debe tener una unica tarea.
- Al tener la logica de estado y los elementos visuales por separado es mas facil reutilizar los componentes.
- Se simplifica la tarea de hacer pruebas unitarias.
- Se mejora el rendimiento de la aplicacion.
- La aplicacion es mas facil de entender.

**Componente con JSX y ES6**

```
class MyComponentStateful extends React.Component {
    constructor (...props) {
        super(...props)
        this.state = {...}
    }
    render() {...}
}

MyComponentStateful.propTypes = {...}
MyComponentStateful.defaultProps = {...}

const MyComponentStateless = (...props) => {}
```

**Mas de los componentes**

**Ciclo de vida de los componentes**

- Casi todos los componentes de React tienen un ciclo de vida.
- Montaje, Actualizacion y Desmontaje.
- Ofrecen puntos de captura para ejecutar codigo en cada etapa.

<p align="center">
  <img src="/imgReadme/cicloComponentesReact.png"  height="200"/>
</p>

**Primer renderizado**

**componentWillMount()**

- Se ejecuta una vez, tanto en cliente como servidor, inmediatamente antes del primer render(). Si usas setState en este metodo, render() se ejecutara una vez a pesar de haber disparado un cambio de estado.

**componentDidMount()**

- Se ejecuta una vez, solo en cliente, inmediatamente despues del primer render(). Las referencias en el DOM ya existen y es el lugar ideal para hacer peticiones AJAX, integrar lirerias externas, crear eventos, poner timers, etc.
- El componentDidMount() de los hijos sera ejecutado antes que el del padre.

**Cambios de las propiedades (Fase de actualizacion)**

**componentWillReceiveProps(nextProps)**

- Se ejecuta cuando el componente reciba nuevas propiedades. No se ejecuta con el primer render().
- Esta funcion recibe como parametro las nuevas propiedades, muy util para hacer comparaciones y actualizar el estado segun las propiedades.

**shouldComponentUpdate(nextProps, nextState)**

- Se ejecuta justo antes de volver a renderizare con las nuevas props y estado. No se ejecuta con el primer render().
- Esta funcion recibe como parametro las nuevas propiedades y el nuevo estado siempre debe devolver un valor booleano. Por defecto siempre devuelve true.

**componentDidUpdate(prevProps, prevState)**

- Se ejecuta justo despues de renderizarse. No se ejecuta con el primer render(). Recibe como parametro las propiedades y estados anteriores.
- Este es un buen lugar para trabajar con el DOM del componente, porque en este punto tenemos todos los cambios representados con el nuevo render().

**Componente se desmonta (Fase de desmontaje)**

**componentWillUnmount(prevProps, prevState)**

- Se ejecuta justo antes que el componente se elimine del DOM. Especialmente util para limpiar eventos asignados a las referencias del DOM del componente, eliminar timers y limpiar observadores.

**Componentes Dinamicos**

Componentes que renderizan componentes totalmente diferentes segun el estado o las propiedades asignadas.

- Utiles para renderizar:
- Un componente para cuando no tenemos resultados y otro para cuando si.
- Un componente para indicar que estamos cargando el contenido.
- Una lista de componentes.

**Anidamiento de Vistas**

- Es muy facil crear estructuras anidadas con React.

Ventajas:

- Codigo mas limpio.
- Reutilizar el maximo codigo posible.
- Convertir estructuras complejas en mas sencillas y reutilizables.