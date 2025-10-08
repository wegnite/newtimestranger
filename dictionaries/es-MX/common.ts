export const common = {
  buttons: {
    submit: "Enviar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    back: "Atrás",
    next: "Siguiente",
    save: "Guardar",
    delete: "Eliminar",
    edit: "Editar",
    view: "Ver",
    download: "Descargar",
    close: "Cerrar",
  },
  messages: {
    loading: "Cargando...",
    success: "Operación exitosa",
    error: "Ocurrió un error",
    confirm: "¿Estás seguro?",
    required: "Este campo es obligatorio",
    invalidInput: "Entrada inválida",
  },
  navigation: {
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
    features: "Características",
    pricing: "Precios",
    guides: "Guías",
    settings: "Ajustes",
  },
  activePlayers: "Jugadores Activos",
  countries: "Países",
  coffeeRecipes: "Recetas de Café",
  userRating: "Valoración de Usuarios",
  localeSuggest: {
    switchToTitle: "¿Cambiar a {langName}?",
    currentLangDesc: "El idioma actual es {langName}.",
    dismissPermanent: "No volver a preguntar",
    switchToAlt: "Cambiar a {langName}",
    switchToButton: "Cambiar",
  },
  onlineGames: {
    bannerTitle: "¿Quieres jugar directamente?",
    bannerDescription:
      "Experimenta Dreamy Room y más juegos directamente en tu navegador, sin necesidad de descargar",
    playNowButton: "Jugar ahora",
    featured: "Juegos destacados",
    viewAllGames: "Ver todos los juegos",
    levelCompletionText: "¡Juega Dreamy Room en línea!",
  },
} as const;

export default common;
