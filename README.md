# CRUD de Personas con React, Node.js, SQLite y Docker

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) de personas, desarrollada con React en el frontend, Node.js y Express en el backend, y SQLite como base de datos. Todo el entorno está preparado para ejecutarse fácilmente con Docker y Docker Compose.

## Requisitos previos

- [Docker](https://www.docker.com/products/docker-desktop) y [Docker Compose](https://docs.docker.com/compose/) instalados
- (Opcional) [Git](https://git-scm.com/) para clonar el repositorio

## Estructura del proyecto

```
mi-crud-react/
├── backend/
│   ├── db.js
│   ├── server.js
│   ├── personas.db
│   ├── Dockerfile
│   └── ...
├── src/
│   ├── components/
│   │   └── PersonaList.jsx
│   ├── App.jsx
│   ├── index.css
│   └── ...
├── Dockerfile
├── docker-compose.yml
├── package.json
└── ...
```

## Ejecución rápida con Docker Compose

1. **Clona el repositorio** (si aún no lo tienes):
   ```bash
   git clone https://github.com/TU_USUARIO/TU_REPO.git
   cd mi-crud-react
   ```

2. **Construye y levanta los contenedores:**
   ```bash
   docker-compose up --build
   ```
   Esto creará y levantará dos servicios:
   - **backend**: API Node.js/Express en el puerto 5000
   - **frontend**: React servido por Nginx en el puerto 80

3. **Accede a la aplicación:**
   - Frontend: [http://localhost](http://localhost)
   - Backend/API: [http://localhost:5000/personas](http://localhost:5000/personas)

4. **Detener los contenedores:**
   ```bash
   docker-compose down
   ```

## Desarrollo local (sin Docker)

### Backend
1. Instala dependencias:
   ```bash
   cd backend
   npm install
   ```
2. Inicia el servidor:
   ```bash
   node server.js
   ```
   El backend estará disponible en [http://localhost:5000](http://localhost:5000)

### Frontend
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia la app de React:
   ```bash
   npm run dev
   ```
   El frontend estará disponible en [http://localhost:5173](http://localhost:5173)

> **Nota:** Si usas el frontend en modo desarrollo, asegúrate de que el backend también esté corriendo.

## Personalización
- Puedes modificar los puertos en `docker-compose.yml` si lo necesitas.
- La base de datos SQLite se almacena en `backend/personas.db` y se persiste fuera del contenedor.

## Problemas comunes
- Si cambias el código y no ves los cambios, reconstruye los contenedores:
  ```bash
  docker-compose build
  docker-compose up -d
  ```
- Si tienes problemas con dependencias nativas, asegúrate de que `node_modules` esté en `.dockerignore`.

## Licencia
Este proyecto es solo para fines educativos y de demostración.
