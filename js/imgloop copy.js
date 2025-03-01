// Definir las diferentes rutas base para las imágenes
const imagePaths = {
    debian: "/assets/instalacion/install_debian/"
};

// Descripciones para cada ruta de imágenes
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
insertImages('install-steps-debian', imagePaths.debian, stepsDebian); // Para Debian
