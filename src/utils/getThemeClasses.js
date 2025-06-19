
export default function getThemeClasses(darkMode) {
    return{
    bg: darkMode ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50',
    text: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-slate-300' : 'text-gray-600',
    cardBg: darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-white',
    cardBorder: darkMode ? 'border-slate-700' : 'border-gray-200',
    navBg: darkMode ? 'bg-slate-900/95' : 'bg-white/95',
    navBorder: darkMode ? 'border-slate-800' : 'border-gray-200',
    skillsBg: darkMode ? 'bg-slate-900/50' : 'bg-gray-100/50',
    footerBg: darkMode ? 'bg-slate-900' : 'bg-gray-200',
    footerBorder: darkMode ? 'border-slate-800' : 'border-gray-300',
    modalBg: darkMode ? 'bg-slate-900' : 'bg-white',
    modalBorder: darkMode ? 'border-slate-700' : 'border-gray-200',
    buttonSecondary: darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300',
    buttonSecondaryText: darkMode ? 'text-white' : 'text-gray-900',
    hoverBorder: darkMode ? 'hover:border-purple-500' : 'hover:border-purple-400',
    techBg: darkMode ? 'bg-slate-700' : 'bg-gray-100',
    techText: darkMode ? 'text-slate-200' : 'text-gray-700'
    }
  };
