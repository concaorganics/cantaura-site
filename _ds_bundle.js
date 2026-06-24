/* @ds-bundle: {"namespace":"Cantaura","components":[{"name":"Button","sourcePath":"components/general/Button/Button.jsx"},{"name":"Logo","sourcePath":"components/general/Logo/Logo.jsx"},{"name":"Nav","sourcePath":"components/general/Nav/Nav.jsx"},{"name":"StudioCard","sourcePath":"components/general/StudioCard/StudioCard.jsx"},{"name":"Tag","sourcePath":"components/general/Tag/Tag.jsx"}],"sourceHashes":{"components/general/Button/Button.jsx":"3a171c0f2970","components/general/Button/Button.d.ts":"87b456389f3f","components/general/Button/Button.prompt.md":"4b7d813d85dc","components/general/Logo/Logo.jsx":"24269485f995","components/general/Logo/Logo.d.ts":"9df721884598","components/general/Logo/Logo.prompt.md":"5349be6e923d","components/general/Nav/Nav.jsx":"235985a102a2","components/general/Nav/Nav.d.ts":"88878ae5a804","components/general/Nav/Nav.prompt.md":"3e30e95b1210","components/general/StudioCard/StudioCard.jsx":"b49604a56de4","components/general/StudioCard/StudioCard.d.ts":"f1e7cd4c33a0","components/general/StudioCard/StudioCard.prompt.md":"6f2c595a9e97","components/general/Tag/Tag.jsx":"956777b442f5","components/general/Tag/Tag.d.ts":"fa49946f5ccf","components/general/Tag/Tag.prompt.md":"bdc51381237d"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
var Cantaura = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function jsx(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsx;
      module.exports.jsxDEV = jsx;
      module.exports.Fragment = R.Fragment;
    }
  });

  // src/index.js
  var index_exports = {};
  __export(index_exports, {
    Button: () => Button,
    Logo: () => Logo,
    Nav: () => Nav,
    StudioCard: () => StudioCard,
    Tag: () => Tag,
    tokens: () => tokens_exports
  });
  init_define_import_meta_env();

  // src/tokens/tokens.js
  var tokens_exports = {};
  __export(tokens_exports, {
    color: () => color,
    default: () => tokens_default,
    font: () => font,
    fontSize: () => fontSize,
    fontWeight: () => fontWeight,
    radius: () => radius,
    space: () => space,
    tracking: () => tracking
  });
  init_define_import_meta_env();
  var color = {
    // Neutros cálidos — base
    fondo: "#F4EFE3",
    // cal cálida — fondo principal (nunca blanco puro)
    superficie: "#EAE2D0",
    // pergamí — superficies secundarias
    blancoOs: "#FBF8F1",
    // blanco hueso — tarjetas
    // Acentos — salen de la propia finca
    terracota: "#B8542F",
    // acento primario — el suelo de la masía
    oliva: "#5E6347",
    // acento secundario — la garriga
    vino: "#6B2D3C",
    // acento profundo — los viñedos / eje vino-cerveza
    // Texto — nunca negro puro
    texto: "#2E2A22",
    // terra tostada
    textoSec: "#6E665A",
    // secundario
    textoTer: "#A39A8A",
    // terciario / hints
    linea: "#D8CFBC"
    // bordes
  };
  var font = {
    display: "'Fraunces', Georgia, serif",
    ui: "'Jost', sans-serif"
  };
  var fontWeight = {
    light: 300,
    regular: 400,
    medium: 500
  };
  var fontSize = {
    hero: 68,
    display: 48,
    h2: 30,
    lead: 24,
    h3: 22,
    body: 16,
    small: 13,
    micro: 12
  };
  var radius = {
    sm: "4px",
    md: "8px",
    lg: "14px",
    pill: "99px"
  };
  var space = {
    1: "8px",
    2: "16px",
    3: "24px",
    4: "40px",
    5: "64px"
  };
  var tracking = {
    ui: "0.18em",
    // versalitas de navegación / botones
    tight: "-0.02em"
    // títulos display grandes
  };
  var tokens_default = { color, font, fontWeight, fontSize, radius, space, tracking };

  // src/components/Button.jsx
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim(), 1);
  function Button({ variant = "outline", children, ...props }) {
    const base = {
      fontFamily: font.ui,
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      padding: "13px 26px",
      borderRadius: radius.pill,
      cursor: "pointer",
      border: `1px solid ${variant === "solid" ? color.terracota : color.texto}`,
      background: variant === "solid" ? color.terracota : "transparent",
      color: variant === "solid" ? color.blancoOs : color.texto,
      transition: "all .25s ease",
      display: "inline-block",
      textDecoration: "none"
    };
    const [hover, setHover] = import_react.default.useState(false);
    const hoverStyle = hover ? variant === "solid" ? { background: color.vino, borderColor: color.vino } : { background: color.texto, color: color.fondo } : {};
    return /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        ...props,
        style: { ...base, ...hoverStyle, ...props.style }
      },
      children
    );
  }

  // src/components/Tag.jsx
  init_define_import_meta_env();
  var import_react2 = __toESM(require_react_shim(), 1);
  var palettes = {
    terracota: { bg: "#F0E0D7", fg: color.terracota },
    oliva: { bg: "#E4E6DA", fg: color.oliva },
    vino: { bg: "#EFDDE2", fg: color.vino }
  };
  function Tag({ variant = "oliva", children, ...props }) {
    const p = palettes[variant] || palettes.oliva;
    return /* @__PURE__ */ import_react2.default.createElement(
      "span",
      {
        style: {
          display: "inline-block",
          fontFamily: font.ui,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "5px 12px",
          borderRadius: radius.pill,
          background: p.bg,
          color: p.fg,
          margin: 3
        },
        ...props
      },
      children
    );
  }

  // src/components/StudioCard.jsx
  init_define_import_meta_env();
  var import_react3 = __toESM(require_react_shim(), 1);
  function StudioCard({ name, description, image, cta = "Ver estancia", onSelect }) {
    return /* @__PURE__ */ import_react3.default.createElement(
      "div",
      {
        style: {
          background: color.blancoOs,
          border: `1px solid ${color.linea}`,
          borderRadius: radius.lg,
          overflow: "hidden"
        }
      },
      /* @__PURE__ */ import_react3.default.createElement(
        "div",
        {
          style: {
            height: 180,
            display: "flex",
            alignItems: "flex-end",
            padding: 18,
            backgroundImage: image ? `url(${image})` : "linear-gradient(135deg,#c8a98f,#9a6a4a)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }
        },
        /* @__PURE__ */ import_react3.default.createElement(
          "span",
          {
            style: {
              fontFamily: font.display,
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 24,
              color: color.blancoOs
            }
          },
          name
        )
      ),
      /* @__PURE__ */ import_react3.default.createElement("div", { style: { padding: "18px 20px" } }, /* @__PURE__ */ import_react3.default.createElement(
        "p",
        {
          style: {
            fontFamily: font.ui,
            fontSize: 14,
            color: color.textoSec,
            lineHeight: 1.6,
            margin: "0 0 14px"
          }
        },
        description
      ), /* @__PURE__ */ import_react3.default.createElement(Button, { onClick: onSelect, style: { padding: "10px 20px" } }, cta))
    );
  }

  // src/components/Nav.jsx
  init_define_import_meta_env();
  var import_react4 = __toESM(require_react_shim(), 1);
  function Nav({
    links = [
      { label: "Estancias", href: "#estancias" },
      { label: "Retiros", href: "#retiros" },
      { label: "El lugar", href: "#el-lugar" },
      { label: "Diario", href: "#diario" }
    ]
  }) {
    return /* @__PURE__ */ import_react4.default.createElement(
      "nav",
      {
        style: {
          display: "flex",
          gap: 24,
          alignItems: "center",
          flexWrap: "wrap",
          padding: "20px 0",
          borderTop: `1px solid ${color.linea}`,
          borderBottom: `1px solid ${color.linea}`,
          fontFamily: font.ui,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.16em",
          textTransform: "uppercase"
        }
      },
      /* @__PURE__ */ import_react4.default.createElement(
        "span",
        {
          style: {
            fontFamily: font.display,
            fontStyle: "italic",
            fontSize: 24,
            letterSpacing: 0,
            textTransform: "none",
            color: color.texto,
            marginRight: "auto"
          }
        },
        "Cantaura"
      ),
      links.map((l) => /* @__PURE__ */ import_react4.default.createElement("a", { key: l.label, href: l.href, style: { color: color.texto, textDecoration: "none" } }, l.label)),
      /* @__PURE__ */ import_react4.default.createElement(Button, { style: { padding: "10px 22px" } }, "Reservar")
    );
  }

  // src/components/Logo.jsx
  init_define_import_meta_env();
  var import_react5 = __toESM(require_react_shim(), 1);
  function Logo({ height = 40, tone = color.texto, title = "Cantaura", ...props }) {
    return /* @__PURE__ */ import_react5.default.createElement(
      "svg",
      {
        viewBox: "0 0 420 130",
        height,
        role: "img",
        "aria-label": title,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props
      },
      /* @__PURE__ */ import_react5.default.createElement("title", null, title),
      /* @__PURE__ */ import_react5.default.createElement(
        "g",
        {
          transform: "translate(58,72)",
          stroke: tone,
          fill: "none",
          strokeWidth: 2.6,
          strokeLinecap: "round"
        },
        /* @__PURE__ */ import_react5.default.createElement("path", { d: "M-20 -24 C-20 -13 -11 -7 0 -7 C11 -7 20 -13 20 -24" }),
        /* @__PURE__ */ import_react5.default.createElement("circle", { cx: "0", cy: "12", r: "19" })
      ),
      /* @__PURE__ */ import_react5.default.createElement(
        "text",
        {
          x: "96",
          y: "82",
          fontFamily: "'Fraunces', Georgia, serif",
          fontWeight: "300",
          fontSize: "38",
          fill: tone,
          letterSpacing: "-0.3"
        },
        "Cantaura"
      )
    );
  }
  return __toCommonJS(index_exports);
})();
window.Cantaura=Cantaura.__dsMainNs?Object.assign({},Cantaura,Cantaura.__dsMainNs,{__dsMainNs:undefined}):Cantaura;
