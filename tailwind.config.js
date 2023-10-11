/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: ".75rem",
          sm: "1rem",
          lg: "2.5rem",
          xl: "4.5rem",
          "2xl": "7rem",
        },
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        "purple-blue": {
          100: "#E9E3FF",
          200: "#B9A2FF",
          300: "#9374FF",
          400: "#7551FF",
          500: "#4318FF", // primary color
          600: "#3311DB",
          700: "#2100B6",
          800: "#190793",
          900: "#11047A",
        },
        blue: {
          100: "#D7E3FF",
          200: "#AFC6FF",
          300: "#88A8FF",
          400: "#6A8EFF",
          500: "#3964FF",
          600: "#294DDB",
          700: "#1C38B7",
          800: "#122693",
          900: "#0A197A",
        },
        "light-blue": {
          100: "#D7FAFF",
          200: "#AFF1FF",
          300: "#88E3FF",
          400: "#6AD2FF",
          500: "#39B7FF",
          600: "#2990DB",
          700: "#1C6CB7",
          800: "#124D93",
          900: "#0A367A",
        },
        cyan: {
          100: "#D7FFF4",
          200: "#AFFFF0",
          300: "#88FFF2",
          400: "#6AFFFB",
          500: "#39F3FF",
          600: "#29C1DB",
          700: "#1C94B7",
          800: "#126B93",
          900: "#0A4E7A",
        },
        teal: {
          100: "#C9FAE9",
          200: "#94F5DC",
          300: "#5CE1CA",
          400: "#33C3B7",
          500: "#039C9C",
          600: "#027A86",
          700: "#015D70",
          800: "#00435A",
          900: "#00314A",
        },
        green: {
          100: "#C9FBD5",
          200: "#95F7B6",
          300: "#5DE89B",
          400: "#35D28A",
          500: "#00B574", // success color
          600: "#009B73",
          700: "#00826D",
          800: "#006862",
          900: "#005356",
        },
        "light-green": {
          100: "#CDFED9",
          200: "#9BFDBD",
          300: "#69FAA9",
          400: "#43F5A3",
          500: "#07EF9B",
          600: "#05CD99",
          700: "#04AC90",
          800: "#028A82",
          900: "#016E72",
        },
        lime: {
          100: "#EDFECD",
          200: "#D6FD9B",
          300: "#B9FA69",
          400: "#9BF543",
          500: "#6DEF07",
          600: "#53CD05",
          700: "#3BAC04",
          800: "#288A02",
          900: "#1A7201",
        },
        yellow: {
          100: "#FFFCD2",
          200: "#FFF8A5",
          300: "#FFF479",
          400: "#FFF057",
          500: "#FFE920",
          600: "#DBC517",
          700: "#B7A310",
          800: "#93820A",
          900: "#7A6A06",
        },
        amber: {
          100: "#FFF9D2",
          200: "#FFF1A5",
          300: "#FFE779",
          400: "#FFDE57",
          500: "#FFCE20",
          600: "#DBAB17",
          700: "#B78B10",
          800: "#936C0A",
          900: "#7A5606",
        },
        orange: {
          100: "#FFF6DA",
          200: "#FFEAB5",
          300: "#FFDB90",
          400: "#FFCD75",
          500: "#FFB547", // warning color
          600: "#DB9133",
          700: "#B77023",
          800: "#935216",
          900: "#7A3C0D",
        },
        "deep-orange": {
          100: "#FFEDD3",
          200: "#FFD7A7",
          300: "#FFBB7B",
          400: "#FFA05A",
          500: "#FF7224",
          600: "#DB531A",
          700: "#B73912",
          800: "#93230B",
          900: "#7A1306",
        },
        red: {
          100: "#FDE0D0",
          200: "#FCBAA2",
          300: "#F68A73",
          400: "#EE5D50",
          500: "#E31A1A", // error color
          600: "#C31322",
          700: "#A30D27",
          800: "#830828",
          900: "#6C0429",
        },
        pink: {
          100: "#FDD0D7",
          200: "#FCA2B8",
          300: "#F673A0",
          400: "#EE5095",
          500: "#E31A87",
          600: "#C31384",
          700: "#A30D7C",
          800: "#830870",
          900: "#6C0466",
        },
        purple: {
          100: "#FBD0FD",
          200: "#F1A2FC",
          300: "#DE73F6",
          400: "#C650EE",
          500: "#A31AE3",
          600: "#7F13C3",
          700: "#5F0DA3",
          800: "#440883",
          900: "#30046C",
        },
        "deep-purple": {
          100: "#E8D0FD",
          200: "#CEA2FC",
          300: "#AF73F6",
          400: "#9150EE",
          500: "#661AE3",
          600: "#4E13C3",
          700: "#3A0DA3",
          800: "#280883",
          900: "#1C046C",
        },
        grey: {
          100: "#FAFCFE",
          200: "#F6F8FD",
          300: "#F4F7FE",
          400: "#E9EDF7",
          500: "#E0E5F2", // primary grey
          600: "#A3AED0",
          700: "#707EAE",
          800: "#47548C",
          900: "#2B3674",
        },
        "dark-grey": {
          100: "#EFF4FB",
          200: "#E1E9F8",
          300: "#C9D4EA",
          400: "#B0BBD5",
          500: "#8F9BBA", // placeholder color
          600: "#68769F",
          700: "#485585",
          800: "#2D396B",
          900: "#1B2559",
        },
        primary: "#4318FF",
        success: "#00B574",
        warning: "#FFB547",
        error: "#E31A1A",
        "primary-grey": "#E0E5F2",
        "placeholder-grey": "#8F9BBA",
      },
      boxShadow: {
        main: "0px 32px 64px -12px rgba(85, 105, 135, 0.13);",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
