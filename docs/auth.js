// ============================================================
// KatAuth — KatSocial
// PFP + menú desplegable
// ============================================================

const SUPABASE_URL =
  "https://eauynwavanajtnsrxwcv.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_83j5C_W-fRrsBnUKSK3spg_NXYTA4mS";

const OAUTH_PROVIDER = "google";

const AUTH_TEXT = {
  es: {
    login: "Iniciar sesión",
    profile: "Mi perfil",
    social: "KatSocial",
    tokens: "KatTokens",
    settings: "Configuración",
    logout: "Cerrar sesión",
    connecting: "Conectando…",
    loading: "Cargando…",
    fallback: "Jugador",
    soon: "Próximamente"
  },

  en: {
    login: "Log in",
    profile: "My profile",
    social: "KatSocial",
    tokens: "KatTokens",
    settings: "Settings",
    logout: "Log out",
    connecting: "Connecting…",
    loading: "Loading…",
    fallback: "Player",
    soon: "Coming soon"
  }
};

(function initKatAuth() {

  const widget =
    document.getElementById("authWidget");

  if (!widget) {
    console.warn(
      "KatAuth: #authWidget no existe."
    );
    return;
  }

  // ==========================================================
  // IDIOMA
  // ==========================================================

  function getLanguage() {
    return (
      window.KatI18n?.lang ||
      localStorage.getItem("katLang") ||
      "es"
    );
  }

  function t(key) {
    const lang =
      getLanguage() === "en"
        ? "en"
        : "es";

    return (
      AUTH_TEXT[lang]?.[key] ||
      AUTH_TEXT.es[key] ||
      key
    );
  }

  // ==========================================================
  // HTML SEGURO
  // ==========================================================

  function escapeHtml(value) {
    const div =
      document.createElement("div");

    div.textContent =
      String(value ?? "");

    return div.innerHTML;
  }

  // ==========================================================
  // SUPABASE
  // ==========================================================

  if (
    !window.supabase ||
    !SUPABASE_URL ||
    !SUPABASE_ANON_KEY
  ) {
    console.error(
      "KatAuth: Supabase no está disponible."
    );

    return;
  }

  const client =
    window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_ANON_KEY,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    );

  // ==========================================================
  // ESTADO
  // ==========================================================

  let currentSession = null;
  let currentProfile = null;
  let menuOpen = false;

  // ==========================================================
  // AVATAR
  // ==========================================================

  function getAvatarUrl(profile, user) {

    // --------------------------------------------------------
    // 1. Perfil de KatSocial
    // --------------------------------------------------------

    if (profile) {

      if (profile.avatar_url) {
        return profile.avatar_url;
      }

      if (profile.avatar) {
        return profile.avatar;
      }

      if (profile.avatar_path) {

        return (
          `${SUPABASE_URL}` +
          `/storage/v1/object/public/avatars/` +
          `${profile.avatar_path}`
        );
      }
    }

    // --------------------------------------------------------
    // 2. Metadata de Google
    // --------------------------------------------------------

    if (user?.user_metadata) {

      const metadata =
        user.user_metadata;

      if (metadata.avatar_url) {
        return metadata.avatar_url;
      }

      if (metadata.picture) {
        return metadata.picture;
      }
    }

    return "";
  }

  // ==========================================================
  // PERFIL
  // ==========================================================

  async function loadProfile(session) {

    if (!session?.user) {
      return;
    }

    currentSession = session;

    const user =
      session.user;

    let profile = null;

    // --------------------------------------------------------
    // Intentar obtener perfil de KatSocial
    // --------------------------------------------------------

    try {

      const {
        data,
        error
      } =
        await client.rpc(
          "kat_upsert_profile"
        );

      if (!error && data) {
        profile = data;
      }

    } catch (error) {

      console.warn(
        "KatAuth: RPC de perfil no disponible:",
        error
      );
    }

    // --------------------------------------------------------
    // Combinar perfil + Google
    // --------------------------------------------------------

    currentProfile = {
      ...(profile || {}),

      id:
        profile?.id ||
        user.id,

      display_name:
        profile?.display_name ||
        profile?.username ||
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.email?.split("@")[0] ||
        t("fallback"),

      email:
        profile?.email ||
        user.email ||
        "",

      avatar_url:
        getAvatarUrl(
          profile,
          user
        )
    };

    renderLoggedIn();
  }

  // ==========================================================
  // LOGIN
  // ==========================================================

  async function handleLogin() {

    renderConnecting();

    const hostname =
      window.location.hostname;

    const local =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "::1";

    const redirectUrl =
      local
        ? "http://localhost:3000/"
        : "https://katlauncher.netlify.app/";

    console.log(
      "KatAuth redirect:",
      redirectUrl
    );

    try {

      const {
        error
      } =
        await client.auth.signInWithOAuth({
          provider:
            OAUTH_PROVIDER,

          options: {
            redirectTo:
              redirectUrl,

            queryParams: {
              access_type:
                "offline",

              prompt:
                "select_account"
            }
          }
        });

      if (error) {
        throw error;
      }

    } catch (error) {

      console.error(
        "KatAuth login:",
        error
      );

      renderLoggedOut();

      alert(
        "No se pudo iniciar sesión.\n\n" +
        (error.message || error)
      );
    }
  }

  // ==========================================================
  // LOGOUT
  // ==========================================================

  async function handleLogout() {

    closeMenu();

    try {

      await client.auth.signOut();

      currentSession = null;
      currentProfile = null;

      renderLoggedOut();

    } catch (error) {

      console.error(
        "KatAuth logout:",
        error
      );
    }
  }

  // ==========================================================
  // ABRIR MENÚ
  // ==========================================================

  function openMenu() {

    menuOpen = true;

    const menu =
      document.getElementById(
        "katAuthMenu"
      );

    const button =
      document.getElementById(
        "katAuthAvatarButton"
      );

    if (menu) {
      menu.classList.add("open");
    }

    if (button) {
      button.setAttribute(
        "aria-expanded",
        "true"
      );
    }
  }

  // ==========================================================
  // CERRAR MENÚ
  // ==========================================================

  function closeMenu() {

    menuOpen = false;

    const menu =
      document.getElementById(
        "katAuthMenu"
      );

    const button =
      document.getElementById(
        "katAuthAvatarButton"
      );

    if (menu) {
      menu.classList.remove("open");
    }

    if (button) {
      button.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  }

  // ==========================================================
  // TOGGLE
  // ==========================================================

  function toggleMenu(event) {

    event.stopPropagation();

    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // ==========================================================
  // PERFIL LOGUEADO
  // ==========================================================

  function renderLoggedIn() {

    const profile =
      currentProfile || {};

    const avatar =
      profile.avatar_url;

    const name =
      profile.display_name ||
      t("fallback");

    const email =
      profile.email || "";

    widget.innerHTML = `

      <div class="kat-auth-container">

        <!-- PFP -->

        <button
          type="button"
          class="kat-auth-avatar-button"
          id="katAuthAvatarButton"
          aria-label="${escapeHtml(name)}"
          aria-expanded="false"
          title="${escapeHtml(name)}"
        >

          ${
            avatar
              ? `
                <img
                  class="kat-auth-avatar"
                  src="${escapeHtml(avatar)}"
                  alt=""
                  referrerpolicy="no-referrer"
                  crossorigin="anonymous"
                />
              `
              : `
                <span
                  class="kat-auth-avatar-fallback"
                >
                  ${escapeHtml(
                    name
                      .charAt(0)
                      .toUpperCase()
                  )}
                </span>
              `
          }

        </button>

        <!-- MENÚ -->

        <div
          class="kat-auth-menu"
          id="katAuthMenu"
        >

          <div class="kat-auth-menu-header">

            ${
              avatar
                ? `
                  <img
                    class="kat-auth-menu-avatar"
                    src="${escapeHtml(avatar)}"
                    alt=""
                    referrerpolicy="no-referrer"
                  />
                `
                : `
                  <div
                    class="kat-auth-menu-avatar kat-auth-avatar-fallback"
                  >
                    ${escapeHtml(
                      name
                        .charAt(0)
                        .toUpperCase()
                    )}
                  </div>
                `
            }

            <div class="kat-auth-user-info">

              <strong>
                ${escapeHtml(name)}
              </strong>

              <span>
                ${escapeHtml(email)}
              </span>

            </div>

          </div>

          <div class="kat-auth-divider"></div>

          <button
            type="button"
            class="kat-auth-menu-item"
            id="katProfileButton"
          >
            <span>👤</span>
            <span>${escapeHtml(
              t("profile")
            )}</span>
          </button>

          <button
            type="button"
            class="kat-auth-menu-item"
            id="katSocialButton"
          >
            <span>🐾</span>
            <span>${escapeHtml(
              t("social")
            )}</span>
          </button>

          <button
            type="button"
            class="kat-auth-menu-item kat-auth-soon"
            id="katTokensButton"
          >
            <span>🪙</span>

            <span class="kat-auth-menu-item-content">
              <span>${escapeHtml(
                t("tokens")
              )}</span>

              <small>${escapeHtml(
                t("soon")
              )}</small>
            </span>
          </button>

          <button
            type="button"
            class="kat-auth-menu-item"
            id="katSettingsButton"
          >
            <span>⚙️</span>
            <span>${escapeHtml(
              t("settings")
            )}</span>
          </button>

          <div class="kat-auth-divider"></div>

          <button
            type="button"
            class="kat-auth-menu-item kat-auth-logout"
            id="katLogoutButton"
          >
            <span>⏻</span>
            <span>${escapeHtml(
              t("logout")
            )}</span>
          </button>

        </div>

      </div>
    `;

    // --------------------------------------------------------
    // Botón PFP
    // --------------------------------------------------------

    document
      .getElementById(
        "katAuthAvatarButton"
      )
      ?.addEventListener(
        "click",
        toggleMenu
      );

    // --------------------------------------------------------
    // Logout
    // --------------------------------------------------------

    document
      .getElementById(
        "katLogoutButton"
      )
      ?.addEventListener(
        "click",
        handleLogout
      );

    // --------------------------------------------------------
    // Perfil
    // --------------------------------------------------------

    document
      .getElementById(
        "katProfileButton"
      )
      ?.addEventListener(
        "click",
        () => {

          closeMenu();

          window.location.hash =
            "perfil";
        }
      );

    // --------------------------------------------------------
    // KatSocial
    // --------------------------------------------------------

    document
      .getElementById(
        "katSocialButton"
      )
      ?.addEventListener(
        "click",
        () => {

          closeMenu();

          window.location.hash =
            "social";
        }
      );

    // --------------------------------------------------------
    // Settings
    // --------------------------------------------------------

    document
      .getElementById(
        "katSettingsButton"
      )
      ?.addEventListener(
        "click",
        () => {

          closeMenu();

          window.location.hash =
            "configuracion";
        }
      );
  }

  // ==========================================================
  // LOGGED OUT
  // ==========================================================

  function renderLoggedOut() {

    widget.innerHTML = `

      <button
        type="button"
        class="auth-login-btn"
        id="authLoginBtn"
      >

        <span
          class="auth-login-icon"
        >
          🐾
        </span>

        <span>
          ${escapeHtml(
            t("login")
          )}
        </span>

      </button>

    `;

    document
      .getElementById(
        "authLoginBtn"
      )
      ?.addEventListener(
        "click",
        handleLogin
      );
  }

  // ==========================================================
  // CONNECTING
  // ==========================================================

  function renderConnecting() {

    widget.innerHTML = `
      <span class="auth-connecting">
        ${escapeHtml(
          t("connecting")
        )}
      </span>
    `;
  }

  // ==========================================================
  // CLICK FUERA
  // ==========================================================

  document.addEventListener(
    "click",
    event => {

      if (!menuOpen) {
        return;
      }

      const container =
        document.querySelector(
          ".kat-auth-container"
        );

      if (
        container &&
        !container.contains(
          event.target
        )
      ) {
        closeMenu();
      }
    }
  );

  // ==========================================================
  // ESC
  // ==========================================================

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        menuOpen
      ) {
        closeMenu();
      }
    }
  );

  // ==========================================================
  // AUTH STATE
  // ==========================================================

  client.auth.onAuthStateChange(
    async (
      event,
      session
    ) => {

      console.log(
        "KatAuth:",
        event
      );

      if (session) {

        await loadProfile(
          session
        );

      } else {

        currentSession = null;
        currentProfile = null;

        renderLoggedOut();
      }
    }
  );

  // ==========================================================
  // SESIÓN EXISTENTE
  // ==========================================================

  client.auth
    .getSession()
    .then(
      async ({
        data,
        error
      }) => {

        if (error) {

          console.error(
            "KatAuth session:",
            error
          );

          renderLoggedOut();

          return;
        }

        if (
          data?.session
        ) {

          await loadProfile(
            data.session
          );

        } else {

          renderLoggedOut();

        }
      }
    );

  // ==========================================================
  // CAMBIO DE IDIOMA
  // ==========================================================

  window.addEventListener(
    "katlangchange",
    () => {

      if (
        currentSession &&
        currentProfile
      ) {

        renderLoggedIn();

      } else {

        renderLoggedOut();

      }
    }
  );

})();