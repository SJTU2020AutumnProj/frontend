(function (d) {
    const l = d['af'] = d['af'] || {};
    l.dictionary = Object.assign(l.dictionary || {}, {
        "Block quote": "Blok-aanhaling",
        Bold: "Vetgedruk",
        Cancel: "Kanselleer",
        Italic: "Skuinsgedruk",
        Save: "Berg"
    });
    l.getPluralForm = function (n) {
        return (n != 1);
        ;
    };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
