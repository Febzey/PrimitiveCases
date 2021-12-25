module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: "'Bebas Neue', cursive",
        Poppins: "'Poppins', sans-serif",
        Russo: "'Russo One', sans-serif",
        dmSans: "'DM Sans', sans-serif"
      },
      backgroundImage: { 
        itemsLight: "url('./src/images/itemsBgLigh.svg')",
        itemsDark: "url('./src/images/itemsBgDark.svg')",
        banner: "url('./src/images/banner.svg')",
        bannerDark: "url('./src/images/bannerdark.svg')",
        cartItem: "url('./src/images/cartItemBg.svg')"
      }
    },
  },
  plugins: [],
}
