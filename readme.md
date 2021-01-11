# Front-end Focus Proyect

## Hecho por Elvis Gomez (Individual)

# Demo: [Ver demo](https://focuschallenge.netlify.app/)

Username: 
- ElvisGmz

Password: 
- mypass

# Hecho con:
 - Front-End: ReactJS, react-router-dom, contextAPI, jwt_decode, axios, Moment.js, Styled-Components (Pure CSS)
 - Back-End: NodeJS, express, cors, moongose, mongodb, JWT (Jason Web Tokens)

# Desplegados en:
- Front-End: Netlify
- Back-End: Vercel

# Caracteristicas:

### Login

- Envia datos del usuario al servidor
- El servidor al recibir los datos encripta la contraseña
- Compara los datos encriptados recibidos con los encriptados de la DB
- Responde con un token
- Si Front-End recibe el token puede acceder a las demas paginas del sitio, de lo contrario sera redireccionado a /login
- El login es recordado en LocalStorage y si existe redirecciona a / es decir el Home