const vehicleTypes = ["Car", "SUV", "Pickup", "Van", "Truck", "Bus"];
const propulsionSystems = [
  "Gasoline",
  "Diesel",
  "HEV",
  "PHEV",
  "BEV",
  "FCEV",
];

const currencies = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "CNY",
  "KRW",
  "THB",
  "INR",
  "IDR",
  "TRY",
  "CAD",
  "MXN",
  "BRL",
  "NOK",
  "SEK",
  "DKK",
  "PLN",
  "AUD",
  "MYR",
  "VND",
  "ARS",
];

const euCountries = [
  "Denmark",
  "France",
  "Germany",
  "Italy",
  "Netherlands",
  "Poland",
  "Spain",
  "Sweden",
].sort();

const productionCountries = [
  "Argentina",
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "Colombia",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Malaysia",
  "Mexico",
  "South Korea",
  "Spain",
  "Sweden",
  "Thailand",
  "Turkey",
  "UK",
  "USA",
];

const salesCountries = [
  "Argentina",
  "Australia",
  "Azerbaijan",
  "Belarus",
  "Brazil",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Egypt",
  "EU",
  "India",
  "Indonesia",
  "Israel",
  "Japan",
  "Malaysia",
  "Mexico",
  "New Zealand",
  "Norway",
  "Philippines",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Thailand",
  "Turkey",
  "UAE",
  "UK",
  "USA",
  "Vietnam",
];

const builtInRateData = {
  updatedAt: "2026-02-12",
  sourceNote: "Baseline public references; verify HS line and origin rules for transaction pricing.",
  tariffs: [
    { origin: "*", destination: "China", vehicleType: "*", propulsion: "*", rate: 0.15, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/CHN_e.pdf", notes: "HS 8703 baseline MFN often referenced at 15%; sub-lines vary." },
    { origin: "*", destination: "Japan", vehicleType: "*", propulsion: "*", rate: 0, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/JPN_e.pdf", notes: "Passenger cars generally duty-free under MFN." },
    { origin: "*", destination: "South Korea", vehicleType: "*", propulsion: "*", rate: 0.08, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/KOR_e.pdf", notes: "Common baseline MFN for many passenger vehicle lines is 8%." },
    { origin: "*", destination: "Singapore", vehicleType: "*", propulsion: "*", rate: 0.2, source: "https://www.customs.gov.sg/businesses/importing-goods/importing-dutiable-motor-vehicles/duty-rates", notes: "Singapore imposes 20% excise duty (customs duty) on imported motor vehicles under HS 8703." },
    { origin: "*", destination: "Thailand", vehicleType: "*", propulsion: "*", rate: 0.8, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/THA_e.pdf", notes: "CBU passenger car duties are high and vary; 80% used as baseline." },
    { origin: "*", destination: "Indonesia", vehicleType: "*", propulsion: "*", rate: 0.5, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/IDN_e.pdf", notes: "MFN varies by HS details; 50% used as baseline reference." },
    { origin: "*", destination: "Turkey", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/TUR_e.pdf", notes: "MFN baseline commonly referenced at 10%." },
    { origin: "*", destination: "UK", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://www.gov.uk/trade-tariff", notes: "UKGT baseline for many passenger cars is 10% (non-preferential)." },
    { origin: "*", destination: "France", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU common external tariff baseline for passenger cars is generally 10%." },
    { origin: "*", destination: "Germany", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU common external tariff baseline for passenger cars is generally 10%." },
    { origin: "*", destination: "Spain", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU common external tariff baseline for passenger cars is generally 10%." },
    { origin: "*", destination: "Italy", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU common external tariff baseline for passenger cars is generally 10%." },
    { origin: "*", destination: "Denmark", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU common external tariff baseline for passenger cars is generally 10%." },
    { origin: "*", destination: "Norway", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/NOR_e.pdf", notes: "10% is a common MFN reference; agreement-origin may reduce it." },
    { origin: "*", destination: "Sweden", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU common external tariff baseline for passenger cars is generally 10%." },
    { origin: "*", destination: "Netherlands", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU common external tariff baseline for passenger cars is generally 10%." },
    { origin: "*", destination: "Poland", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU common external tariff baseline for passenger cars is generally 10%." },
    { origin: "*", destination: "Argentina", vehicleType: "*", propulsion: "*", rate: 0.35, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/ARG_e.pdf", notes: "Commonly referenced under Mercosur external tariff structure for passenger vehicles." },
    { origin: "*", destination: "Vietnam", vehicleType: "*", propulsion: "*", rate: 0.7, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/VNM_e.pdf", notes: "MFN varies by displacement/type; 70% baseline for many CBU lines." },
    { origin: "*", destination: "Malaysia", vehicleType: "*", propulsion: "*", rate: 0.3, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/MYS_e.pdf", notes: "Passenger vehicle import duty varies; 30% used as baseline reference." },
    { origin: "Thailand", destination: "Malaysia", vehicleType: "*", propulsion: "*", rate: 0, source: "https://asean.org/asean-economic-community/asean-free-trade-area-afta-council/", notes: "ATIGA: 0% tariff for intra-ASEAN trade (subject to rules of origin - typically 40% ASEAN content)." },
    { origin: "Indonesia", destination: "Thailand", vehicleType: "*", propulsion: "*", rate: 0, source: "https://asean.org/asean-economic-community/asean-free-trade-area-afta-council/", notes: "ATIGA: 0% tariff for intra-ASEAN trade (subject to rules of origin - typically 40% ASEAN content)." },
    { origin: "Thailand", destination: "Australia", vehicleType: "*", propulsion: "*", rate: 0, source: "https://aanzfta.asean.org/", notes: "AANZFTA: 0% tariff for automotive products (subject to rules of origin)." },
    { origin: "China", destination: "Australia", vehicleType: "*", propulsion: "*", rate: 0, source: "https://www.dfat.gov.au/trade/agreements/chafta", notes: "ChAFTA (2014): 0% tariff for passenger vehicles; duty elimination under FTA schedule." },
    { origin: "Thailand", destination: "New Zealand", vehicleType: "*", propulsion: "*", rate: 0, source: "https://aanzfta.asean.org/", notes: "AANZFTA: 0% tariff for automotive products (subject to rules of origin)." },
    { origin: "*", destination: "India", vehicleType: "*", propulsion: "*", rate: 0.7, source: "https://www.spinny.com/blog/car-import-duty-guide-india/", notes: "CBU passenger vehicles: Basic Customs Duty 70% (Spinny summary). Additional AIDC / cess apply depending on CIF and vehicle class (AIDC 40% for CIF > $40k; used vehicles face higher effective AIDC). Confirm HS-lines with CBIC notifications." },
    { origin: "*", destination: "Australia", vehicleType: "*", propulsion: "*", rate: 0.05, source: "https://www.abf.gov.au/importing-exporting-and-manufacturing/tariff-classification/current-tariff", notes: "General duty for many passenger vehicles is 5%; FTA may reduce to 0." },
    { origin: "*", destination: "New Zealand", vehicleType: "*", propulsion: "*", rate: 0, source: "https://www.customs.govt.nz/business/tariffs/", notes: "New Zealand has 0% tariffs for most imported vehicles under MFN." },
    { origin: "*", destination: "Philippines", vehicleType: "*", propulsion: "BEV", rate: 0, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/PHL_e.pdf", notes: "BEVs are duty-free under Republic Act 11697 (EVIDA - Electric Vehicle Industry Development Act, 2022). Incentive period through 2028." },
    { origin: "*", destination: "Philippines", vehicleType: "*", propulsion: "PHEV", rate: 0.3, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/PHL_e.pdf", notes: "PHEV import tariff 30% MFN rate (not covered by EVIDA duty exemption)." },
    { origin: "*", destination: "Philippines", vehicleType: "*", propulsion: "*", rate: 0.3, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/PHL_e.pdf", notes: "Standard MFN tariff for passenger vehicles 30% (ICE and other propulsion types)." },
    { origin: "*", destination: "Qatar", vehicleType: "*", propulsion: "*", rate: 0.05, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/QAT_e.pdf", notes: "GCC common external tariff for passenger vehicles is 5%." },
    { origin: "*", destination: "Saudi Arabia", vehicleType: "*", propulsion: "*", rate: 0.05, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/SAU_e.pdf", notes: "GCC common external tariff for passenger vehicles is 5%." },
    { origin: "*", destination: "UAE", vehicleType: "*", propulsion: "*", rate: 0.05, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/ARE_e.pdf", notes: "GCC common external tariff for passenger vehicles is 5%." },
    { origin: "*", destination: "USA", vehicleType: "*", propulsion: "*", rate: 0.025, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/USA_e.pdf", notes: "US MFN baseline for passenger vehicles is commonly cited at 2.5% (verify HS sub-lines)." },
    { origin: "*", destination: "Canada", vehicleType: "*", propulsion: "*", rate: 0.061, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/CAN_e.pdf", notes: "Canada MFN baseline for many passenger vehicle lines around 6.1% (verify HS sub-lines and provincial measures)." },
    { origin: "*", destination: "Mexico", vehicleType: "*", propulsion: "*", rate: 0.1, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/MEX_e.pdf", notes: "Mexico MFN baseline used as a conservative placeholder (verify under USMCA preferential treatment)." },
    { origin: "*", destination: "Brazil", vehicleType: "*", propulsion: "BEV", rate: 0.25, source: "https://www.argusmedia.com/es/news-and-insights/latest-market-news/2715940-brazil-reviews-import-tariffs-on-evs-denies-china-byd", notes: "Brazil BEV tariff currently 25% (as of 2026). CAMEX scheduled increase to 35% effective January 2027." },
    { origin: "*", destination: "Brazil", vehicleType: "*", propulsion: "PHEV", rate: 0.28, source: "https://www.argusmedia.com/es/news-and-insights/latest-market-news/2715940-brazil-reviews-import-tariffs-on-evs-denies-china-byd", notes: "Brazil PHEV/HEV tariff currently 28% (as of 2026). CAMEX scheduled increase to 35% effective January 2027." },
    { origin: "*", destination: "Brazil", vehicleType: "*", propulsion: "*", rate: 0.35, source: "https://www.argusmedia.com/es/news-and-insights/latest-market-news/2715940-brazil-reviews-import-tariffs-on-evs-denies-china-byd", notes: "Brazil ICE and other vehicle tariff 35%. All propulsion types will be unified to 35% by January 2027." },
    { origin: "*", destination: "Colombia", vehicleType: "*", propulsion: "*", rate: 0.15, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/COL_e.pdf", notes: "Colombia MFN baseline placeholder at 15% for passenger vehicles; verify HS-specific rates." },
    { origin: "*", destination: "Azerbaijan", vehicleType: "*", propulsion: "*", rate: 0.10, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/", notes: "Azerbaijan MFN baseline placeholder at 10% for passenger vehicles; verify HS-specific rates." },
    { origin: "*", destination: "Belarus", vehicleType: "*", propulsion: "*", rate: 0.10, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/", notes: "Belarus MFN baseline placeholder at 10% for passenger vehicles; verify HS-specific rates." },
    { origin: "*", destination: "Chile", vehicleType: "*", propulsion: "*", rate: 0.06, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/CHL_e.pdf", notes: "Chile MFN baseline placeholder at 6% for passenger vehicles; verify HS-specific rates." },
    { origin: "*", destination: "Egypt", vehicleType: "*", propulsion: "*", rate: 0.20, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/EGY_e.pdf", notes: "Egypt MFN baseline placeholder at 20% for passenger vehicles; verify HS-specific rates." },
    { origin: "*", destination: "Israel", vehicleType: "*", propulsion: "*", rate: 0.02, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/ISR_e.pdf", notes: "Israel MFN baseline placeholder at 2% for passenger vehicles; verify HS-specific rates." },
    { origin: "*", destination: "Russia", vehicleType: "*", propulsion: "*", rate: 0.10, source: "https://www.wto.org/english/res_e/statis_e/daily_update_e/tariff_profiles/RUS_e.pdf", notes: "Russia MFN baseline placeholder at 10% for passenger vehicles; verify HS-specific rates." },
    { origin: "*", destination: "South Africa", vehicleType: "*", propulsion: "*", rate: 0.08, source: "https://www.tradingeconomics.com/south-africa/tariff-rate-applied-on-vehicle-imports-percent-wb-data.html", notes: "South Africa MFN baseline placeholder at 8% for passenger vehicles; verify HS-specific rates." },
    // Additional tariffs for BEV imports originating in China
    { origin: "China", destination: "France", vehicleType: "*", propulsion: "BEV", rate: 0.381, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU baseline 10% + maximum anti-subsidy duty 38.1% on Chinese BEVs (punitive maximum rate). Total effective rate 48.1%." },
    { origin: "China", destination: "Germany", vehicleType: "*", propulsion: "BEV", rate: 0.381, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU baseline 10% + maximum anti-subsidy duty 38.1% on Chinese BEVs (punitive maximum rate). Total effective rate 48.1%." },
    { origin: "China", destination: "Spain", vehicleType: "*", propulsion: "BEV", rate: 0.381, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU baseline 10% + maximum anti-subsidy duty 38.1% on Chinese BEVs (punitive maximum rate). Total effective rate 48.1%." },
    { origin: "China", destination: "Italy", vehicleType: "*", propulsion: "BEV", rate: 0.381, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU baseline 10% + maximum anti-subsidy duty 38.1% on Chinese BEVs (punitive maximum rate). Total effective rate 48.1%." },
    { origin: "China", destination: "Denmark", vehicleType: "*", propulsion: "BEV", rate: 0.381, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU baseline 10% + maximum anti-subsidy duty 38.1% on Chinese BEVs (punitive maximum rate). Total effective rate 48.1%." },
    { origin: "China", destination: "Sweden", vehicleType: "*", propulsion: "BEV", rate: 0.381, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU baseline 10% + maximum anti-subsidy duty 38.1% on Chinese BEVs (punitive maximum rate). Total effective rate 48.1%." },
    { origin: "China", destination: "Netherlands", vehicleType: "*", propulsion: "BEV", rate: 0.381, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU baseline 10% + maximum anti-subsidy duty 38.1% on Chinese BEVs (punitive maximum rate). Total effective rate 48.1%." },
    { origin: "China", destination: "Poland", vehicleType: "*", propulsion: "BEV", rate: 0.381, source: "https://taxation-customs.ec.europa.eu/customs/customs-tariff_en", notes: "EU baseline 10% + maximum anti-subsidy duty 38.1% on Chinese BEVs (punitive maximum rate). Total effective rate 48.1%." },
    { origin: "China", destination: "USA", vehicleType: "*", propulsion: "BEV", rate: 1.025, source: "https://ustr.gov/", notes: "US base MFN 2.5% + additional Section 301 tariff 100% on Chinese BEVs (cumulative). Total effective rate 102.5%." },
    { origin: "China", destination: "Canada", vehicleType: "*", propulsion: "BEV", rate: 1.061, source: "https://www.cbsa-asfc.gc.ca/", notes: "Canada base MFN 6.1% + additional 100% surtax on Chinese BEVs (cumulative). Total effective rate 106.1%." },
    { origin: "China", destination: "Mexico", vehicleType: "*", propulsion: "BEV", rate: 0.60, source: "https://www.gob.mx/", notes: "Mexico base MFN 10% + additional 50% tariff on Chinese BEVs (cumulative). Total effective rate 60%." },
    { origin: "China", destination: "Turkey", vehicleType: "*", propulsion: "BEV", rate: 0.35, source: "https://ticaret.gov.tr/", notes: "Provisional placeholder: Turkey has applied higher duties on certain imports in the past; confirm current BEV-specific measures." },
  ],
  taxes: [
    { destination: "China", taxType: "VAT", rate: 0.13, source: "https://www.chinatax.gov.cn/eng/", notes: "Standard VAT 13%." },
    { destination: "Japan", taxType: "GST", rate: 0.1, source: "https://www.nta.go.jp/english/taxes/consumption_tax/index.htm", notes: "Consumption tax 10%." },
    { destination: "South Korea", taxType: "VAT", rate: 0.1, source: "https://www.nts.go.kr/english/main.do", notes: "VAT 10%." },
    { destination: "South Korea", taxType: "Excise", rate: 0.05, source: "https://www.nts.go.kr/english/main.do", notes: "Individual Consumption Tax generally 5% (policy adjustments may apply)." },
    { destination: "Thailand", taxType: "VAT", rate: 0.07, source: "https://www.rd.go.th/english/6045.html", notes: "VAT currently 7%." },
    { destination: "India", taxType: "GST", rate: 0.28, source: "https://cbic-gst.gov.in/gst-goods-services-rates.html", notes: "Passenger vehicles commonly fall under 28% GST; cess can apply." },
    { destination: "India", taxType: "GST", rate: 0.05, propulsion: "BEV", source: "https://www.spinny.com/blog/car-import-duty-guide-india/; https://www.cbic.gov.in/", notes: "Preferential IGST rate for Electric Vehicles (5%). Confirm exemptions/notifications with CBIC." },
    { destination: "Indonesia", taxType: "VAT", rate: 0.12, source: "https://www.pajak.go.id/", notes: "Standard VAT 12%." },
    { destination: "Turkey", taxType: "VAT", rate: 0.2, source: "https://www.gib.gov.tr/", notes: "Standard VAT 20%; SCT varies by vehicle base/engine." },
    { destination: "UK", taxType: "VAT", rate: 0.2, source: "https://www.gov.uk/vat-rates", notes: "Standard VAT 20%." },
    { destination: "France", taxType: "VAT", rate: 0.2, source: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en", notes: "Standard VAT 20%." },
    { destination: "Germany", taxType: "VAT", rate: 0.19, source: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en", notes: "Standard VAT 19%." },
    { destination: "Spain", taxType: "VAT", rate: 0.21, source: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en", notes: "Standard VAT 21%." },
    { destination: "Italy", taxType: "VAT", rate: 0.22, source: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en", notes: "Standard VAT 22%." },
    { destination: "Denmark", taxType: "VAT", rate: 0.25, source: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en", notes: "Standard VAT 25%." },
    { destination: "Norway", taxType: "VAT", rate: 0.25, source: "https://www.skatteetaten.no/en/", notes: "Standard VAT 25%; EV relief may apply by category." },
    { destination: "Sweden", taxType: "VAT", rate: 0.25, source: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en", notes: "Standard VAT 25%." },
    { destination: "Netherlands", taxType: "VAT", rate: 0.21, source: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en", notes: "Standard VAT 21%." },
    { destination: "Poland", taxType: "VAT", rate: 0.23, source: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en", notes: "Standard VAT 23%." },
    { destination: "Argentina", taxType: "VAT", rate: 0.21, source: "https://www.afip.gob.ar/iva/", notes: "General VAT 21%." },
    { destination: "Vietnam", taxType: "VAT", rate: 0.1, source: "https://www.gdt.gov.vn/wps/portal/english", notes: "Standard VAT 10%." },
    { destination: "Malaysia", taxType: "Excise", rate: 0.75, source: "https://www.aseanbriefing.com/doing-business-guide/malaysia/taxation-and-accounting/excise-duties-malaysia", notes: "Vehicle excise duty calculated based on engine capacity: 60% (<1,500cc), 65% (1,500-1,799cc), 75% (1,800-1,999cc), 90% (2,000-2,499cc), 105% (≥2,500cc). Rate adjusts automatically based on engine capacity input." },
    { destination: "Malaysia", taxType: "GST", rate: 0.1, source: "https://mysst.customs.gov.my/About_SST", notes: "Sales tax regime; many goods at 10%; applied after excise duty." },
    { destination: "Singapore", taxType: "Excise", rate: 0.2, source: "https://www.customs.gov.sg/businesses/importing-goods/importing-dutiable-motor-vehicles/duty-rates", notes: "20% excise duty (customs duty) on imported motor vehicles. Applied on customs value (CIF)." },
    { destination: "Singapore", taxType: "GST", rate: 0.09, source: "https://www.iras.gov.sg/taxes/goods-services-tax-(gst)", notes: "GST 9% (increased from 8% in 2024)." },
    { destination: "Philippines", taxType: "Excise", rate: 0.10, source: "https://www.bir.gov.ph/", notes: "Excise tax calculated based on engine capacity as simplified proxy: 4% (<1,500cc), 10% (1,500-2,999cc), 20% (≥3,000cc). BEVs are exempt from excise tax under EVIDA. Rate adjusts automatically based on engine capacity input." },
    { destination: "Philippines", taxType: "VAT", rate: 0.12, source: "https://www.bir.gov.ph/", notes: "Standard VAT 12%." },
    { destination: "Qatar", taxType: "VAT", rate: 0, source: "https://www.gta.gov.qa/en/", notes: "Qatar currently has no VAT (0%). Plans for introduction have been discussed but not yet implemented." },
    { destination: "Saudi Arabia", taxType: "VAT", rate: 0.15, source: "https://zatca.gov.sa/en/", notes: "Standard VAT 15% (increased from 5% in 2020)." },
    { destination: "UAE", taxType: "VAT", rate: 0.05, source: "https://u.ae/en/information-and-services/finance-and-investment/taxation/value-added-tax", notes: "Standard VAT 5%." },
    { destination: "Australia", taxType: "GST", rate: 0.1, source: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst", notes: "GST 10%; LCT may apply above thresholds." },
    { destination: "New Zealand", taxType: "GST", rate: 0.15, source: "https://www.ird.govt.nz/gst", notes: "GST 15%." }
    ,
    { destination: "USA", taxType: "Other", rate: 0.07, source: "https://www.taxpolicycenter.org/briefing-book/what-are-sales-taxes-and-how-do-they-work", notes: "No federal VAT; state and local sales taxes apply (placeholder average 7%)." },
    { destination: "Canada", taxType: "VAT", rate: 0.05, source: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html", notes: "Federal GST 5%; provincial sales taxes may apply." },
    { destination: "Mexico", taxType: "VAT", rate: 0.16, source: "https://www.sat.gob.mx/", notes: "Standard IVA (VAT) 16% in most regions; verify reduced rates/exemptions." },
    { destination: "Brazil", taxType: "VAT", rate: 0.17, source: "https://www.gov.br/receitafederal/pt-br", notes: "Brazil tax system uses IPI/ICMS/PIS/COFINS; 17% used as a placeholder aggregated VAT estimate (verify by state and tax type)." },
    { destination: "Colombia", taxType: "VAT", rate: 0.19, source: "https://www.dian.gov.co/", notes: "Standard VAT 19% (placeholder)." },
    { destination: "Azerbaijan", taxType: "VAT", rate: 0.18, source: "https://www.wto.org/", notes: "Standard VAT 18% (placeholder)." },
    { destination: "Belarus", taxType: "VAT", rate: 0.20, source: "https://www.wto.org/", notes: "Standard VAT 20% (placeholder)." },
    { destination: "Chile", taxType: "VAT", rate: 0.19, source: "https://www.sii.cl/", notes: "Standard VAT 19% (placeholder)." },
    { destination: "Egypt", taxType: "VAT", rate: 0.14, source: "https://www.mof.gov.eg/", notes: "Standard VAT 14% (placeholder)." },
    { destination: "Israel", taxType: "VAT", rate: 0.17, source: "https://www.taxes.gov.il/", notes: "Standard VAT 17% (placeholder)." },
    { destination: "Russia", taxType: "VAT", rate: 0.20, source: "https://www.nalog.gov.ru/", notes: "Standard VAT 20% (placeholder)." },
    { destination: "South Africa", taxType: "VAT", rate: 0.15, source: "https://www.sars.gov.za/", notes: "Standard VAT 15% (placeholder)." }
  ]
};

const builtInFxData = {
  updatedAt: "2026-02-12",
  base: "USD",
  quoteMode: "usd_per_currency",
  source: "https://open.er-api.com/v6/latest/USD",
  rates: {
    USD: 1,
    EUR: 1.18813528,
    GBP: 1.3643421,
    JPY: 0.00652225,
    CNY: 0.14454395,
    KRW: 0.00069071,
    THB: 0.03216094,
    INR: 0.01102074,
    IDR: 0.00005958,
    TRY: 0.02290079,
    CAD: 0.73700983,
    MXN: 0.05815049,
    BRL: 0.19280587,
    NOK: 0.10547483,
    SEK: 0.11247945,
    DKK: 0.15927229,
    PLN: 0.28198714,
    AUD: 0.71209146,
    MYR: 0.25534429,
    VND: 0.00003854,
    ARS: 0.00068859,
  },
};

const ftaSets = {
  USMCA: new Set(["USA", "Canada", "Mexico"]),
  EU: new Set([
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Denmark",
    "Netherlands",
    "Poland",
    "Sweden",
  ]),
  EU_JAPAN: new Set(["Japan"]),
  EU_KOREA: new Set(["South Korea"]),
  UK: new Set(["UK"]),
  RCEP: new Set([
    "China",
    "Japan",
    "South Korea",
    "Thailand",
    "Indonesia",
    "Vietnam",
    "Malaysia",
    "Australia",
  ]),
  ChAFTA: new Set(["China", "Australia"]),
  CPTPP: new Set(["Japan", "Canada", "Mexico", "Australia", "Vietnam", "Malaysia"]),
  TURKEY: new Set(["Turkey"]),
  MERCOSUR: new Set(["Brazil", "Argentina"]),
  ASEAN: new Set(["Thailand", "Indonesia", "Vietnam", "Malaysia", "Singapore", "Philippines"]),
  AUSTRALIA: new Set(["Australia"]),
  NEW_ZEALAND: new Set(["New Zealand"]),
  CHINA: new Set(["China"]),
  INDIA: new Set(["India"]),
  KOREA: new Set(["South Korea"]),
  JAPAN: new Set(["Japan"]),
};

const ftaReferences = {
  EU_INTERNAL: {
    name: "EU Internal Market",
    source: "https://taxation-customs.ec.europa.eu/customs-4/customs-procedures-import-and-export/customs-procedures/customs-unions_en",
  },
  EU_KOREA: {
    name: "EU-Korea FTA",
    source: "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/republic-korea_en",
  },
  EU_JAPAN: {
    name: "EU-Japan EPA",
    source: "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/japan/eu-japan-agreement_en",
  },
  UK_EU: {
    name: "UK-EU TCA",
    source: "https://www.gov.uk/government/publications/summary-of-the-eu-uk-trade-and-cooperation-agreement",
  },
  RCEP: {
    name: "RCEP",
    source: "https://rcepsec.org/",
  },
  ChAFTA: {
    name: "ChAFTA (China-Australia FTA)",
    source: "https://www.dfat.gov.au/trade/agreements/chafta",
    notes: "China-Australia FTA (2014): Duty elimination schedule for passenger vehicles implemented in stages. Most vehicles benefit from preferential tariff treatment."
  },
  ATIGA: {
    name: "ATIGA (ASEAN Trade in Goods Agreement)",
    source: "https://asean.org/asean-economic-community/asean-free-trade-area-afta-council/",
  },
  AANZFTA: {
    name: "AANZFTA (ASEAN-Australia-New Zealand FTA)",
    source: "https://aanzfta.asean.org/",
  },
  ACFTA: {
    name: "ACFTA (ASEAN-China FTA)",
    source: "https://www.asean.org/asean/external-relations/china/",
    notes: "Note: Whole vehicles (CBU) are typically excluded from ACFTA tariff elimination. Most ASEAN countries maintain high import duties on Chinese vehicles."
  },
  ASEAN_INDIA: {
    name: "ASEAN-India FTA",
    source: "https://commerce.gov.in/trade/international-trade/trade-agreements/",
  },
  INDIA_KOREA: {
    name: "India-Korea CEPA",
    source: "https://commerce.gov.in/trade/international-trade/trade-agreements/",
  },
  ASEAN_KOREA: {
    name: "ASEAN-Korea FTA",
    source: "https://akfta.asean.org/",
  },
};

let elements = {};

const rateData = builtInRateData;
const fxData = builtInFxData;
const calculationDefaults = {
  freightRate: 0.03,
  insuranceRate: 0.005,
};

// Freight and Insurance rates by origin-destination regional pairs (maximal pre-2026 rates)
const shippingRates = {
  freight: [
    // Asia origins
    { originRegion: "Asia", destRegion: "North America", rate: 0.05 },
    { originRegion: "Asia", destRegion: "EU", rate: 0.06 },
    { originRegion: "Asia", destRegion: "Australia/NZ", rate: 0.07 },
    { originRegion: "Asia", destRegion: "Southeast Asia", rate: 0.03 },
    { originRegion: "Asia", destRegion: "Middle East", rate: 0.04 },
    { originRegion: "Asia", destRegion: "Africa", rate: 0.08 },
    { originRegion: "Asia", destRegion: "South America", rate: 0.07 },
    // EU origins
    { originRegion: "EU", destRegion: "North America", rate: 0.04 },
    { originRegion: "EU", destRegion: "Middle East", rate: 0.04 },
    { originRegion: "EU", destRegion: "Africa", rate: 0.05 },
    { originRegion: "EU", destRegion: "Asia", rate: 0.06 },
    { originRegion: "EU", destRegion: "Australia/NZ", rate: 0.07 },
    // Americas origins
    { originRegion: "Americas", destRegion: "EU", rate: 0.05 },
    { originRegion: "Americas", destRegion: "Asia", rate: 0.07 },
    { originRegion: "Americas", destRegion: "North America", rate: 0.02 },
  ],
  insurance: [
    // Standard routes
    { originRegion: "Asia", destRegion: "North America", rate: 0.008 },
    { originRegion: "Asia", destRegion: "EU", rate: 0.009 },
    { originRegion: "Asia", destRegion: "Australia/NZ", rate: 0.010 },
    { originRegion: "Asia", destRegion: "Southeast Asia", rate: 0.006 },
    { originRegion: "Asia", destRegion: "Middle East", rate: 0.008 },
    { originRegion: "Asia", destRegion: "Africa", rate: 0.015 },
    { originRegion: "Asia", destRegion: "South America", rate: 0.012 },
    { originRegion: "EU", destRegion: "North America", rate: 0.007 },
    { originRegion: "EU", destRegion: "Middle East", rate: 0.008 },
    { originRegion: "EU", destRegion: "Africa", rate: 0.012 },
    { originRegion: "EU", destRegion: "Asia", rate: 0.009 },
    { originRegion: "EU", destRegion: "Australia/NZ", rate: 0.010 },
    { originRegion: "Americas", destRegion: "EU", rate: 0.008 },
    { originRegion: "Americas", destRegion: "Asia", rate: 0.010 },
    { originRegion: "Americas", destRegion: "North America", rate: 0.005 },
  ],
};

function getOriginRegion(country) {
  const asiaCountries = ["China", "Japan", "South Korea", "Vietnam", "Thailand", "Indonesia", "Malaysia", "Philippines", "Singapore", "India"];
  const euCountries = ["Germany", "France", "Italy", "Spain", "Denmark", "Netherlands", "Poland", "Sweden", "Norway", "UK"];
  const americasCountries = ["USA", "Canada", "Mexico", "Brazil", "Argentina", "Colombia", "Chile"];
  
  if (asiaCountries.includes(country)) return "Asia";
  if (euCountries.includes(country)) return "EU";
  if (americasCountries.includes(country)) return "Americas";
  return "Asia"; // Default
}

function getDestRegion(country) {
  const northAmericaCountries = ["USA", "Canada"];
  const euCountries = ["Germany", "France", "Italy", "Spain", "Denmark", "Netherlands", "Poland", "Sweden", "Norway", "UK", "EU"];
  const australiaCountries = ["Australia", "New Zealand"];
  const seAsiaCountries = ["Vietnam", "Thailand", "Indonesia", "Malaysia", "Philippines", "Singapore"];
  const middleEastCountries = ["Saudi Arabia", "UAE", "Qatar", "Israel"];
  const africaCountries = ["Egypt", "South Africa"];
  const southAmericaCountries = ["Brazil", "Argentina", "Colombia", "Chile"];
  
  if (northAmericaCountries.includes(country)) return "North America";
  if (euCountries.includes(country)) return "EU";
  if (australiaCountries.includes(country)) return "Australia/NZ";
  if (seAsiaCountries.includes(country)) return "Southeast Asia";
  if (middleEastCountries.includes(country)) return "Middle East";
  if (africaCountries.includes(country)) return "Africa";
  if (southAmericaCountries.includes(country)) return "South America";
  return "Asia";
}

function getFreightRate(origin, destination) {
  const originRegion = getOriginRegion(origin);
  const destRegion = getDestRegion(destination);
  const match = shippingRates.freight.find(r => r.originRegion === originRegion && r.destRegion === destRegion);
  return match ? match.rate : calculationDefaults.freightRate;
}

function getInsuranceRate(origin, destination) {
  const originRegion = getOriginRegion(origin);
  const destRegion = getDestRegion(destination);
  const match = shippingRates.insurance.find(r => r.originRegion === originRegion && r.destRegion === destRegion);
  return match ? match.rate : calculationDefaults.insuranceRate;
}

let hasPendingChanges = false;
let detailedOverridesCache = {};
let currentMsrp = 0;
let currentMargin = 0;

function initializeElements() {
  elements = {
    vehicleType: document.getElementById("vehicleType"),
    propulsion: document.getElementById("propulsion"),
    fobPrice: document.getElementById("fobPrice"),
    fobCurrency: document.getElementById("fobCurrency"),
    fobUsdValue: document.getElementById("fobUsdValue"),
    marginRate: document.getElementById("marginRate"),
    engineCc: document.getElementById("engineCc"),
    engineCcField: document.getElementById("engineCcField"),
    co2Emissions: document.getElementById("co2Emissions"),
    co2Field: document.getElementById("co2Field"),
    vLength: document.getElementById("vLength"),
    lengthField: document.getElementById("lengthField"),
    originCountry: document.getElementById("originCountry"),
    destCountry: document.getElementById("destCountry"),
    destEuCountry: document.getElementById("destEuCountry"),
    destEuCountryField: document.getElementById("destEuCountryField"),
    recalcMsrp: document.getElementById("recalcMsrp"),
    recalcStatus: document.getElementById("recalcStatus"),
    msrpValue: document.getElementById("msrpValue"),
    taxesValue: document.getElementById("taxesValue"),
    landedValue: document.getElementById("landedValue"),
    breakdownBody: document.getElementById("breakdownBody"),
    lastUpdated: document.getElementById("lastUpdated"),
    ftaStatus: document.getElementById("ftaStatus"),
    missingRates: document.getElementById("missingRates"),
    sources: document.getElementById("sources"),
    modal: document.getElementById("modal"),
    modalFields: document.getElementById("modalFields"),
    modalSave: document.getElementById("modalSave"),
    salesVolume: document.getElementById("salesVolume"),
    totalRevenue: document.getElementById("totalRevenue"),
    totalProfit: document.getElementById("totalProfit"),
    profitPerUnit: document.getElementById("profitPerUnit"),
    calculateRevenue: document.getElementById("calculateRevenue"),
  };
}

function setRecalcPending(pending) {
  hasPendingChanges = pending;
  elements.recalcMsrp.disabled = !pending;
  setStatus(
    elements.recalcStatus,
    pending ? "Inputs changed - click Recalculate MSRP" : "Using latest calculation"
  );
  // Also check for conditional fields on change
  checkConditionalFields();
}

function populateSelect(select, options) {
  select.innerHTML = options
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");
}

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function percent(value) {
  return `${value.toFixed(2)}%`;
}

function formatDate(value) {
  if (!value) return "Needs update";
  return value;
}

function setStatus(element, text) {
  element.textContent = text;
}

function detectFta(origin, destination) {
  const ftaImpact = getFtaImpact(origin, destination);
  if (ftaImpact.appliedAgreement) {
    return ftaImpact.appliedAgreement.name;
  }

  if (!origin || !destination) {
    return "Select countries";
  }
  if (ftaSets.USMCA.has(origin) && ftaSets.USMCA.has(destination)) {
    return "USMCA eligible";
  }
  if (ftaSets.EU.has(origin) && ftaSets.EU.has(destination)) {
    return "EU internal market";
  }
  if (ftaSets.EU.has(origin) && ftaSets.EU_JAPAN.has(destination)) {
    return "EU-Japan EPA";
  }
  if (ftaSets.EU.has(destination) && ftaSets.EU_JAPAN.has(origin)) {
    return "EU-Japan EPA";
  }
  if (ftaSets.EU.has(origin) && ftaSets.EU_KOREA.has(destination)) {
    return "EU-Korea FTA";
  }
  if (ftaSets.EU.has(destination) && ftaSets.EU_KOREA.has(origin)) {
    return "EU-Korea FTA";
  }
  if (
    (ftaSets.EU.has(origin) && ftaSets.UK.has(destination)) ||
    (ftaSets.EU.has(destination) && ftaSets.UK.has(origin))
  ) {
    return "UK-EU TCA";
  }
  if (ftaSets.ChAFTA.has(origin) && ftaSets.ChAFTA.has(destination)) {
    return "ChAFTA (China-Australia FTA)";
  }
  if (ftaSets.RCEP.has(origin) && ftaSets.RCEP.has(destination)) {
    return "RCEP member";
  }
  if (ftaSets.ASEAN.has(origin) && ftaSets.ASEAN.has(destination)) {
    return "ATIGA (intra-ASEAN)";
  }
  if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.AUSTRALIA)) {
    return "AANZFTA eligible";
  }
  if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.NEW_ZEALAND)) {
    return "AANZFTA eligible";
  }
  if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.CHINA)) {
    return "ACFTA exists (vehicles excluded)";
  }
  if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.INDIA)) {
    return "ASEAN-India FTA";
  }
  if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.KOREA)) {
    return "ASEAN-Korea FTA";
  }
  if (ftaSets.CPTPP.has(origin) && ftaSets.CPTPP.has(destination)) {
    return "CPTPP member";
  }
  if (ftaSets.EU.has(origin) && ftaSets.TURKEY.has(destination)) {
    return "EU-Turkey Customs Union";
  }
  if (ftaSets.EU.has(destination) && ftaSets.TURKEY.has(origin)) {
    return "EU-Turkey Customs Union";
  }
  if (ftaSets.MERCOSUR.has(origin) && ftaSets.MERCOSUR.has(destination)) {
    return "MERCOSUR";
  }
  return "No major FTA detected";
}

function inBoth(countryA, countryB, groupA, groupB) {
  return (
    (groupA.has(countryA) && groupB.has(countryB)) ||
    (groupA.has(countryB) && groupB.has(countryA))
  );
}

function getFtaImpact(origin, destination) {
  if (!origin || !destination) {
    return { factor: 1, appliedAgreement: null, agreements: [] };
  }

  const agreements = [];

  if (ftaSets.EU.has(origin) && ftaSets.EU.has(destination)) {
    agreements.push({ ...ftaReferences.EU_INTERNAL, factor: 0 });
  }
  if (inBoth(origin, destination, ftaSets.EU, ftaSets.KOREA)) {
    agreements.push({ ...ftaReferences.EU_KOREA, factor: 0 });
  }
  if (inBoth(origin, destination, ftaSets.EU, ftaSets.JAPAN)) {
    agreements.push({ ...ftaReferences.EU_JAPAN, factor: 0 });
  }
  if (inBoth(origin, destination, ftaSets.EU, ftaSets.UK)) {
    agreements.push({ ...ftaReferences.UK_EU, factor: 0 });
  }
  
  // ATIGA: Intra-ASEAN trade - typically 0% tariff for most goods
  if (ftaSets.ASEAN.has(origin) && ftaSets.ASEAN.has(destination)) {
    agreements.push({ ...ftaReferences.ATIGA, factor: 0 });
  }
  
  // AANZFTA: ASEAN-Australia-New Zealand FTA - 0% for most automotive
  if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.AUSTRALIA)) {
    agreements.push({ ...ftaReferences.AANZFTA, factor: 0 });
  }
  if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.NEW_ZEALAND)) {
    agreements.push({ ...ftaReferences.AANZFTA, factor: 0 });
  }
  
  // ACFTA: ASEAN-China FTA - whole vehicles (CBU) are typically EXCLUDED from tariff elimination
  // Most ASEAN countries maintain high import duties on Chinese vehicles despite ACFTA
  // Uncomment below if specific auto parts or CKD benefits need to be modeled:
  // if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.CHINA)) {
  //   agreements.push({ ...ftaReferences.ACFTA, factor: 0 });
  // }
  
  // ChAFTA: China-Australia FTA (2014) - bilateral agreement with duty elimination schedule
  // Passenger vehicles receive preferential tariff treatment vs standard MFN rate
  if (ftaSets.ChAFTA.has(origin) && ftaSets.ChAFTA.has(destination)) {
    agreements.push({ ...ftaReferences.ChAFTA, factor: 0 });
  }
  
  if (ftaSets.RCEP.has(origin) && ftaSets.RCEP.has(destination)) {
    agreements.push({ ...ftaReferences.RCEP, factor: 0.7 });
  }
  if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.INDIA)) {
    agreements.push({ ...ftaReferences.ASEAN_INDIA, factor: 0.85 });
  }
  if (inBoth(origin, destination, ftaSets.INDIA, ftaSets.KOREA)) {
    agreements.push({ ...ftaReferences.INDIA_KOREA, factor: 0.8 });
  }
  if (inBoth(origin, destination, ftaSets.ASEAN, ftaSets.KOREA)) {
    agreements.push({ ...ftaReferences.ASEAN_KOREA, factor: 0.75 });
  }

  if (!agreements.length) {
    return { factor: 1, appliedAgreement: null, agreements };
  }

  const appliedAgreement = agreements.reduce((best, current) =>
    current.factor < best.factor ? current : best
  );

  return {
    factor: appliedAgreement.factor,
    appliedAgreement,
    agreements,
  };
}

function parseNumber(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function computeChinaConsumptionTax(cif, engineCc, propulsion) {
  // EVs typically exempt from consumption tax
  if (!cif || cif <= 0) return { amount: 0, rate: null };
  if (!engineCc || engineCc <= 0) return { amount: 0, rate: null };
  if (/(BEV|FCEV|PHEV)/i.test(propulsion || "")) return { amount: 0, rate: 0 };

  // Bands (approximate) - rate expressed as decimal
  // <=1000cc: 1%; 1001-1500: 3%; 1501-2000:5%; 2001-2500:9%; 2501-3000:12%; 3001-4000:25%; >4000:40%
  let rate = null;
  if (engineCc <= 1000) rate = 0.01;
  else if (engineCc <= 1500) rate = 0.03;
  else if (engineCc <= 2000) rate = 0.05;
  else if (engineCc <= 2500) rate = 0.09;
  else if (engineCc <= 3000) rate = 0.12;
  else if (engineCc <= 4000) rate = 0.25;
  else rate = 0.4;

  const amount = cif * rate;
  return { amount, rate };
}

function matchesEntry(entry, criteria) {
  return Object.keys(criteria).every((key) => {
    const value = entry[key];
    if (value === undefined || value === "*") return true;
    return value === criteria[key];
  });
}

function scoreEntry(entry, criteria) {
  return Object.keys(criteria).reduce((score, key) => {
    const value = entry[key];
    if (value && value !== "*" && value === criteria[key]) {
      return score + 1;
    }
    return score;
  }, 0);
}

function pickBestRate(entries, criteria) {
  let best = null;
  let bestScore = -1;
  entries.forEach((entry) => {
    if (!matchesEntry(entry, criteria)) return;
    const score = scoreEntry(entry, criteria);
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  });
  return best;
}

function getMalaysiaExciseRate() {
  const engineCc = parseNumber(elements.engineCc.value);
  if (!engineCc || engineCc <= 0) {
    return 0.75; // Default to 75% baseline if no engine capacity provided
  }
  if (engineCc < 1500) return 0.60;
  if (engineCc < 1800) return 0.65;
  if (engineCc < 2000) return 0.75;
  if (engineCc < 2500) return 0.90;
  return 1.05; // 2500cc and above
}

function getPhilippinesExciseRate() {
  const engineCc = parseNumber(elements.engineCc.value);
  if (!engineCc || engineCc <= 0) {
    return 0.10; // Default to 10% mid-tier if no engine capacity provided
  }
  // Simplified excise tax based on engine displacement
  // Actual Philippine excise tax is based on net manufacturer's price AND engine size
  // This is a simplified proxy: smaller engines = lower excise, larger engines = higher excise
  if (engineCc < 1500) return 0.04;  // 4% for small engines
  if (engineCc < 3000) return 0.10;  // 10% for mid-size engines
  return 0.20; // 20% for large engines (3000cc+)
}

function getVietnamExciseRate() {
  const engineCc = parseNumber(elements.engineCc.value);
  const propulsion = elements.propulsion.value;
  if (propulsion === "BEV") return 0.03; 
  if (!engineCc || engineCc <= 0) return 0.35;
  if (engineCc <= 1500) return 0.35;
  if (engineCc <= 2000) return 0.40;
  if (engineCc <= 2500) return 0.50;
  if (engineCc <= 3000) return 0.60;
  if (engineCc <= 4000) return 0.90;
  if (engineCc <= 5000) return 1.10;
  if (engineCc <= 6000) return 1.30;
  return 1.50;
}

function getThailandExciseRate() {
  const co2 = parseNumber(elements.co2Emissions.value);
  const engineCc = parseNumber(elements.engineCc.value);
  const propulsion = elements.propulsion.value;
  if (propulsion === "BEV") return 0.02;
  if (engineCc > 3000) return 0.50;
  if (!co2 || co2 <= 0) return 0.30;
  if (co2 < 100) return 0.12;
  if (co2 < 120) return 0.15;
  if (co2 < 150) return 0.20;
  if (co2 < 200) return 0.25;
  return 0.30;
}

function getIndonesiaExciseRate() {
  const co2 = parseNumber(elements.co2Emissions.value);
  const engineCc = parseNumber(elements.engineCc.value);
  const propulsion = elements.propulsion.value;
  if (propulsion === "BEV") return 0;
  if (engineCc > 3000) return 0.40;
  if (!co2 || co2 <= 0) return 0.15;
  if (co2 < 150) return 0.15;
  if (co2 < 200) return 0.20;
  if (co2 < 250) return 0.25;
  return 0.40;
}

function getTurkeyExciseRate(cif, tariff) {
  const engineCc = parseNumber(elements.engineCc.value);
  const matrahUSD = cif + tariff;
  const tryRate = (builtInFxData.rates.TRY || 30);
  const matrahTRY = matrahUSD / tryRate; 

  if (engineCc > 2000) return 2.20;
  if (engineCc > 1600) {
    return matrahTRY < 170000 ? 1.30 : 1.50;
  }
  if (matrahTRY < 184000) return 0.45;
  if (matrahTRY < 220000) return 0.50;
  if (matrahTRY < 250000) return 0.60;
  if (matrahTRY < 280000) return 0.70;
  return 0.80;
}

function getIndiaExciseRate() {
  const propulsion = elements.propulsion.value;
  if (propulsion === "BEV") return 0;
  const engineCc = parseNumber(elements.engineCc.value);
  const length = parseNumber(elements.vLength.value);
  if (length < 4000) {
    if (engineCc < 1200) return 0.01;
    if (engineCc < 1500) return 0.03;
  }
  if (length > 4000 && engineCc > 1500) return 0.22;
  return 0.17;
}

function getSingaporeExciseRate(cif, tariff) {
  let arf = 0;
  if (cif <= 20000) arf = cif * 1.0;
  else if (cif <= 40000) arf = 20000 * 1.0 + (cif - 20000) * 1.4;
  else if (cif <= 60000) arf = 20000 * 1.0 + 20000 * 1.4 + (cif - 40000) * 1.9;
  else if (cif <= 80000) arf = 20000 * 1.0 + 20000 * 1.4 + 20000 * 1.9 + (cif - 60000) * 2.5;
  else arf = 20000 * 1.0 + 20000 * 1.4 + 20000 * 1.9 + 20000 * 2.5 + (cif - 80000) * 3.2;
  
  return arf / (cif + tariff);
}

function getAustraliaOtherTaxRate(priceIncGst) {
  const propulsion = elements.propulsion.value;
  const isFuelEfficient = propulsion === "BEV" || propulsion === "PHEV" || propulsion === "HEV";
  const threshold = isFuelEfficient ? 91387 : 80567;
  
  if (priceIncGst <= threshold) return 0;
  const lct = (priceIncGst - threshold) * 0.33;
  return lct / priceIncGst;
}

function resolveSuggestedRates(origin, destination, vehicleType, propulsion) {
  if (!rateData) return null;
  const tariffs = Array.isArray(rateData.tariffs) ? rateData.tariffs : [];
  const taxes = Array.isArray(rateData.taxes) ? rateData.taxes : [];

  const tariffEntry = pickBestRate(tariffs, {
    origin,
    destination,
    vehicleType,
    propulsion,
  });

  const vatEntry = pickBestRate(
    taxes.filter((tax) => ["VAT","GST"].includes(tax.taxType)),
    { destination, propulsion }
  );

  let exciseEntry = pickBestRate(
    taxes.filter((tax) =>
      ["Excise", "Exercise", "Consumption"].includes(tax.taxType)
    ),
    { destination, propulsion }
  );
  
  // Override Malaysia excise rate based on engine capacity
  if (destination === "Malaysia" && exciseEntry) {
    exciseEntry = { ...exciseEntry, rate: getMalaysiaExciseRate() };
  }
  
  // Override Philippines excise rate based on engine capacity
  if (destination === "Philippines" && exciseEntry) {
    exciseEntry = { ...exciseEntry, rate: getPhilippinesExciseRate() };
  }

  const otherEntry = pickBestRate(
    taxes.filter((tax) =>
      ["Other", "Provincial", "Local", "Sales", "SalesTax"].includes(
        tax.taxType
      )
    ),
    { destination, propulsion }
  );

  const ftaImpact = getFtaImpact(origin, destination);
  const baseTariffRate = tariffEntry ? tariffEntry.rate * 100 : null;
  const effectiveTariffRate =
    baseTariffRate === null
      ? null
      : Number((baseTariffRate * ftaImpact.factor).toFixed(4));
  const ftaImpactApplied =
    baseTariffRate !== null && ftaImpact.appliedAgreement && ftaImpact.factor < 1;
  // Apply user-provided per-country overrides if present
  const override = getOverrideForCountry(destination);
  const finalBaseTariff = override && override.baseTariffRate !== undefined ? override.baseTariffRate : baseTariffRate;
  const finalVat = override && override.vatRate !== undefined ? override.vatRate : (vatEntry ? vatEntry.rate * 100 : null);
  const finalExcise = override && override.exciseRate !== undefined ? override.exciseRate : (exciseEntry ? exciseEntry.rate * 100 : null);
  const finalOther = override && override.otherTaxRate !== undefined ? override.otherTaxRate : (otherEntry ? otherEntry.rate * 100 : null);

  const effectiveFinalTariff =
    finalBaseTariff === null || finalBaseTariff === undefined
      ? null
      : Number((finalBaseTariff * (ftaImpact.factor)).toFixed(4));

  return {
    baseTariffRate: finalBaseTariff,
    tariffRate: effectiveFinalTariff,
    vatRate: finalVat,
    exciseRate: finalExcise,
    otherTaxRate: finalOther,
    ftaImpactApplied,
    ftaAgreement: ftaImpact.appliedAgreement,
    ftaFactor: ftaImpact.factor,
    ftaAgreements: ftaImpact.agreements,
    overrideApplied: !!override,
    overrideObject: override || null,
    requiresEngineCc: !/(BEV|FCEV)/i.test(propulsion || "") && (
      (destination === "China" && !/PHEV/i.test(propulsion || "")) ||
      ["Malaysia", "Philippines", "Vietnam", "Thailand", "Indonesia", "Turkey", "India"].includes(destination)
    ),
    requiresCo2: ["Thailand", "Indonesia"].includes(destination),
    requiresLength: (destination === "India"),
  };
}

function checkConditionalFields() {
  const destCountry = elements.destCountry.value;
  const propulsion = elements.propulsion.value;
  const isEv = /(BEV|FCEV)/i.test(propulsion || "");
  const isPhev = /PHEV/i.test(propulsion || "");

  const needsEngineCc =
    !isEv &&
    ((destCountry === "China" && !isPhev) ||
      [
        "Malaysia",
        "Philippines",
        "Vietnam",
        "Thailand",
        "Indonesia",
        "Turkey",
        "India",
      ].includes(destCountry));

  const needsCo2 = ["Thailand", "Indonesia"].includes(destCountry);
  const needsLength = destCountry === "India";

  if (elements.engineCcField) {
    elements.engineCcField.style.display = needsEngineCc ? "block" : "none";
  }
  if (elements.co2Field) {
    elements.co2Field.style.display = needsCo2 ? "block" : "none";
  }
  if (elements.lengthField) {
    elements.lengthField.style.display = needsLength ? "block" : "none";
  }
  if (elements.destEuCountryField) {
    elements.destEuCountryField.style.display =
      destCountry === "EU" ? "block" : "none";
  }
}

function promptForMissingInfo(suggestion) {
  if (!suggestion) return true;

  const missing = [];
  if (suggestion.requiresEngineCc && parseNumber(elements.engineCc.value) <= 0) {
    missing.push({ id: "modalEngineCc", label: "Engine displacement (cc)", placeholder: "e.g. 1800", valueId: "engineCc" });
  }
  if (suggestion.requiresCo2 && parseNumber(elements.co2Emissions.value) <= 0) {
    missing.push({ id: "modalCo2", label: "CO2 emissions (g/km)", placeholder: "e.g. 120", valueId: "co2Emissions" });
  }
  if (suggestion.requiresLength && parseNumber(elements.vLength.value) <= 0) {
    missing.push({ id: "modalLength", label: "Vehicle length (mm)", placeholder: "e.g. 3990", valueId: "vLength" });
  }

  if (missing.length === 0) return true;

  elements.modalFields.innerHTML = missing
    .map(
      (field) => `
    <label class="field">
      <span>${field.label}</span>
      <input id="${field.id}" data-target="${field.valueId}" type="number" min="0" step="1" placeholder="${field.placeholder}" class="modal-input" />
    </label>`
    )
    .join("");

  elements.modal.style.display = "flex";
  return false;
}

function hideModalAndContinue() {
  const modalInputs = elements.modalFields.querySelectorAll("input");
  modalInputs.forEach((input) => {
    const targetId = input.getAttribute("data-target");
    if (targetId && elements[targetId]) {
      elements[targetId].value = input.value;
    }
  });

  elements.modal.style.display = "none";
  update();
  setRecalcPending(false);
}

function parseDetailedOverrides() {
  const text = (elements.detailedOverrides && elements.detailedOverrides.value) || "";
  if (!text.trim()) {
    detailedOverridesCache = {};
    if (elements.overridesStatus) setStatus(elements.overridesStatus, "No overrides applied");
    return {};
  }
  try {
    const parsed = JSON.parse(text);
    if (typeof parsed === "object" && parsed !== null) {
      detailedOverridesCache = parsed;
      if (elements.overridesStatus) setStatus(elements.overridesStatus, "Overrides loaded");
      return parsed;
    }
    detailedOverridesCache = {};
    if (elements.overridesStatus) setStatus(elements.overridesStatus, "Invalid JSON - expected object");
    return {};
  } catch (e) {
    detailedOverridesCache = {};
    if (elements.overridesStatus) setStatus(elements.overridesStatus, "JSON parse error");
    return {};
  }
}

function getOverrideForCountry(country) {
  if (!country || !detailedOverridesCache) return null;
  // direct match
  if (detailedOverridesCache[country]) return detailedOverridesCache[country];
  // try case-insensitive match
  const keys = Object.keys(detailedOverridesCache);
  const found = keys.find((k) => k.toLowerCase() === (country || "").toLowerCase());
  return found ? detailedOverridesCache[found] : null;
}

function findTaxEntry(destination, taxTypes) {
  if (!rateData || !Array.isArray(rateData.taxes)) return null;
  return pickBestRate(
    rateData.taxes.filter((tax) => tax.destination === destination && taxTypes.includes(tax.taxType)),
    { destination }
  );
}

function findTariffEntry(destination) {
  if (!rateData || !Array.isArray(rateData.tariffs)) return null;
  return pickBestRate(rateData.tariffs.filter((entry) => entry.destination === destination), {
    destination,
  });
}

// Confidence widgets removed per user request

function getFxRate(currency) {
  if (currency === "USD") return 1;
  if (!fxData || !fxData.rates) return null;
  return fxData.rates[currency];
}

function buildBreakdown(rows) {
  elements.breakdownBody.innerHTML = rows
    .map(
      (row) => `
        <tr>
          <td>
            <div>${row.label}</div>
            ${row.note ? `<span class="breakdown-note">${row.note}</span>` : ""}
          </td>
          <td>${row.rate}</td>
          <td>${money(row.amount)}</td>
        </tr>`
    )
    .join("");
}

function updateSources(suggestion = null) {
  const destination = getActualCountry(elements.destCountry, elements.destEuCountry);
  const tariff = findTariffEntry(destination);
  const vat = findTaxEntry(destination, ["VAT", "GST"]);
  const excise = findTaxEntry(destination, ["Excise", "Exercise", "Consumption", "Compensation"]);
  const other = findTaxEntry(destination, ["Other", "Provincial", "Local", "Sales", "SalesTax"]);
  // China consumption tax source info when applicable
  let chinaConsumption = null;
  if (destination === "China") {
    chinaConsumption = {
      name: `Consumption tax - China`,
      url: "https://taxsummaries.pwc.com/china/consumption-tax",
      note: "Consumption tax on passenger vehicles is banded by engine displacement; rates vary from ~1% up to 40% based on cc. See source for bands.",
      missing: false,
    };
  }

  const selectedSources = [
    {
      name: `Tariff source - ${destination}`,
      url: tariff?.source || null,
      note: tariff?.notes || "N/A for selected destination",
      missing: !tariff?.source,
    },
    {
      name: `Tax source - ${destination} (VAT/GST)`,
      url: vat?.source || null,
      note: vat?.notes || "N/A for selected destination",
      missing: !vat?.source,
    },
    {
      name: `Tax source - ${destination} (Excise/Consumption)`,
      url: excise?.source || null,
      note: excise?.notes || "N/A for selected destination",
      missing: !excise?.source,
    },
    {
      name: `Tax source - ${destination} (Other)`,
      url: other?.source || null,
      note: other?.notes || "N/A for selected destination",
      missing: !other?.source,
    },
    {
      name: "FX source",
      url: fxData?.source || null,
      note: fxData?.source
        ? `FX updated ${fxData.updatedAt || "unknown"}`
        : "N/A for selected destination",
      missing: !fxData?.source,
    },
    suggestion?.overrideApplied
      ? {
          name: `User overrides - ${destination}`,
          url: null,
          note: JSON.stringify(suggestion.overrideObject),
          missing: false,
        }
      : null,
    chinaConsumption,
    suggestion?.ftaImpactApplied
      ? {
          name: `FTA impact - ${suggestion.ftaAgreement.name}`,
          url: suggestion.ftaAgreement.source,
          note: `Preferential tariff factor ${percent(
            suggestion.ftaFactor * 100
          )} applied to baseline tariff. Rules-of-origin and HS-line conditions must be confirmed.`,
          missing: false,
        }
      : null,
  ]
    .filter((entry) => entry)
    .filter(
      (entry, index, array) =>
        entry.url
          ? array.findIndex((candidate) => candidate.url === entry.url) === index
          : array.findIndex((candidate) => candidate.name === entry.name) === index
    );

  elements.sources.innerHTML = selectedSources
    .map(
      (source) => `
        <div class="source-card${source.missing ? " missing" : ""}">
          <strong>${source.name}</strong>
          ${
            source.url
              ? `<a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a>`
              : '<span class="source-empty">N/A</span>'
          }
          <span>${source.note}</span>
        </div>`
    )
    .join("");
}

function getActualCountry(countrySelect, euCountrySelect) {
  const country = countrySelect.value;
  if (country === "EU" && euCountrySelect && euCountrySelect.value) {
    return euCountrySelect.value;
  }
  return country;
}

function calculateRevenuePlanning() {
  const salesVolume = parseNumber(elements.salesVolume.value) || 0;
  const totalRevenue = currentMsrp * salesVolume;
  const totalProfit = currentMargin * salesVolume;

  elements.totalRevenue.textContent = money(totalRevenue);
  elements.totalProfit.textContent = money(totalProfit);
  elements.profitPerUnit.textContent = money(currentMargin);
}

function update() {
  const fobInput = parseNumber(elements.fobPrice.value);
  const fobCurrency = elements.fobCurrency.value;
  const fxRate = getFxRate(fobCurrency);
  const fxMissing = fobCurrency !== "USD" && !fxRate;
  const fob = fxMissing ? 0 : fobInput * (fxRate || 1);
  const marginRate = parseNumber(elements.marginRate.value) / 100;
  const actualOrigin = elements.originCountry.value;
  const actualDest = getActualCountry(elements.destCountry, elements.destEuCountry);
  const suggestion = resolveSuggestedRates(
    actualOrigin,
    actualDest,
    elements.vehicleType.value,
    elements.propulsion.value
  );

  // Before proceeding, check if we need more info
  if (!promptForMissingInfo(suggestion)) {
    return; // Stop calculation if modal is shown
  }

  const freightRate = getFreightRate(actualOrigin, actualDest);
  const insuranceRate = getInsuranceRate(actualOrigin, actualDest);
  const tariffRate = suggestion?.tariffRate !== null && suggestion?.tariffRate !== undefined
    ? suggestion.tariffRate / 100
    : 0;
  const vatRate = suggestion?.vatRate !== null && suggestion?.vatRate !== undefined
    ? suggestion.vatRate / 100
    : 0;
  const exciseRate = suggestion?.exciseRate !== null && suggestion?.exciseRate !== undefined
    ? suggestion.exciseRate / 100
    : 0;
  const otherTaxRate = suggestion?.otherTaxRate !== null && suggestion?.otherTaxRate !== undefined
    ? suggestion.otherTaxRate / 100
    : 0;
  const baseTariffRate = suggestion?.baseTariffRate !== null && suggestion?.baseTariffRate !== undefined
    ? suggestion.baseTariffRate / 100
    : tariffRate;

  const freight = fob * freightRate;
  const insurance = fob * insuranceRate;
  const cif = fob + freight + insurance;
  const tariff = cif * tariffRate;

  // Banded tax logic for specific countries
  const engineCc = parseNumber(elements.engineCc?.value);
  let finalExciseRate = exciseRate;
  
  if (actualDest === "Vietnam") finalExciseRate = getVietnamExciseRate();
  else if (actualDest === "Thailand") finalExciseRate = getThailandExciseRate();
  else if (actualDest === "Indonesia") finalExciseRate = getIndonesiaExciseRate();
  else if (actualDest === "India") finalExciseRate = getIndiaExciseRate();
  else if (actualDest === "Singapore") finalExciseRate = getSingaporeExciseRate(cif, tariff);
  else if (actualDest === "Turkey") finalExciseRate = getTurkeyExciseRate(cif, tariff);

  // China-specific consumption tax (banded by engine displacement)
  let consumptionTax = 0;
  let consumptionRate = null;
  if (actualDest === "China") {
    const ct = computeChinaConsumptionTax(cif, engineCc, elements.propulsion.value);
    consumptionTax = ct.amount;
    consumptionRate = ct.rate;
  }

  const baseTariffAmount = cif * baseTariffRate;
  const ftaTariffSavings = suggestion?.ftaImpactApplied ? baseTariffAmount - tariff : 0;
  const excise = (cif + tariff) * finalExciseRate;
  const margin = fob * marginRate;

  let otherTax = (cif + tariff + excise) * otherTaxRate;
  if (actualDest === "Australia") {
    // OtherTax here is LCT. LCT is based on MSRP including GST.
    // Approximate based on landed costs and margin
    const priceBeforeOther = (cif + tariff + excise);
    const estVat = priceBeforeOther * vatRate;
    const estPriceWithVat = priceBeforeOther + estVat + margin;
    otherTax = getAustraliaOtherTaxRate(estPriceWithVat) * estPriceWithVat;
  }

  // include consumption tax in VAT base for China if applicable
  const vatBase = cif + tariff + excise + otherTax + consumptionTax;
  const vat = vatBase * vatRate;

  const landed = cif + tariff + excise + otherTax + consumptionTax + vat;
  const msrp = landed + margin;
  const totalTaxes = tariff + excise + otherTax + vat;

  // Store values for revenue planning
  currentMsrp = msrp;
  currentMargin = margin;

  elements.msrpValue.textContent = money(msrp);
  elements.taxesValue.textContent = money(totalTaxes);
  elements.landedValue.textContent = money(landed);
  elements.fobUsdValue.textContent = fxMissing
    ? "Missing FX rate"
    : money(fob);
  elements.ftaStatus.textContent = detectFta(
    actualOrigin,
    actualDest
  );

  const missing = [];
  if (suggestion?.tariffRate === null || suggestion?.tariffRate === undefined) missing.push("tariff");
  if (suggestion?.vatRate === null || suggestion?.vatRate === undefined) missing.push("VAT/GST");
  if (suggestion?.exciseRate === null || suggestion?.exciseRate === undefined) missing.push("excise");
  if (fxMissing) missing.push("FX rate");
  elements.missingRates.textContent = missing.length ? missing.join(", ") : "None";

  // Generate factor-based tax notes
  let exciseNote = "";
  if (actualDest === "Thailand") {
    const co2 = parseNumber(elements.co2Emissions.value);
    const ec = parseNumber(elements.engineCc.value);
    exciseNote = ec > 3000 ? `Based on engine >3000cc (50%)` : `Based on CO2 ${co2}g/km`;
  } else if (actualDest === "Vietnam") {
    const ec = parseNumber(elements.engineCc.value);
    exciseNote = `Based on engine displacement ${ec}cc`;
  } else if (actualDest === "Indonesia") {
    const co2 = parseNumber(elements.co2Emissions.value);
    const ec = parseNumber(elements.engineCc.value);
    exciseNote = ec > 3000 ? `Based on engine >3000cc (40%)` : `Based on CO2 ${co2}g/km`;
  } else if (actualDest === "Turkey") {
    const ec = parseNumber(elements.engineCc.value);
    exciseNote = `Based on engine ${ec}cc & price matrah`;
  } else if (actualDest === "India") {
    const len = parseNumber(elements.vLength.value);
    const ec = parseNumber(elements.engineCc.value);
    exciseNote = `Based on length ${len}mm & engine ${ec}cc`;
  } else if (actualDest === "Singapore") {
    exciseNote = `Based on OMV/CIF tiered ARF`;
  } else if (actualDest === "Malaysia") {
    const ec = parseNumber(elements.engineCc.value);
    exciseNote = `Based on engine displacement ${ec}cc`;
  } else if (actualDest === "Philippines") {
    const ec = parseNumber(elements.engineCc.value);
    exciseNote = `Based on engine displacement ${ec}cc`;
  }

  buildBreakdown([
    { label: "FOB", rate: "-", amount: fob },
    { label: "Freight", rate: percent(freightRate * 100), amount: freight },
    { label: "Insurance", rate: percent(insuranceRate * 100), amount: insurance },
    { label: "CIF (FOB + freight + insurance)", rate: "-", amount: cif },
    ...(suggestion?.ftaImpactApplied
      ? [
          {
            label: "Tariff baseline (before FTA)",
            rate: percent(baseTariffRate * 100),
            amount: baseTariffAmount,
          },
          {
            label: `FTA tariff reduction (${suggestion.ftaAgreement.name})`,
            rate: "-",
            amount: -ftaTariffSavings,
          },
        ]
      : []),
    { label: "Tariff", rate: percent(tariffRate * 100), amount: tariff },
    ...( actualDest === "China" ? [{ label: "Consumption tax", rate: consumptionRate === null ? "-" : percent(consumptionRate * 100), amount: consumptionTax, note: `Based on engine ${parseNumber(elements.engineCc.value)}cc` }] : []),
    { label: "Excise / consumption", rate: percent(finalExciseRate * 100), amount: excise, note: exciseNote },
    { label: "Other taxes", rate: actualDest === "Australia" ? "LCT applied" : percent(otherTaxRate * 100), amount: otherTax, note: actualDest === "Australia" ? `33% above threshold $${/(BEV|PHEV|HEV)/i.test(elements.propulsion.value) ? "91,387" : "80,567"}` : "" },
    { label: "VAT / GST", rate: percent(vatRate * 100), amount: vat },
    { label: "Landed cost", rate: "-", amount: landed },
    { label: "OEM margin (on FOB)", rate: percent(marginRate * 100), amount: margin },
    { label: "Estimated MSRP", rate: "-", amount: msrp },
  ]);

  updateSources(suggestion);
  calculateRevenuePlanning();
}

function init() {
  initializeElements(); // Initialize all DOM element references first
  
  populateSelect(elements.vehicleType, vehicleTypes);
  populateSelect(elements.propulsion, propulsionSystems);
  populateSelect(elements.originCountry, productionCountries);
  populateSelect(elements.destCountry, salesCountries);
  populateSelect(elements.destEuCountry, euCountries);
  populateSelect(elements.fobCurrency, currencies);

  elements.lastUpdated.textContent = formatDate(
    rateData?.updatedAt || fxData?.updatedAt
  );
  update();
  setRecalcPending(false);

  const trackedInputs = [
    elements.vehicleType,
    elements.propulsion,
    elements.fobPrice,
    elements.fobCurrency,
    elements.marginRate,
    elements.originCountry,
    elements.destCountry,
    elements.destEuCountry,
    elements.engineCc,
    elements.co2Emissions,
    elements.vLength,
  ];

  trackedInputs.forEach((input) => {
    const markPending = () => setRecalcPending(true);
    input.addEventListener("input", markPending);
    input.addEventListener("change", markPending);
  });

  // Revenue planning calculate button
  elements.calculateRevenue.addEventListener("click", () => {
    calculateRevenuePlanning();
  });

  elements.recalcMsrp.addEventListener("click", () => {
    if (!hasPendingChanges) {
      return;
    }
    update();
    setRecalcPending(false);
  });

  elements.modalSave.addEventListener("click", hideModalAndContinue);
}

document.addEventListener("DOMContentLoaded", init);

init();
