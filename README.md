**Juan Santillán**

<p align="center">
  <img src="/imgReadme/react-raro.PNG" width="100" height="100"/>
  <img src="/imgReadme/noobsjs.png" width="100" height="100"/>
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

**Eventos > Synthetic Events:**