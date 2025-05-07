# 📝 ToDo App con Node.js, Express y MongoDB

Este proyecto es una aplicación web de lista de tareas (ToDo) construida con Node.js, Express, MongoDB y EJS como motor de vistas. Está estructurado por capas: rutas, controladores, servicios y modelos, con validaciones y pruebas automatizadas.

---

## 🔧 Requisitos

- Node.js y npm
- MongoDB local corriendo en `mongodb://localhost:27017`
- (Opcional) Postman o navegador para probar la app

---

## 📁 Estructura del Proyecto

```
todo-app/
├── app.js                    # Punto de entrada
├── controllers/              # Controladores (lógica HTTP)
├── services/                 # Servicios (lógica de negocio)
├── routes/                   # Definición de rutas Express
├── models/                   # Modelos Mongoose
├── validations/              # Validación de datos con Joi
├── views/                    # Vistas EJS
├── public/                   # Archivos estáticos
├── tests/                    # Pruebas automatizadas con Jest
├── package.json              # Dependencias y scripts
```

---

## 🚀 Instalación paso a paso

### 1. Clonar el proyecto o descomprimir el ZIP

```bash
cd todo-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la aplicación

Asegúrate de tener MongoDB local activo y ejecuta:

```bash
node app.js
```

Visita: [http://localhost:3000](http://localhost:3000)

---

## ✅ Validaciones

Se utiliza la librería `Joi` para validar que el título de una tarea no esté vacío.

Archivo: `validations/taskValidation.js`

```js
const Joi = require("joi");
const taskSchema = Joi.object({
  title: Joi.string().min(1).required(),
});
function validateTask(data) {
  return taskSchema.validate(data);
}
```

---

## 🧪 Pruebas

Usamos Jest y MongoDB en memoria para realizar pruebas sin afectar la base de datos real.

### Comando:

```bash
npm test
```

### Archivo de prueba: `tests/taskService.test.js`

Incluye pruebas para:

- Crear una tarea
- Marcarla como completada
- Obtener todas las tareas

---

## 📌 Rutas principales

| Método | Ruta          | Descripción                    |
|--------|---------------|--------------------------------|
| GET    | `/`           | Muestra todas las tareas       |
| POST   | `/add`        | Agrega una nueva tarea         |
| POST   | `/done/:id`   | Marca una tarea como completada|

---

## ✨ Tecnologías Usadas

- Node.js + Express
- MongoDB + Mongoose
- Joi (validaciones)
- Jest + mongodb-memory-server (tests)
- EJS (vistas)

---

## 🛠 Futuras mejoras

- API REST con autenticación
- Guardar usuarios y tareas por usuario
- Filtros (tareas completadas / pendientes)

---