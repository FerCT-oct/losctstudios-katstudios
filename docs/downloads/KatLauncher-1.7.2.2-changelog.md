# 🐾 KatLauncher 1.7.2.2 · Bugfixes + Chunk

- 🧱 Nueva pestaña **Chunk**: instala, abre y busca actualizaciones del juego de KatStudios.
- 📥 Descargas de Chunk verificadas por tamaño y SHA-256 desde su repositorio oficial.
- 🛡️ Las actualizaciones conservan mundos, mods, personalización y ajustes; se bloquean si Chunk está abierto.
- 🐛 Reparada la biblioteca de Forge 1.6.4 que provocaba el error `FMLTweaker` ausente.
- ☕ Java automático se resuelve y valida antes de iniciar; instala el runtime oficial cuando falta uno compatible.
- 🕰️ Las versiones antiguas usan Java 8 en lugar de elegir automáticamente un Java moderno incompatible.
- 📝 Nuevo registro `logs/launch-latest.log` con la selección de Java y los fallos al crear el proceso, sin guardar la línea de comandos ni tokens de acceso.
- 🪟 Se mantiene la corrección de ventanas invisibles de la 1.7.2.1.

**Instalación:** ejecuta el instalador encima de tu versión actual. No necesitas borrar perfiles ni mundos.
Chunk se descarga por separado al pulsar Instalar; no está incluido dentro del instalador de KatLauncher.

✅ Pruebas reales: Minecraft 1.6.4 Vanilla/Forge, 1.8 Vanilla, 1.12.2 Forge y apertura de Chunk.
