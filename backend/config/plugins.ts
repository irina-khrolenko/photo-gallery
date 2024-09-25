export default {
  translate: {
    translatedFieldTypes: [],
  },
  "schemas-to-ts": {
    enabled: true,
    config: {
      logLevel: 0,
      usePrettierIfAvailable: true,
      destinationFolder: "generated-interfaces",
      contentTypesToIgnore: ["plugin::upload.folder", "plugin::i18n.locale"],
    },
  },
};
