# Part 2 

## 1 - Course Info
### React Components
- Separación de la aplicación en componentes
- Uso de métodos de programación funcional (`map`, `filter`)
- Importancia de **keys**.

## 2 - Phonebook
### State Hook
- Uso de **State Hook** para manejar estado de un componente
- Uso de *event handlers*
- Implementación de filtro (`filter` y `toLowerCase()`)

### Fetch (axios) y Effect Hook
- Uso de promesas con `axios` (GET)
- Uso de **Effect Hook** para hacer fetch de información
- Permite ejecutar el 'efecto' sólo si cambia la variable que nos interesa

### POST, PUT, DELETE
- POST request con `axios`
- PUT requests para modificar info existente en `db.json`
- Uso de **Object Spread** `{...note}` para copiar objetos de JS
- Actualizar UI modificada en tiempo real (Sin refresh)
- Error handling en promesas con `catch`
- `window.alert` o `window.confirm` para mejorar la UX
- Notificaciones para cada tipo de operación

### CSS
- CSS en stylesheet
- Inline CSS

> The unit of a functional entity is the React component, that defines both the structure expressed through HTML, its functionality defined as JavaScript functions, and also its style in one place, so that the individual components become as independent and reusable as possible.


#### Services
- Creación de módulo aparte para comunicación con `db.json`
- Uso de las funciones del módulo en componentes

## 3 - Countries
- Requests a la API de restcountries y apixu
- Conditional Rendering basado en filtro
- Event handlers