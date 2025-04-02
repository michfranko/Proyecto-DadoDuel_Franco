# Duelo de Dados

## Descripción
Duelo de Dados es una aplicación web interactiva en la que dos jugadores lanzan dados por turnos durante tres rondas. El objetivo es sumar la mayor cantidad de puntos posibles en los tres lanzamientos para determinar al ganador. Este proyecto está diseñado para reforzar conocimientos intermedios de JavaScript, CSS3 y HTML5, aplicando manipulación del DOM, control de eventos, animaciones CSS y lógica de juego por turnos.

## Características
- **Lanzamiento de Dados:** Simulación de lanzamiento de dados con animaciones.
- **Turnos Automáticos:** Alternancia automática de turnos entre los jugadores.
- **Historial de Lanzamientos:** Registro visual de los lanzamientos de cada jugador.
- **Control por Teclado:** Posibilidad de lanzar el dado usando la barra espaciadora.
- **Mejor Puntuación:** Almacenamiento y visualización de la mejor puntuación usando localStorage.
- **Efectos de Sonido:** Sonidos para los lanzamientos de dados.
- **Personalización de Nombres:** Los jugadores pueden ingresar sus nombres antes de comenzar el juego.

## Instrucciones para Jugar
1. Ingresa los nombres de los jugadores y presiona "Comenzar Juego".
2. Presiona el botón "Lanzar Dado" o la barra espaciadora para lanzar el dado.
3. Alterna turnos entre los jugadores automáticamente.
4. Después de tres rondas, se mostrará el ganador.
5. Presiona "Reiniciar" para comenzar una nueva partida.
   
## Capturas de Pantalla

1. Ingreso de Jugadores y selector de Colores de cada Jugador
![image](https://github.com/user-attachments/assets/ac61d05a-8539-4518-afe0-2b194d39c6bb)
2. Pagina Principal de Juego:
 ![Principal](https://github.com/user-attachments/assets/4e5ccd3c-0aa2-4651-8977-f5b58b51a36d)


## Explicación del Código Esencial

A continuación, se detallan las funciones principales que controlan el flujo del juego:

1. startGame() - Iniciar el Juego
![Iniciar Juego](https://github.com/user-attachments/assets/886cc406-b728-4a1f-9c72-939c58acaab8)

Esta función se ejecuta cuando los jugadores inician la partida. Realiza las siguientes acciones:

Obtiene los nombres ingresados por los jugadores o asigna nombres por defecto (Jugador 1 y Jugador 2).

Recupera los colores elegidos para cada jugador y actualiza la interfaz.

Muestra la información de los jugadores en la pantalla.

Oculta los campos de entrada de nombres y muestra el tablero de juego.

Activa la variable gameActive para indicar que la partida ha comenzado.

2. rollDice() - Lanzar el Dado

   ![Giro Dado](https://github.com/user-attachments/assets/c4898a9b-4758-4d89-83a1-197e56c0055b)


Esta función se ejecuta cuando un jugador lanza el dado. Realiza los siguientes pasos:

Reproduce un sonido de dado.

Genera un número aleatorio entre 1 y 6, representando la cara del dado.

Muestra una animación temporal de un dado girando y luego revela el número obtenido.

Suma el número obtenido a la puntuación del jugador actual y actualiza la pantalla.

Registra el lanzamiento en el historial de jugadas.

Cambia de turno al otro jugador y actualiza la ronda cuando ambos jugadores han jugado.

Si se ha alcanzado el número máximo de rondas y es el turno del segundo jugador, llama a determineWinner().

3. determineWinner() - Determinar al Ganador

   ![determinar Jugador](https://github.com/user-attachments/assets/3277e27b-d6b5-45d4-9f80-183c759c72a7)

Cuando finalizan todas las rondas, esta función evalúa quién es el ganador:

Desactiva el botón de lanzar el dado y finaliza el juego.

Compara las puntuaciones de los jugadores para determinar el ganador o si hay un empate.

Muestra el resultado en pantalla.

Comprueba si la puntuación más alta lograda en la partida supera la mejor puntuación almacenada en localStorage y la actualiza si es necesario.

Estas funciones trabajan juntas para proporcionar una experiencia de juego interactiva y dinámica.



## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript

## Cómo Clonar y Ejecutar el Proyecto
1. Clona el repositorio:
   ```bash
   git clone https://github.com/michfranko/Proyecto-DadoDuel_Franco.git
Navega al directorio del proyecto:
cd Proyecto-DadoDuel_Franco
Asegúrate de que el archivo de audio dice-sound.mp3 esté en el directorio correcto, dentro de la carpeta audio.
Abre el archivo JuegoDados.html en tu navegador preferido.
Por ultimo disfruta.


