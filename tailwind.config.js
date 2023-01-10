module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        width: {
          150: "150px",
          190: "190px",
        },
        height: {
          225: "225px",
        },
        minWidth: {
          210: "210px",
        },
        minHeight: {
          210: "210px",

        },
        screen: {
          sm: "340px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
        colors: {
          headerColor: "#142327",
          textColor: "#727272",
          primary: "#f6d365",
        }
      },
    },
  };