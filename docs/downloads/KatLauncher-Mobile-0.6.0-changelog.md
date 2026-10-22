# KatLauncher Mobile 0.6.0 · Kat Companion

## Corrección de la misma versión 1.8.0

- Español e inglés completados y revisados en los flujos principales. Selector de 51 idiomas y variantes compartido entre PC y Mobile.
- Nuevos textos adicionales traducidos automáticamente; se conserva la base nativa de Mobile. Latín y tártaro usan inglés donde falten textos nuevos.
- Nombres como KatLauncher, KatCraft y Quick Friend protegidos frente al traductor.
- Idioma enviado al chat y a KatDoctor; voz femenina según el idioma disponible. En Mobile se utiliza el motor de voz del teléfono.
- KatCraft: sprite visible, animación y música en bucle, con un único botón para salir del juego.
- PC: tres ventanas normales de Kat rebotan dentro del área útil del escritorio. Se pueden cerrar con la X; Esc cierra todas. No reaparecen y se cierran al terminar el juego. No se abren en Android.
- Enlaces de Quick Friend, datos de usuarios y códigos del reproductor conservados al cambiar de idioma.

Las traducciones adicionales son automáticas y no han sido revisadas por hablantes nativos de todos los idiomas. No se ha probado esta entrega en un teléfono físico.

Si ya instalaste la primera 1.8.0 de PC o 0.6.0 de Mobile, instala el archivo corregido encima: se conserva el número de versión y la firma de Mobile.


- Kat con personalidad juguetona, chat Markdown y voz Dalia neural en español de México en PC.
- IA Groq mediante Supabase: clave solo en servidor, sesión KatSocial y descanso con contador al agotarse la cuota.
- KatDoctor recibe los registros reales de la instancia seleccionada. El chat ofrece un botón para entrar a Doctor cuando detecta un problema técnico.
- Reparación acotada del modo de ventana: KaBackup de la instancia, verificación, ajuste de options.txt y restauración exacta si falla. El arranque debe comprobarse jugando después; otros errores reciben diagnóstico, no reparaciones arbitrarias.
- Quick Friend real: QR con Kat, enlaces de un uso y 10 minutos, revocación, identidad de KatSocial antes de agregar, respeto de bloqueos y reintentos sin duplicados.
- Quick Friend Net: descubrimiento LAN en PC y Mobile; intercambio Bluetooth solo en Mobile, con permisos y visibilidad temporal.
- Modo sofá: navegar fuera del selector sin cambiar la instancia; confirmar para editar y volver para cerrarlo.
- Notificación Windows con acciones de actualización. Android busca actualizaciones, avisa en popup y verifica tamaño, SHA-256, paquete y firma antes de abrir el instalador del sistema.
- KatCraft 1.8.0 para las seis variantes existentes: interfaz táctil en Mobile, publicación del mundo individual como sala LAN y captura local de comandos de música antes de enviarse al servidor.
- Anti Piracy dentro de Minecraft, con una única spritesheet de Kat, audio y animación en bucle y salida del juego. La falta de conexión sola no activa el bloqueo. La detección de origen es una comprobación local limitada, no una protección infalible.
- Preparar para jugar juntos conserva el flujo independiente de PC y añade preparación de mods públicos por huella en Mobile. En Mobile, un loader no instalado debe instalarse desde el selector antes de preparar.
- Instancias: quitar solo el juego conservando mundos, mods y datos, retirar solo el perfil o eliminar todo con confirmación. Mobile evita borrar versiones o carpetas compartidas por otros perfiles.

## Actualizar

PC: instala sobre KatLauncher existente; no borres .katlauncher. Mobile 0.6.0 acompaña a PC 1.8.0: instala el APK encima de 0.5.1, con la misma firma, sin desinstalar.

## Límites de esta entrega

La IA gratuita tiene cuotas y requiere Internet. La voz Dalia de PC usa el servicio de voz de Microsoft Edge; Mobile utiliza las voces españolas disponibles en el teléfono y permite silenciarlas. El diagnóstico envía el texto filtrado de los registros a Supabase/Groq. Las salas Mobile son LAN: no incluyen túnel global ni servidor dedicado Android. Bluetooth, cámara, instalación Android y una partida entre dos teléfonos requieren confirmación en hardware físico; la compilación por sí sola no valida esos recorridos. KaBackup automático repara únicamente los ajustes de ventana descritos, sin borrar mundos ni mods.
