const lang = "en";

export const config = {
  namespaced: true,
  state: {
    label: {
      en: {
        aboutPage: {
          title: "About",
        },
      },
      fr: {
        aboutPage: {
          title: "About",
        },
      },
    },
  },

  getters: {
    labelAboutPage: (state) => state.label[lang].aboutPage,
  },
};
