tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        serif: ['Chonburi', 'serif']
      },
      colors: {
        beige: "#BFA980",
        lightBeige: "#F3EAC9",
        blue: "#0000ff",
        lightBlue: "#A9CDD4",
        yellow: "#ffaa00",
        red: "#ff0000",
        geen: "#00ff00",
        gray: "#cccccc",
        darkGray: "#898989",
      },
      backgroundImage: {
        "header-gradient": "linear-gradient(to bottom, #ffffff, transparent)"
      },
      boxShadow: {
        cardShadow: "2px 2px 15px rgba(0, 0, 0, .2)"
      }
    }
  }
}