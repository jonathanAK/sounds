export const saveSettings = ({singleNote}) => {
    localStorage.setItem("settings", JSON.stringify({singleNote}));
};

export const loadSettings = () => {
    const settings = localStorage.getItem("settings") || '{}';
    window.globals = window.globals || {};
    try{
        window.globals.settings = JSON.parse(settings);
    }catch(e){
        console.log(e);
        window.globals.settings = {};
    }
};