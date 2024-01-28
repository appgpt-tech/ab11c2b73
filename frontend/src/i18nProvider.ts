// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Student":{"name":"student","fields":{"id":"id","name":"name"}},"Activity":{"name":"activity","fields":{"id":"id","description":"description","tutorName":"tutorName","costPerLesson":"costPerLesson"}},"Attendance":{"name":"attendance","fields":{"id":"id","date":"date","time":"time","studentId":"studentId","activityId":"activityId"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    