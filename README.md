
# Proyecto Vite, Tienda Online Funcional

El proyecto consiste en crear una tienda online cuyo objetivo es conseguir a través de JavaScript pintar una cantidad de productos mediante DOM y una sección de filtros que se muestre una vez el cliente haya elegido por categoría.


## Acerca del Proyecto

El proyecto está basado en la venta online de diferentes marcas especializadas en camisetas, camisas y chaquetas. Algo parecido a JD Sports o ASOS. El diseño de la web está inspirado en diseños similares encontrados en Figma.


## Requisitos JavaScript

[ ] El HTML de la web se genera de forma dinámica mediante los tag templates que se habrá definido en JavaScript. Se permitirá tener de base dos secciones .filter y .products para introducir elementos dentro con JavaScript para el DOM.

[ ] Se recorrerá la lista de productos y se creará una carta de producto para cada elemento de forma dinámica por medio de for o de .forEach.

[ ] Se definirán al menos dos filtros para los productos en la parte izquierda del documento.

[ ] El primer filtro será un elemento [select](Select MDN) que muestra todos los vendedores (seller) distintos que hay en los productos del proyecto; y que al ser clickado, hará que el documento solamente muestro los elementos que tengan la propiedad seller con el mismo valor. Para esto, se definirán al menos 4 seller distintos en los productos del objeto products.

[ ] El segundo filtro será un input de tipo number acompañado de un botón que contenga el texto “Buscar”. El usuario podrá introducir una cantidad de dinero en el filtro y pulsar buscar, esto hará que solo aparezcan en pantalla los elementos cuyo precio (price) sea menor que esta cantidad.

[ ] Habrá un botón “Limpiar Filtros” que al ser pulsado, volverá a pintar en pantalla todos los productos, sin aplicar filtro ninguno.

## Requisitos HTML y CSS

[ ] El código HTML está correctamente estructurado. Hay dos elementos section o article principales que representan los filtros de búsqueda (a la izquierda en escritorio, arriba del contenido en móvil), y los elementos a vender en la tienda (a la derecha en escritorio, abajo de los filtros en móvil).

[ ] Los elementos a vender en la tienda comparten la misma clase de CSS, que define una carta de producto y tiene algún efecto :hover cuando pasa el ratón sobre ellas.

[ ] La web cuenta con media queries para escritorio y móvil. Así como una correcta estructura y posicionamiento de elementos por medio de flex o grid.

[ ] Los productos tienen imágenes correctas que se ven en la carta de componente de cada uno

## Demo

Link directo para su visualización mediante Netlify:


## Instalación del programa

Install my-project with npm

```bash
  npm install proyectoVite
  cd my-project
```
    
## Deployment

Para desplegar el proyecto se ha utilizado en todo momento el siguiente
comando:

```bash
  npm run deploy
```


## Correcciones y puntos a tener en cuenta

+ Tener cuidado posicionando el contenido y usar correctamente
  sus respectivas medidas.
+ No se visualizaba correctamente el contenido para móvil al principio, por lo que se ha cambiado a unos márgenes de entre 320 - 480 píxeles.
+ Cuidado con funciones o líneas de código que no se estén utilizando o       ejecutando.
+ Intentar crear funciones reutilizables, con el objetivo de no crear más espacio de lo innecesario y respetar la memoria. Simplificando esto se consigue una mejor organización del código, más limpio y visualmente más amigable.
+ Faltaba mostrar un mensaje de aviso al cliente para cuando no encontrara algún producto según las categorías seleccionadas.
+ Seguir practicando


## Autor del proyecto

- [@piratewiz](https://github.com/piratewiz)

