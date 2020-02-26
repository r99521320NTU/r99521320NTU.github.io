 function updateContent_test(root) {
     console.log("updateContent_test, lan= " + i18next.language);
     root.getElementById('dd1').innerHTML = i18next.t('dd1');
     root.getElementById('dd2').innerHTML = i18next.t('dd2');
     root.getElementById('dd3').innerHTML = i18next.t('dd3');

     root.getElementById('ss1').innerHTML = i18next.t('ss1');
     root.getElementById('ss2').innerHTML = i18next.t('ss2');
     root.getElementById('ss3').innerHTML = i18next.t('ss3');
     root.getElementById('ss4').innerHTML = i18next.t('ss4');

     // root.getElementById('title').innerHTML = i18next.t('title', { what: 'i18next' });
 }