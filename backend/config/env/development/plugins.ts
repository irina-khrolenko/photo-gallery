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
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    },
  },
};
