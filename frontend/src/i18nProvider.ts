// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Products":{"name":"products","fields":{"productId":"productId","sku":"sku","name":"name","price":"price","weight":"weight","description":"description","thumbnail":"thumbnail","image":"image","categoryId":"categoryId","createDate":"createDate","stock":"stock","id":"id"}},"Productcategories":{"name":"productCategories","fields":{"id":"id","categoryDescription":"categoryDescription"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    