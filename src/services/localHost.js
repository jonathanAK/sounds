export const saveSettings = ({singleNote, resolvingNotes}) => {
    const settings = JSON.parse(localStorage.getItem("settings") || '{}');
    if(singleNote) settings.singleNote = singleNote;
    if(resolvingNotes) settings.resolvingNotes = resolvingNotes;
    localStorage.setItem("settings", JSON.stringify(settings));
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