# Prueba técnica BBVA autoclicker

<a href="https://bbvaengineering.github.io/challenges/autoclicker/" target="_blank">https://bbvaengineering.github.io/challenges/autoclicker/</a>


## Requisitos propuestos
- [x] La aplicación deberá contener funcionalmente, como mínimo, las instrucciones detalladas en el enunciado.
- [x] El código debe ser público
- [x] Se deberán realizar tests unitarios de las vistas y de los componentes de la aplicación.
- [x] Se podrá utilizar cualquier infraestructura de alojamiento pública como, por ejemplo, ***Vercel***, Netlify o Github Pages.
  Url App: <a href="https://cookie-clicker-phi.vercel.app" target="_blank">https://cookie-clicker-phi.vercel.app</a>
- [x] Se debe subir un fichero README.md al repositorio con las instrucciones para hacer funcionar la aplicación en local. Puedes añadir cualquier otro dato que consideres necesario.

## Tambien:
- [x] Se ha utilizado un linter para mantener la calidad del código "eslint".
- [x] Se ha utilizado un formateador de código para mantener la calidad del código "pretier".
- [x] Se ha utilizado un pre-commit para lanzar el linter antes de realizar un commit.
- [x] Se ha utilizado un pre-push para lanzar los test antes de realizar un push.


## Decisiones tomadas respecto a la implementación
  ### Tecnologias
- Se ha utilizado lit-element para la creación de componentes web, ya que es una librería que permite la creación de componentes web de forma sencilla.
- Se ha utilizado webpack para empaquetar la aplicación, ya que es una herramienta que permite empaquetar la aplicación en un único archivo de forma sencilla, y así crear la pwa más fácilmente.
- Se ha usado Jest ya que es un framework sencillo y muy utilizado
- Se ha utilizado jest-axe para realizar test de accesibilidad, ya que es una herramienta que permite realizar test de accesibilidad de forma sencilla.
- Se ha optado por utilizar shadow-dom-testing-library para realizar test de componentes web que contengan shadow dom.
- Se ha usado husky para lanzar prettier y el linter antes del commit y los test antes de realizar un push "así evitamos que se suban test fallidos, y se mantenga la calidad del código".
- Se ha optado por @lit-labs/router para poder crear una spa con sus rutas

### Decisiones especificas
- Se ha creado la clase ScoresState dentro de la carpeta status, para poder tener un estado global centralizado en un componente, agregando facilidad de uso y mantenimiento.
- Se ha separado la lógica del clicker en un componente llamado clicker, para poder reutilizarlo en cualquier parte de la aplicación y descongestionar el componente principal 'game-container'
- Se puede navegar con el componente <navigate> y con el evento *router-navigate*, he querido usar ambas opciones, ya que así se puede ver como se puede navegar con un componente y con un evento.
- Los test están ubicados a la altura del mismo componente para facilitar su mantenimiento y lectura.
- Se han creado tests básicos para demostrar el uso de jest, jest-axe, jest-dom y shadow-dom-testing-library.

## Tecnologias utilizadas

- **lit-element**: para la creación de componentes web.
- **husky**: para lanzar los test antes de realizar un push "así evitamos que se suban test fallidos, y se mantenga la calidad del código".
-  **eslint**: para mantener la calidad del código.
- **prettier**: para formatear el código.
- **webpack**: para empaquetar la aplicación.
  ### tests
    - **jest**: para realizar los test unitarios.
    - **jest-axe**: para realizar test de accesibilidad.
    - **jest-dom**: para realizar test de dom.
    - **shadow-dom-testing-library**: para realizar test de componentes web que contengan shadow dom "necesario cuando trabajamos con wc".


## Instrucciones para hacer funcionar la aplicación en local
para el funcionamiento en local, se deben seguir los siguientes pasos:
1. Clonar el repositorio
```bash
git clone
```
2. Instalar las dependencias
```bash
npm run prepare
npm install
```
3. Iniciar la aplicación
```bash
npm run dev
```
4. Abrir el navegador en la siguiente url
```bash
http://localhost:9003/
```
- si se quiere probar la pwa en ios, se debe acceder al archivo webpack.config.js
  y cambiar el valor de la propiedad server: 'http', por server: 'https', y volver a iniciar la aplicación.

### para lanzar los tests

```bash
npm run test
```
