## PARA LEVANTAR LA CARPETA API USAR EL COMANDO EN LA TERMINAL :  

```bash
npm start
```

## EN CASO DE TIRAR ERROR EL SERVIDOR DE LA CARPETA API :

## Dirijirse a la carpeta Index.ts  y cambiar el puerto donde escucha el servidor a otro puerto.

Esto puede ocurrir si estamos utilizando el mismo puerto en otro proyecto en nuestro sistema.

```bash
server.listen(5000, () => {
  console.log("Servidor levantado con exito!");
});

```
