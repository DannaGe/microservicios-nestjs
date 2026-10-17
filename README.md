# Microservicio de productos con NestJS

Práctica de desarrollo de servicios backend con NestJS y TypeScript:
un servicio de productos que evoluciona de una API básica a una API con
base de datos, migraciones y paginación.
Instituto Tecnológico de Jiquilpan – Ingeniería en Sistemas Computacionales

## Contenido

### 01-api-productos
API REST de productos con operaciones de crear, consultar, actualizar y eliminar,
validación de datos con DTOs y `class-validator`, y pruebas con Jest.

### 02-productos-prisma-sqlite
Servicio de productos con base de datos SQLite mediante **Prisma ORM**:
- Modelo `Product` con migraciones
- Paginación de resultados
- Configuración mediante variables de entorno
- Validación global de datos

## Endpoints
| Método | Ruta | Acción |
|---|---|---|
| POST | `/products` | Crear producto |
| GET | `/products` | Listar productos (paginado) |
| GET | `/products/:id` | Ver un producto |
| PATCH | `/products/:id` | Actualizar producto |
| DELETE | `/products/:id` | Eliminar producto |

## Cómo ejecutarlo
```bash
cd 02-productos-prisma-sqlite
npm install
cp .env.example .env
npx prisma migrate dev
npm run start:dev
```

## Tecnologías
NestJS · TypeScript · Prisma · SQLite · Jest · class-validator