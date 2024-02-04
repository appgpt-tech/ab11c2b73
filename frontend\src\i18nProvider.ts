// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

    const enResources = { resources: {"Users":{"name":"Users","fields":{"user_id":"User ID","name":"Name","email":"Email","id":"id"}},"Customers":{"name":"Customers","fields":{"customer_id":"Customer ID","name":"Name","email":"Email","id":"id"}}}};
const frResources = { resources: {"Users":{"name":"Utilisateurs","fields":{"user_id":"ID Utilisateur","name":"Nom","email":"Email","id":"id"}},"Customers":{"name":"Clients","fields":{"customer_id":"ID Client","name":"Nom","email":"Email","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);
const fr = mergeTranslations(frOriginal,frResources);

    const translations = { en, fr};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"},{"locale":"fr","name":"Français"}]
    );
    