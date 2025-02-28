// Definir las diferentes rutas base para las imágenes
const imagePaths = {
    server: "assets/instalacion/install_server/",
    ubuntu: "assets/instalacion/install_ubuntu/",
    debian: "assets/instalacion/install_debian/"
};

// Descripciones para cada ruta de imágenes
const stepsUbuntu = [
    "Paso 1: Ya teniendo nuestra maquina virtual o USB Boot, al iniciarla, es lo primero que veremos, presionamos enter en la primera opcion",
    "Paso 2: Arrancando la instalacion...",
    "",
    "Ubuntu iniciara automaticamente en ingles, pero facilmente podemos cambiar el idioma a español",
    "Spanish!",
    "Las opciones de accesibilidad las podemos omitir si no requerimos ninguna",
    "Elegimos nuestro teclado, usualmente es teclado Ingles o Español (Latinoamericano), podemos comprobarlo escribiendo en la casilla",
    "Si te encuentras en una maquina virtual lo recomendado es no conectarte a internet, hasta que finalice la instalacion, para instalaciones en hardware real, conectemonos",
    "Elegimos Instalar Ubuntu obviamente, aunque tambien podemos probarlo un momento, si seguimos indecisos",
    "Elegiremos la instalacion interactiva",
    "En esta seccion yo elijo la seleccion predeterminada, para luego elegir los programas que necesito",
    "Como en un paso anterior, si estamos en una VM, lo recomendable es no elegir estas opciones, en mis pruebas genera crasheos, si tu instalacion es en hardware real, selecciona ambas",
    "Por defecto, esta la opcion de borrar disco, solo da clic en siguiente",
    "En este paso, debemos establecer nuestras credenciales, el nombre y nombre de usuario, recomiendo sea el mismo, el nombre del equipo debe ser distinto, y la contraseña, nos servira para iniciar sesion y las acciones de super usuario",
    "Seleccionamos nuestra zona horaria...",
    "Hacemos clic en instalar",
    "Esperamos...",
    "Hacemos clic en Reiniciar ahora",
    "Ya sea que estemos en una VM o hardware real, presionamos enter, para desmontar la iso, y si es un USB boot, lo retiramos del equipo, y el sistema se reiniciara",
    "Hacemos clic en nuestro usuario",
    "Introducimos nuestras credenciales",
    "Lo primero que veremos sera esta bienvenida, solo se mostrara una sola vez, hacemos clic en siguiente",
    "Elegimos 'Skip for now'",
    "Personalmente prefiero no compartir datos, pero es a eleccion del usuario",
    "Hacemos clic en terminar",
    "Y listo tenemos Ubuntu 24.04, listo para nuestro proceso de Post-Install"
];

const stepsServer = [
    "Ya teniendo nuestra maquina virtual o USB Boot, al iniciarla, es lo primero que veremos, presionamos enter en la primera opcion",
    "Iniciara SystemD los procesos de instalacion...",
    "Igual que en Ubuntu Desktop, iniciamos en idioma ingles, pero facilmente podemos cambiarlo a español",
    "Spanish!",
    "Este paso es escencial, yo suelo elegir 'Continuar sin actualizar' suelen producirse errores al instalar",
    "Seleccionamos nuestro teclado...",
    "Seleccionamos que tipo de instalacion queremos, la normal o la minima, yo recomiendo la normal, nunca sabemos que paquete nos puede faltar, y un servidor por logica, va sobrado de recursos, y los drivers, si es un hardware real, marcamos la opcion",
    "Esperamos a que Ubuntu Server detecte nuestro dispositivo de red y la IP",
    "Continuamos...",
    "Dejamos en blanco si no necesitamos un proxy",
    "Esperamos a que Ubuntu Server pruebe su conexion a los repositorios de Ubuntu",
    "Continuamos...",
    "Por defecto tendremos seleccionada la unidad que detecte nuestra instalacion, marcamos 'Set up this disk as an LVM group' para poder encriptarlo con LUKS, escribimos una contraseña fuerte, la cual servira para desbloquear el arranque del sistema para otorgar mas seguridad, esta clave debe ser diferente a la que crearemos para el usuario y tambien creemos una llave de recuperacion, la cual despues debemos extraer del sistema y almacenarla fuera de este por seguridad, y continuamos",
    "Se mostrara un resumen de las acciones a tomar, presionamos en hecho",
    "Presionamos continuar...",
    "En este paso, debemos establecer nuestras credenciales, el nombre y nombre de usuario, recomiendo sea el mismo, el nombre del equipo debe ser distinto, y la contraseña, nos servira para iniciar sesion y las acciones de super usuario",
    "Elegimos 'Skip for now' la suscripcion de Ubuntu Pro y presionamos continuar",
    "Podemos elegir que OpenSSH se instale, automaticamente, aunque tambien podriamos hacerlo de forma manual, cual sea el caso, seleccionamos o no, y presionamos hecho",
    "Aqui podemos elegir distintas aplicaciones a autoinstalar, como contenedores docker o bases de datos, super util si sabemos que estamos instalando y presionamos hecho",
    "Esperamos a que el sistema haga el proceso de instalacion",
    "Cuando termine el proceso presionamos Reiniciar ahora, puede que el sistema nos pida presionar enter y retirar el medio de instalacion",
    "Aqui seleccionamos Ubuntu para iniciar el sistema",
    "Tambien podria darse el caso que el sistema nos mande directamente a desbloquear el disco duro, e introducimos la clave de cifrado, y procedera al arranque automaticamente",
    "Escribimos nuestro usuario",
    "Proporcionamos la contraseña",
    "Y listo tenemos Ubuntu Server 24.04, listo para nuestro proceso de Post-Install"
];

const stepsDebian = [
    "Ventana de inicio de la instalación de Ubuntu Desktop",
    "Seleccionar el idioma para Ubuntu Desktop",
    "Configuración de red para Ubuntu Desktop",
    "Elegir el disco de instalación en Ubuntu Desktop",
    "Crear usuario para Ubuntu Desktop",
    "Instalación de paquetes base en Ubuntu Desktop",
    "Instalación de GRUB en Ubuntu Desktop",
    "Finalización de la instalación de Ubuntu Desktop",
    "Reinicio del sistema Ubuntu Desktop",
    "Configuración de hora y zona en Ubuntu Desktop",
    "Actualización de sistema en Ubuntu Desktop",
    "Instalación de software adicional en Ubuntu Desktop",
    "Configuración de red avanzada en Ubuntu Desktop",
    "Verificación de la instalación de Ubuntu Desktop",
    "Instalación de drivers adicionales en Ubuntu Desktop",
    "Configuración de seguridad en Ubuntu Desktop",
    "Configuración de firewall en Ubuntu Desktop",
    "Verificación de conexión a Internet en Ubuntu Desktop",
    "Instalación de herramientas de administración en Ubuntu Desktop",
    "Personalización del entorno en Ubuntu Desktop",
    "Instalación de escritorio completo en Ubuntu Desktop",
    "Configuración de usuarios adicionales en Ubuntu Desktop",
    "Configuración de repositorios en Ubuntu Desktop",
    "Creación de backups en Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Comprobación de integridad del sistema Ubuntu Desktop",
    "Instalación de actualizaciones finales en Ubuntu Desktop"
];

// Función para insertar las imágenes en el contenedor correspondiente
function insertImages(containerId, path, steps) {
    const container = document.getElementById(containerId);

    steps.forEach((description, index) => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = `${path}install${index + 1}.png`;  // Usar la ruta seleccionada
        img.alt = `Instalación paso ${index + 1}`;
        img.classList.add('stepImage'); // Nombra las clases que tendran los img
        
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = description;
        
        figure.appendChild(img);
        figure.appendChild(figcaption);
        container.appendChild(figure);
    });
}

// Llamar a la función para cada sección con los pasos correspondientes
insertImages('install-steps-server', imagePaths.server, stepsServer);  // Para Ubuntu Server
insertImages('install-steps-ubuntu', imagePaths.ubuntu, stepsUbuntu);  // Para Ubuntu Desktop
insertImages('install-steps-debian', imagePaths.debian, stepsDebian); // Para Debian
