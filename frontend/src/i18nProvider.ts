// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Student":{"name":"student","fields":{"studentId":"studentId","name":"name","id":"id"}},"Activity":{"name":"activity","fields":{"activityId":"activityId","description":"description","tutorName":"tutorName","costPerLesson":"costPerLesson","id":"id"}},"Attendance":{"name":"attendance","fields":{"attendanceId":"attendanceId","date":"date","studentId":"studentId","activityId":"activityId","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    