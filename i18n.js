 function updateContent_test(root) {
     console.log("updateContent_test, lan= " + i18next.language);
     substituteI18(root.getElementsByClassName('dd1'), i18next.t('dd1'));
     substituteI18(root.getElementsByClassName('dd2'), i18next.t('dd2'));
     substituteI18(root.getElementsByClassName('dd3'), i18next.t('dd3'));

     substituteI18(root.getElementsByClassName('ss1'), i18next.t('ss1'));
     substituteI18(root.getElementsByClassName('ss2'), i18next.t('ss2'));
     substituteI18(root.getElementsByClassName('ss3'), i18next.t('ss3'));
     substituteI18(root.getElementsByClassName('ss4'), i18next.t('ss4'));

     substituteI18(root.getElementsByClassName('rn1'), i18next.t('rn1'));
     substituteI18(root.getElementsByClassName('rn2'), i18next.t('rn2'));
     substituteI18(root.getElementsByClassName('rn3'), i18next.t('rn3'));
     substituteI18(root.getElementsByClassName('rn4'), i18next.t('rn4'));
     substituteI18(root.getElementsByClassName('rn5'), i18next.t('rn5'));
     substituteI18(root.getElementsByClassName('rn6'), i18next.t('rn6'));
     substituteI18(root.getElementsByClassName('rn7'), i18next.t('rn7'));
     substituteI18(root.getElementsByClassName('rn8'), i18next.t('rn8'));
     substituteI18(root.getElementsByClassName('rn9'), i18next.t('rn9'));
     substituteI18(root.getElementsByClassName('rn11'), i18next.t('rn11'));

     substituteI18(root.getElementsByClassName('pp1'), i18next.t('pp1'));
     substituteI18(root.getElementsByClassName('pp2'), i18next.t('pp2'));
     substituteI18(root.getElementsByClassName('pp3'), i18next.t('pp3'));
     substituteI18(root.getElementsByClassName('pp4'), i18next.t('pp4'));
     substituteI18(root.getElementsByClassName('pp5'), i18next.t('pp5'));
     substituteI18(root.getElementsByClassName('pp6'), i18next.t('pp6'));
     substituteI18(root.getElementsByClassName('pp7'), i18next.t('pp7'));
     substituteI18(root.getElementsByClassName('pp8'), i18next.t('pp8'));
     substituteI18(root.getElementsByClassName('pp9'), i18next.t('pp9'));
     substituteI18(root.getElementsByClassName('pp10'), i18next.t('pp10'));
     substituteI18(root.getElementsByClassName('pp11'), i18next.t('pp11'));
     substituteI18(root.getElementsByClassName('pp12'), i18next.t('pp12'));

     substituteI18(root.getElementsByClassName('pj1'), i18next.t('pj1'));
     substituteI18(root.getElementsByClassName('pj2'), i18next.t('pj2'));
     substituteI18(root.getElementsByClassName('pj3'), i18next.t('pj3'));
     substituteI18(root.getElementsByClassName('pj4'), i18next.t('pj4'));
     substituteI18(root.getElementsByClassName('pj5'), i18next.t('pj5'));
     substituteI18(root.getElementsByClassName('pj6'), i18next.t('pj6'));
     substituteI18(root.getElementsByClassName('pj7'), i18next.t('pj7'));

     // root.getElementById('title').innerHTML = i18next.t('title', { what: 'i18next' });
 }

 function substituteI18(array, txt) {
    for (var index = 0; index < array.length; index ++) {
        array[index].innerHTML = txt
    }

 }