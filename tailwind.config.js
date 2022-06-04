
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      borderWidth:{
        '1':'1px',
        '1.5':'.1px',
        },
      spacing:{
        '90':'36rem',
        'bottom':"90vh"
        },
      colors:{
        'dark-right':'#222E35',
        'dark-header':'#202C33',
        'dark-left':'#111B21',
        'dark-gray':'#374045',
        'dark-icons':'#AEBAC1',
        'light-gray':'#DFF3ED',
        'active-light':'#2A3942'
        },
    }
   
  }
}