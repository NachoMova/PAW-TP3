var console = console || {},
    Juego = Juego || {};

//Valores por default
Juego.CANT_FICHAS_DEFAULT = 3;

Juego.TAMAÑO_TABLERO_DEFAULT = "3x3";

Juego.JUGADOR_UNO_DEFAULT = "Jugador 1";

Juego.JUGADOR_DOS_DEFAULT = "Jugador 2";

//Inicializo las variables jugadores, tamaño de tablero y cantidad de fichas en sus valores por default
Juego.nombrejug1 = Juego.JUGADOR_UNO_DEFAULT;

Juego.nombrejug2 = Juego.JUGADOR_DOS_DEFAULT;

Juego.tamañoTablero = Juego.TAMAÑO_TABLERO_DEFAULT;

Juego.cantFichas = Juego.CANT_FICHAS_DEFAULT;

Juego.puntosJugador1 = 0;

Juego.puntosJugador2 = 0;

Juego.turno = 1;



//Medidas que puede tomar el tablero de juego
Juego.tablero = [
	{
		tab:"3x3",
		alto:3,
		ancho:3
	},
	{
		tab:"4x4",
		alto:4,
		ancho:4
	},
	{
		tab:"5x5",
		alto:5,
		ancho:5
	},
	{
		tab:"6x6",
		alto:6,
		ancho:6
	}
];

//Cantidad de fichas con las que se puede jugar
Juego.fichasMin = 3;

Juego.fichasMax = 6;



