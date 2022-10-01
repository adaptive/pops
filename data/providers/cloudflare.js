const cloudflare = {
  name: "Cloudflare",
  url: "https://www.cloudflare.com",
  pops: [
    "ACC", // Accra (Ghana)
    "ADL", // Adelaide (Australia)
    "AKL", // Auckland (New Zealand)
    "ALA", // Almaty (Kazakhstan)
    "ALG", // Algiers (Algeria)
    "AMD", // Ahmedabad (India)
    "AMM", // Amman (Jordan)
    "AMS", // Amsterdam (Netherlands)
    "AQG", // Anqing (China)
    "ARI", // Arica (Chile)
    "ARN", // Stockholm (Sweden)
    "ASU", // Asuncion (Paraguay)
    "ATH", // Athens (Greece)
    "ATL", // Atlanta (US)
    "BAH", // Bahrain (Bahrain)
    "BBI", // Bhubaneswar (India)
    "BCN", // Barcelona (Spain)
    "BEG", // Belgrade (Serbia)
    "BEL", // Belem (Brazil)
    "BEY", // Beirut (Lebanon)
    "BGW", // Baghdad (Iraq)
    "BKK", // Bangkok (Thailand)
    "BLR", // Bangalore (India)
    "BNE", // Brisbane (Australia)
    "BNU", // Blumenau (Brazil)
    "BOG", // Bogota (Colombia)
    "BOM", // Mumbai (India)
    "BOS", // Boston (US)
    "BRU", // Brussels (Belgium)
    "BSB", // Brasilia (Brazil)
    "BSR", // Basra (Iraq)
    "BTS", // Bratislava (Slovakia)
    "BUD", // Budapest (Hungary)
    "BUF", // Buffalo (US)
    "BWN", // Bandar Seri Begawan (Brunei)
    "CAN", // Guangzhou (China)
    "CBR", // Canberra (Australia)
    "CCP", // Concepcion (Chile)
    "CCU", // Calcutta (India)
    "CDG", // Paris (France)
    "CEB", // Cebu (Philippines)
    "CFC", // Cacador (Brazil)
    "CGB", // Cuiaba (Brazil)
    "CGD", // Changde (China)
    "CGK", // Jakarta (Indonesia)
    "CGO", // Zhengzhou (China)
    "CGP", // Chittagong (Bangladesh)
    "CGQ", // Changchun (China)
    "CGY", // Cagayan de Oro (Philippines)
    "CHC", // Christchurch (New Zealand)
    "CLT", // Charlotte (US)
    "CMB", // Colombo (Sri Lanka)
    "CMH", // Columbus (US)
    "CMN", // Casablanca (Morocco)
    "CNF", // Belo Horizonte (Brazil)
    "CNX", // Chiang Mai (Thailand)
    "COR", // Cordoba (Argentina)
    "CPH", // Copenhagen (Denmark)
    "CPT", // Cape Town (South Africa)
    "CUR", // Curacao (Netherlands Antilles)
    "CWB", // Curitiba (Brazil)
    "DAC", // Dhaka (Bangladesh)
    "DAR", // Dar es Salaam (Tanzania)
    "DEL", // Delhi (India)
    "DEN", // Denver (US)
    "DFW", // Dallas (US)
    "DKR", // Dakar (Senegal)
    "DLC", // Dalian (China)
    "DME", // Moscow (Russia)
    "DMM", // Dammam (Saudi Arabia)
    "DOH", // Doha (Qatar)
    "DTW", // Detroit (US)
    "DUB", // Dublin (Ireland)
    "DUR", // Durban (South Africa)
    "DUS", // Dusseldorf (Germany)
    "DXB", // Dubai (United Arab Emirates)
    "EBL", // Erbil (Iraq)
    "EDI", // Edinburgh (United Kingdom)
    "EVN", // Yerevan (Armenia)
    "EWR", // Newark (US)
    "EZE", // Buenos Aires (Argentina)
    "FCO", // Rome (Italy)
    "FLN", // Florianopolis (Brazil)
    "FOC", // Fuzhou (China)
    "FOR", // Fortaleza (Brazil)
    "FRA", // Frankfurt (Germany)
    "FUO", // Foshan (China)
    "GBE", // Gaborone (Botswana)
    "GEO", // Georgetown (Guyana)
    "GIG", // Rio de Janeiro (Brazil)
    "GND", // Grenada (Grenada)
    "GOT", // Gothenburg (Sweden)
    "GRU", // Sao Paulo (Brazil)
    "GUA", // Guatemala City (Guatemala)
    "GUM", // Guam (Guam)
    "GVA", // Geneva (Switzerland)
    "GYD", // Baku (Azerbaijan)
    "GYE", // Guayaquil (Ecuador)
    "GYN", // Goiania (Brazil)
    "HAK", // Haikou (China)
    "HAM", // Hamburg (Germany)
    "HAN", // Hanoi (Vietnam)
    "HBA", // Hobart (Australia)
    "HEL", // Helsinki (Finland)
    "HFA", // Haifa (Israel)
    "HGH", // Hangzhou (China)
    "HKG",
    "HNL",
    "HRE",
    "HYD",
    "IAD",
    "IAH",
    "ICN",
    "IND",
    "ISB",
    "IST",
    "ITJ",
    "IXC",
    "JAX",
    "JDO",
    "JED",
    "JHB",
    "JIB",
    "JNB",
    "JOG",
    "JOI",
    "JSR",
    "KBP",
    "KEF",
    "KGL",
    "KHH",
    "KHI",
    "KHN",
    "KHV",
    "KIV",
    "KIX",
    "KJA",
    "KLD", // Kaliningrad (Russia)
    "KNU", // Kanpur (India)
    "KTM", // Kathmandu (Nepal)
    "KUL", // Kuala Lumpur (Malaysia)
    "KWI", // Kuwait (Kuwait)
    "LAD", // Luanda (Angola)
    "LAS", // Las Vegas (US)
    "LAX", // Los Angeles (US)
    "LCA", // Larnaca (Cyprus)
    "LED", // St. Petersburg (Russia)
    "LHE", // Lahore (Pakistan)
    "LHR", // London (United Kingdom)
    "LHW", // Lanzhou (China)
    "LIM", // Lima (Peru)
    "LIS", // Lisbon (Portugal)
    "LLK", // Lankaran (Azerbaijan)
    "LOS", // Lagos (Nigeria)
    "LUX",
    "LYA",
    "MAA",
    "MAD",
    "MAN",
    "MAO",
    "MBA",
    "MCI",
    "MCT",
    "MDE",
    "MDL",
    "MEL",
    "MEM",
    "MEX",
    "MFE",
    "MFM",
    "MGM",
    "MIA",
    "MLE",
    "MNL",
    "MPM",
    "MRS",
    "MRU",
    "MSP",
    "MSQ",
    "MUC",
    "MXP",
    "NAG",
    "NBO", // Nairobi (Kenya)
    "NJF", // Najaf (Iraq)
    "NNG", // Nanning (China)
    "NOU", // Noumea (New Caledonia)
    "NQN", // Neuquen (Argentina)
    "NRT", // Tokyo (Japan)
    "OKA", // Okinawa (Japan)
    "OMA", // Omaha (US)
    "ORD", // Chicago (US)
    "ORF", // Norfolk (US)
    "ORK", // Cork (Ireland)
    "OSL", // Oslo (Norway)
    "OTP", // Bucharest (Romania)
    "OUA", // Ouagadougou (Burkina Faso)
    "PAP", // Port-au-Prince (Haiti)
    "PAT", // Patna (India)
    "PBH", // Paro (Bhutan)
    "PBM", // Paramaribo (Suriname)
    "PDX", // Portland (US)
    "PER", // Perth (Australia)
    "PHL", // Philadelphia (US)
    "PHX", // Phoenix (US)
    "PIT", // Pittsburgh (US)
    "PKX", // Petropavlovsk-Kamchatsky (Russia)
    "PMO", // Palermo (Italy)
    "PNH", // Phnom Penh (Cambodia)
    "POA", // Porto Alegre (Brazil)
    "PRG", // Prague (Czech Republic)
    "PTY", // Panama City (Panama)
    "QRO", // Queretaro (Mexico)
    "QWJ", // Qingdao (China)
    "RAO", // Ribeirao Preto (Brazil)
    "RGN", // Yangon (Myanmar)
    "RIC", // Richmond (US)
    "RIX", // Riga (Latvia)
    "ROB", // Monrovia (Liberia)
    "RUH", // Riyadh (Saudi Arabia)
    "RUN", // Reunion (France)
    "SAN", // San Diego (US)
    "SCL", // Santiago de Chile (Chile)
    "SDQ", // Santo Domingo (Dominican Republic)
    "SEA", // Seattle (US)
    "SGN", // Ho Chi Minh City (Vietnam)
    "SHA", // Shanghai (China)
    "SIN", // Singapore (Singapore)
    "SJC", // San Jose (US)
    "SJO", // San Jose (Costa Rica)
    "SJP", // Sao Jose do Rio Preto (Brazil)
    "SJW", // Shanghai (China)
    "SKG", // Thessaloniki (Greece)
    "SLC", // Salt Lake City (US)
    "SMF", // Sacramento (US)
    "SOD", // Sorocaba (Brazil)
    "SOF", // Sofia (Bulgaria)
    "SSA", // Salvador (Brazil)
    "STL", // St. Louis (US)
    "SVX", // Yekaterinburg (Russia)
    "SYD", // Sydney (Australia)
    "TAO", // Qingdao (China)
    "TAS", // Tashkent (Uzbekistan)
    "TBS", // Tbilisi (Georgia)
    "TGU", // Tegucigalpa (Honduras)
    "TIA", // Tirana (Albania)
    "TLH", // Tallahassee (US)
    "TLL", // Tallinn (Estonia)
    "TLV", // Tel Aviv
    "TNA", // Jinan (China)
    "TNR", // Antananarivo (Madagascar)
    "TPA", // Tampa (US)
    "TPE", // Taipei (Taiwan)
    "TSN", // Tianjin (China)
    "TUN", // Tunis (Tunisia)
    "TXL", // Berlin (Germany)
    "UDI", // Uberlandia (Brazil)
    "UIO", // Quito (Ecuador)
    "ULN", // Ulaanbaatar (Mongolia)
    "URT", // Surat Thani (Thailand)
    "VCP", // Sao Paulo (Brazil)
    "VIE", // Vienna (Austria)
    "VNO", // Vilnius (Lithuania)
    "VTE", // Vientiane (Laos)
    "WAW", // Warsaw (Poland)
    "WUH", // Wuhan (China)
    "WUX", // Wuxi (China)
    "XIY", // Xi'an (China)
    "XNH", // Xining (China)
    "XNN", // Xining (China)
    "YOW", // Ottawa (Canada)
    "YTY", // Yangzhou (China)
    "YUL", // Montreal (Canada)
    "YVR", // Vancouver (Canada)
    "YWG", // Winnipeg (Canada)
    "YXE", // Saskatoon (Canada)
    "YYC", // Calgary (Canada)
    "YYZ", // Toronto (Canada)
    "ZAG", // Zagreb (Croatia)
    "ZDM", // Zadar (Croatia)
    "ZGN", // Zhongshan (China)
    "ZRH" // Zurich (Switzerland)
  ]
};

export default cloudflare;
