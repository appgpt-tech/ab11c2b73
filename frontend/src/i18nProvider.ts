// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Student":{"name":"student","fields":{"id":"id","name":"name","surname":"surname"}},"Activity":{"name":"activity","fields":{"id":"id","description":"description","nameoftheTutor":"nameoftheTutor","costperlesson":"costperlesson"}},"Attendance":{"name":"attendance","fields":{"id":"id","date":"date","time":"time","studentid":"studentid","activityid":"activityid"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    