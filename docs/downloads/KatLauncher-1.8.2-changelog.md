# KatLauncher 1.8.2

- Inicio de sesión con Ely.by, identidad del juego y carga de su skin. Corregida la prioridad de CustomSkinLoader para evitar que KatSkin oculte la skin de Ely.by.
- Discord Rich Presence muestra la instancia, versión/loader, tiempo y estado AFK. Añadidos botones Descargar KatLauncher y Ver en GitHub. Las direcciones LAN no se publican.
- Quitadas etiquetas de versiones antiguas de la cabecera, título, diálogos y el instalador. El historial conserva las notas originales.
- KatSocial mantiene la posición al leer mensajes anteriores, incluso tras recargar avatares. Los mensajes privados solo se marcan leídos cuando llegas al final.
- Cierre del launcher sin advertencias falsas causadas por consultas en segundo plano.
- Reconexión desde la pantalla de desconexión de Minecraft para las variantes compatibles de KatCraft.
- Perfil KatCraft propio y de amigos, con foto de skin o KatSocial y fondo comprimido.
- Continuar una sala en Mobile mediante QR con revisión de versión y mods.
- Aviso de sala vacía, copia de dirección pública y aviso de muerte con evidencia de la sesión anterior.
- Acceso al sitio MCPEDL desde Bedrock, protegido si no se detecta la instalación.
- KatAI: advertencias ante peticiones claramente dañinas y descanso de una hora a la tercera; no penaliza automáticamente bromas ambiguas.
- Acceso Discord preparado en KatSocial; requiere proveedor y sesión disponibles.

## Compatibilidad y pendientes

KatCraft automático: Fabric/Quilt 1.20.1, 1.21, 1.21.1 y 26.2; Forge 1.20.1; NeoForge 1.21.1. El port Fabric 26.3 compila, pero no está activado automáticamente ni probado jugando. El rango completo desde 1.15 sigue pendiente.

Microsoft premium: autorización pendiente; aún no habilitado para jugar. El QR continúa una sala disponible: no transfiere un mundo individual en vivo. Mobile requiere comprobación en dispositivo físico. Rich Presence se ha probado mediante payloads; la vista final en Discord no se ha comprobado manualmente.


Descarga directa: KatLauncher-Setup-1.8.2.exe. Canal automático: KatLauncher-Update-1.8.2.exe, compatible con el límite de 256 MiB de versiones anteriores.
