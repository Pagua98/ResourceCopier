# ResourceCopier


## Características

- **Copia rápida**: Copia la ruta completa de cualquier recurso de idioma directamente al portapapeles.
- **Integración fácil**: Funciona sin problemas dentro del contexto de tu editor, disponible a través del menú contextual.
- **Soporte para múltiples formatos**: Compatible con una variedad de estructuras de archivos de localización.

## Uso

Para usar ResourceCopier, sigue estos pasos:

1. Abre el archivo desde el que deseas copiar la ruta del recurso.
2. Selecciona el texto o posiciónate en la línea cuya ruta necesitas copiar.
3. Haz clic derecho y selecciona "Copy Resource Path" del menú contextual.
4. La ruta del recurso seleccionado se copiará al portapapeles y se mostrará un mensaje de confirmación.

## Instalación

Puedes instalar ResourceCopier directamente desde el Marketplace de Visual Studio Code:

1. Abre Visual Studio Code.
2. Navega a la pestaña de Extensiones (icono de los cuadritos).
3. Click en el menu contextual (...).
4. Click en "Instalar desde VSIX".
3. Seleccionar archivo ".vsxi".

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor clona el repositorio y somete tus pull requests. Asegúrate de incluir pruebas y documentar tus cambios.

## Como compilar y generar vsix

### Instalar VSCE
npm install -g vsce

### Compilar proyecto
npm run compile

### Generar vsix
vsce package
