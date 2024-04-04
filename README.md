# Prueba técnica BBVA autoclicker

https://bbvaengineering.github.io/challenges/autoclicker/


## Requisitos propuestos
- [x] La aplicación deberá contener funcionalmente, como mínimo, las instrucciones detalladas en el enunciado.
- [x] El código debe ser público
- [x] Se deberán realizar tests unitarios de las vistas y de los componentes de la aplicación.
- [x] Se podrá utilizar cualquier infraestructura de alojamiento pública como, por ejemplo, ***Vercel***, Netlify o Github Pages.
  Url App: https://cookie-clicker-phi.vercel.app
- [x] Se debe subir un fichero README.md al repositorio con las instrucciones para hacer funcionar la aplicación en local. Puedes añadir cualquier otro dato que consideres necesario.

## Tambien:
- [x] Se ha utilizado un linter para mantener la calidad del código "eslint".
- [x] Se ha utilizado un formateador de código para mantener la calidad del código "pretier".
- [x] Se ha utilizado un pre-commit para lanzar el linter antes de realizar un commit.
- [x] Se ha utilizado un pre-push para lanzar los test antes de realizar un push.


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
