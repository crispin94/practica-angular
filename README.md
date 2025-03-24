# practica-angular
Herramientas para la instalacion: 

-- Node V16.13.2
-- Angular 15.2.11

## descargar el proyectos con las versiones correspondientes y ejecutar npm install en la rama main


###  NOTAS ###

La peticion al api de login esta implementada correctamente, actualmente el servicio regresa un badGateway

- podemos descomentar el Guard para probar, una vez el api de login este arriba
- el api de estadosCivil no funciona, siempre marca timeout en el gateway
- para validar el login en el resto de componentes no es necesario poner el guard como en welcome
- se configuro un subject para validar si se hizo login, de esta manera podemos validar todos los componentes
