module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/img/bg-login.jpg')",
      },
      backgroundColor: {
        "white-transparent": "rgb(255 255 255 / 48%)",
      },
      boxShadow: {
        "3xl": "0 4px 20px 0 rgb(31 38 135 / 37%)",
      },
      height:{
        'h-vh': 'calc( 100vh - 80px )',
      }
    },
  },
  plugins: [],
};
