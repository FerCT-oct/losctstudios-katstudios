# KatLauncher 1.8.0 · Kat Companion

- Kat con personalidad juguetona, chat Markdown y voz Dalia neural en español de México en PC.
- IA Groq mediante Supabase: clave solo en servidor, sesión KatSocial y descanso con contador al agotarse la cuota.
- KatDoctor recibe los registros reales de la instancia seleccionada. El chat ofrece un botón para entrar a Doctor cuando detecta un problema técnico.
- Reparación acotada del modo de ventana: KaBackup de la instancia, verificación, ajuste de options.txt y restauración exacta si falla. El arranque debe comprobarse jugando después; otros errores reciben diagnóstico, no reparaciones arbitrarias.
- Quick Friend real: QR con Kat, enlaces de un uso y 10 minutos, revocación, identidad de KatSocial antes de agregar, respeto de bloqueos y reintentos sin duplicados.
- Quick Friend Net: descubrimiento LAN en PC y Mobile; intercambio Bluetooth solo en Mobile, con permisos y visibilidad temporal.
- Modo sofá: navegar fuera del selector sin cambiar la instancia; confirmar para editar y volver para cerrarlo.
- Notificación Windows con acciones de actualización. Android busca actualizaciones, avisa en popup y verifica tamaño, SHA-256, paquete y firma antes de abrir el instalador del sistema.
- KatCraft 1.8.0 para las seis variantes existentes: interfaz táctil en Mobile, publicación del mundo individual como sala LAN y captura local de comandos de música antes de enviarse al servidor.
- Anti Piracy dentro de Minecraft, con una única spritesheet de Kat, audio, silencio y salida. La falta de conexión sola no activa el bloqueo. La detección de origen es una comprobación local limitada, no una protección infalible.
- Preparar para jugar juntos conserva el flujo independiente de PC y añade preparación de mods públicos por huella en Mobile. En Mobile, un loader no instalado debe instalarse desde el selector antes de preparar.
- Instancias: quitar solo el juego conservando mundos, mods y datos, retirar solo el perfil o eliminar todo con confirmación. Mobile evita borrar versiones o carpetas compartidas por otros perfiles.

## Actualizar

PC: instala sobre KatLauncher existente; no borres .katlauncher. Mobile 0.6.0 acompaña a PC 1.8.0: instala el APK encima de 0.5.1, con la misma firma, sin desinstalar.

## Límites de esta entrega

La IA gratuita tiene cuotas y requiere Internet. La voz Dalia de PC usa el servicio de voz de Microsoft Edge; Mobile utiliza las voces españolas disponibles en el teléfono y permite silenciarlas. El diagnóstico envía el texto filtrado de los registros a Supabase/Groq. Las salas Mobile son LAN: no incluyen túnel global ni servidor dedicado Android. Bluetooth, cámara, instalación Android y una partida entre dos teléfonos requieren confirmación en hardware físico; la compilación por sí sola no valida esos recorridos. KaBackup automático repara únicamente los ajustes de ventana descritos, sin borrar mundos ni mods.
