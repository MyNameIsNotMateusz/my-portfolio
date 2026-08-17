import { demoWmsImages, kScopeImages, kErpImages } from "./projectImages";

export const projects = [
  {
    title: "Demo WMS",
    subtitle:
      "A warehouse and production management system built for a real automotive manufacturing environment.",
    slides: [
      { img: demoWmsImages.demoWmsDashboard },
      { img: demoWmsImages.demoWmsLogin },
      { img: demoWmsImages.createComponents },
      { img: demoWmsImages.plannedDeliveries },
      { img: demoWmsImages.recipes },
      { img: demoWmsImages.stockModification },
    ],
  },
  {
    title: "K-Scope",
    subtitle:
      "A platform for Korean companies to research Korean businesses operating in Poland through financial reports, company data, and market analytics.",
    slides: [
      { img: kScopeImages.company },
      { img: kScopeImages.kScopeDashboard },
      { img: kScopeImages.mapChart },
      { img: kScopeImages.profile },
      { img: kScopeImages.searchPage },
    ],
  },
  {
    title: "K-ERP",
    subtitle:
      "A business platform where companies can submit requests to purchase warehouse and production management systems.",
    slides: [
      { img: kErpImages.contactForm },
      { img: kErpImages.kErpDashboard },
      { img: kErpImages.kErpLogin },
      { img: kErpImages.system },
    ],
  },
];
