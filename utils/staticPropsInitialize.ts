import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const staticPropsInitialize = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default staticPropsInitialize;
