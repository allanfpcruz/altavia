tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        serif: ['Chonburi', 'serif']
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        beige: "#BFA980",
        lightBeige: "#F3EAC9",
        blue: "#0000ff",
        lightBlue: "#A9CDD4",
        yellow: "#ffaa00",
        red: "#ff0000",
        geen: "#00ff00",
        gray: "var(--gray)",
        darkGray: "#898989",
        bodyBackground: "var(--body-bg)",
        darkBodyBackground: "var(--dark-body-bg)",
        slideBackground: "var(--slide-bg)",
        footerBackground: "var(--footer-bg)",
        transparentBackground: "var(--transparent)",
        lightText: "var(--light-text)",
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(to bottom, #ffffff, transparent)"
      },
      boxShadow: {
        cardShadow: "var(--card-shadow)",
      },
      screens: {
        lg: '1096px',
        'xmd': '910px', 
        md: '872px',
        sm: '774px',
        'xm': '640px',
        'xxm': '450px'
      }
    }
  }
}