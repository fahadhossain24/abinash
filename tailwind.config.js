module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {},
      },
      daisyui: {
        themes: [{
            abinashTheme: {
                "primary": "#4AB9F2",
                "secondary": "#0081C3",
                "accent": "#23EAD2"
            }
        }, "light", "cupcake"],
      },
    plugins: [require("daisyui")],
  }