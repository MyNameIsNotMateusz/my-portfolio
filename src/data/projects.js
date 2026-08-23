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
    liveDemoUrl: "https://mynameisnotmateusz.github.io/demo-wms/#/login",
    githubUrl: "https://github.com/mynameisnotmateusz/demo-wms",
  },
  {
    title: "K-Scope",
    subtitle:
      "A business platform for Korean companies to explore Korean businesses operating in Poland, with access to company data, financial reports, and market analytics.",
    slides: [
      { img: kScopeImages.company },
      { img: kScopeImages.kScopeDashboard },
      { img: kScopeImages.mapChart },
      { img: kScopeImages.profile },
      { img: kScopeImages.searchPage },
    ],
    liveDemoUrl: "https://k-scope.pl/",
  },
  {
    title: "K-ERP",
    subtitle:
      "A business platform for companies interested in implementing warehouse and production management systems.",
    slides: [
      { img: kErpImages.contactForm },
      { img: kErpImages.kErpDashboard },
      { img: kErpImages.kErpLogin },
      { img: kErpImages.system },
    ],
    liveDemoUrl: "https://erp.k-scope.pl/",
    githubUrl: "https://github.com/MyNameIsNotMateusz/k-erp",
  },
];
