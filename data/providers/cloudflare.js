const cloudflare = {
  name: "Cloudflare",
  url: "https://www.cloudflare.com",
  pops: [
    "AAE", // Annaba (Algeria)
    "ABJ", // Abidjan (Ivory Coast)
    "ABQ", // Albuquerque (US)
    "ACC", // Accra (Ghana)
    "ADB", // Izmir (Turkey)
    "ADL", // Adelaide (Australia)
    "AKL", // Auckland (New Zealand)
    "ALA", // Almaty (Kazakhstan)
    "ALG", // Algiers (Algeria)
    "AMD", // Ahmedabad (India)
    "AMM", // Amman (Jordan)
    "AMS", // Amsterdam (Netherlands)
    "ANC", // Anchorage (US)
    "ARI", // Arica (Chile)
    "ARN", // Stockholm (Sweden)
    "ARU", // Aracaju (Brazil)
    "ASK", // Asahikawa (Japan)
    "ASU", // Asuncion (Paraguay)
    "ATH", // Athens (Greece)
    "ATL", // Atlanta (US)
    "AUS", // Austin (US)
    "BAH", // Bahrain (Bahrain)
    "BAQ", // Barranquilla (Colombia)
    "BBI", // Bhubaneswar (India)
    "BCN", // Barcelona (Spain)
    "BEG", // Belgrade (Serbia)
    "BEL", // Belem (Brazil)
    "BEY", // Beirut (Lebanon)
    "BGI", // Bridgetown (Barbados)
    "BGR", // Bangor (US)
    "BGW", // Baghdad (Iraq)
    "BHY", // Beihai (China)
    "BKK", // Bangkok (Thailand)
    "BLR", // Bangalore (India)
    "BNA", // Nashville (US)
    "BNE", // Brisbane (Australia)
    "BNU", // Blumenau (Brazil)
    "BOD", // Bordeaux (France)
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
    "CAI", // Cairo (Egypt)
    "CAN", // Guangzhou (China)
    "CAW", // Campos (Brazil)
    "CBR", // Canberra (Australia)
    "CCU", // Calcutta (India)
    "CDG", // Paris (France)
    "CEB", // Cebu (Philippines)
    "CFC", // Cacador (Brazil)
    "CGB", // Cuiaba (Brazil)
    "CGD", // Changde (China)
    "CGK", // Jakarta (Indonesia)
    "CGO", // Zhengzhou (China)
    "CGP", // Chittagong (Bangladesh)
    "CGY", // Cagayan de Oro (Philippines)
    "CHC", // Christchurch (New Zealand)
    "CKG", // Chongqing (China)
    "CLE", // Cleveland (US)
    "CLT", // Charlotte (US)
    "CMB", // Colombo (Sri Lanka)
    "CMH", // Columbus (US)
    "CNF", // Belo Horizonte (Brazil)
    "CNN", // Kannur (India)
    "CNX", // Chiang Mai (Thailand)
    "COK", // Kochi (India)
    "COR", // Cordoba (Argentina)
    "CPH", // Copenhagen (Denmark)
    "CPT", // Cape Town (South Africa)
    "CRK", // Clark (Philippines)
    "CSX", // Changsha (China)
    "CTU", // Chengdu (China)
    "CWB", // Curitiba (Brazil)
    "CZX", // Changzhou (China)
    "DAC", // Dhaka (Bangladesh)
    "DAD", // Da Nang (Vietnam)
    "DAR", // Dar es Salaam (Tanzania)
    "DEL", // Delhi (India)
    "DEN", // Denver (US)
    "DFW", // Dallas (US)
    "DKR", // Dakar (Senegal)
    "DLC", // Dalian (China)
    "DME", // Moscow (Russia)
    "DMM", // Dammam (Saudi Arabia)
    "DOH", // Doha (Qatar)
    "DPS", // Denpasar (Indonesia)
    "DTW", // Detroit (US)
    "DUB", // Dublin (Ireland)
    "DUR", // Durban (South Africa)
    "DUS", // Dusseldorf (Germany)
    "DXB", // Dubai (United Arab Emirates)
    "EBB", // Entebbe (Uganda)
    "EBL", // Erbil (Iraq)
    "EDI", // Edinburgh (United Kingdom)
    "EVN", // Yerevan (Armenia)
    "EWR", // Newark (US)
    "EZE", // Buenos Aires (Argentina)
    "FCO", // Rome (Italy)
    "FIH", // Kinshasa (Congo)
    "FLN", // Florianopolis (Brazil)
    "FOC", // Fuzhou (China)
    "FOR", // Fortaleza (Brazil)
    "FRA", // Frankfurt (Germany)
    "FSD", // Sioux Falls (US)
    "FUK", // Fukuoka (Japan)
    "FUO", // Foshan (China)
    "GBE", // Gaborone (Botswana)
    "GDL", // Guadalajara (Mexico)
    "GEO", // Georgetown (Guyana)
    "GIG", // Rio de Janeiro (Brazil)
    "GND", // Grenada(Granada)
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
    "HFE", // Hefei (China)
    "HGH", // Hangzhou (China)
    "HKG", // Hong Kong (China)
    "HNL", // Honolulu (US)
    "HRE", // Harare (Zimbabwe)
    "HYD", // Hyderabad (India)
    "HYN", // Huangyan (China)
    "IAD", // Washington, DC (US)
    "IAH", // Houston (US)
    "ICN", // Seoul (South Korea)
    "IND", // Indianapolis (US)
    "ISB", // Islamabad (Pakistan)
    "IST", // Istanbul (Turkey)
    "ISU", // Sulaymaniyah (Iraq)
    "ITJ", // Ito (Japan)
    "IXC", // Ixtepec (Mexico)
    "JAX", // Jacksonville (US)
    "JDO", // Juazeiro do Norte (Brazil)
    "JED", // Jeddah (Saudi Arabia)
    "JHB", // Johor Bahru (Malaysia)
    "JIB", // Djibouti (Djibouti)
    "JNB", // Johannesburg (South Africa)
    "JOG", // Yogyakarta (Indonesia)
    "JOI", // Joinville (Brazil)
    "JSR", // Jessore (Bangladesh)
    "JXG", // Jiaxing (China)
    "KBP", // Kiev (Ukraine)
    "KEF", // Reykjavik (Iceland)
    "KGL", // Kigali (Rwanda)
    "KHH", // Kaohsiung (Taiwan)
    "KHI", // Karachi (Pakistan)
    "KHN", // Nanchang (China)
    "KIN", // Kingston (Jamaica)
    "KIV", // Chisinau (Moldova)
    "KIX", // Osaka (Japan)
    "KJA", // Krasnoyarsk (Russia)
    "KLD", // Kaliningrad (Russia)
    "KMG", // Kunming (China)
    "KNU", // Kanpur (India)
    "KTM", // Kathmandu (Nepal)
    "KUL", // Kuala Lumpur (Malaysia)
    "KWE", // Guiyang (China)
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
    "LPB", // La Paz (Bolivia)
    "LUX", // Luxembourg (Luxembourg)
    "LYS", // Lyon (France)
    "MAA", // Chennai (India)
    "MAD", // Madrid (Spain)
    "MAN", // Manchester (United Kingdom)
    "MAO", // Manaus (Brazil)
    "MBA", // Mombasa (Kenya)
    "MCI", // Kansas City (US)
    "MCT", // Muscat (Oman)
    "MDE", // Medellin (Colombia)
    "MDL", // Mandalay (Myanmar)
    "MEL", // Melbourne (Australia)
    "MEM", // Memphis (US)
    "MEX", // Mexico City (Mexico)
    "MFE", // Monterrey (Mexico)
    "MFM", // Macau (China)
    "MGM", // Montgomery (US)
    "MIA", // Miami (US)
    "MLE", // Malé (Maldives)
    "MNL", // Manila (Philippines)
    "MPM", // Maputo (Mozambique)
    "MRS", // Marseille (France)
    "MRU", // Port Louis (Mauritius)
    "MSP", // Minneapolis (US)
    "MSQ", // Minsk (Belarus)
    "MUC", // Munich (Germany)
    "MXP", // Milan (Italy)
    "NAG", // Nagpur (India)
    "NBO", // Nairobi (Kenya)
    "NJF", // Najaf (Iraq)
    "NNG", // Nanning (China)
    "NOU", // Noumea (New Caledonia)
    "NQN", // Neuquen (Argentina)
    "NQZ", // Astana (Kazakhstan)
    "NRT", // Tokyo (Japan)
    "NVT", // Navegantes (Brazil)
    "OKA", // Okinawa (Japan)
    "OKC", // Oklahoma City (US)
    "OMA", // Omaha (US)
    "ORD", // Chicago (US)
    "ORF", // Norfolk (US)
    "ORK", // Cork (Ireland)
    "ORN", // Oran (Algeria)
    "OSL", // Oslo (Norway)
    "OTP", // Bucharest (Romania)
    "OUA", // Ouagadougou (Burkina Faso)
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
    "PMW", // Palmas (Brazil)
    "PNH", // Phnom Penh (Cambodia)
    "POA", // Porto Alegre (Brazil)
    "POS", // Port of Spain (Trinidad and Tobago)
    "PPT", // Papeete (French Polynesia)
    "PRG", // Prague (Czech Republic)
    "PTY", // Panama City (Panama)
    "QRO", // Queretaro (Mexico)
    "QWJ", // Qingdao (China)
    "RAO", // Ribeirao Preto (Brazil)
    "RDU", // Raleigh (US)
    "REC", // Recife (Brazil)
    "RGN", // Yangon (Myanmar)
    "RIC", // Richmond (US)
    "RIX", // Riga (Latvia)
    "RUH", // Riyadh (Saudi Arabia)
    "RUN", // Reunion (France)
    "SAN", // San Diego (US)
    "SAT", // San Antonio (US)
    "SCL", // Santiago de Chile (Chile)
    "SDQ", // Santo Domingo (Dominican Republic)
    "SEA", // Seattle (US)
    "SFO", // San Francisco (US)
    "SGN", // Ho Chi Minh City (Vietnam)
    "SHA", // Shanghai (China)
    "SIN", // Singapore (Singapore)
    "SJC", // San Jose (US)
    "SJK", // Sao Jose dos Campos (Brazil)
    "SJO", // San Jose (Costa Rica)
    "SJP", // Sao Jose do Rio Preto (Brazil)
    "SJU", // San Juan (Puerto Rico)
    "SJW", // Shanghai (China)
    "SKG", // Thessaloniki (Greece)
    "SKP", // Skopje (North Macedonia)
    "SLC", // Salt Lake City (US)
    "SMF", // Sacramento (US)
    "SOD", // Sorocaba (Brazil)
    "SOF", // Sofia (Bulgaria)
    "SSA", // Salvador (Brazil)
    "STI", // Santiago (Dominican Republic)
    "STL", // St. Louis (US)
    "STR", // Stuttgart (Germany)
    "SUV", // Suva (Fiji)
    "SVX", // Yekaterinburg (Russia)
    "SYD", // Sydney (Australia)
    "SZX", // Shenzhen (China)
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
    "TYN", // Taiyuan (China)
    "UDI", // Uberlandia (Brazil)
    "UIO", // Quito (Ecuador)
    "ULN", // Ulaanbaatar (Mongolia)
    "URT", // Surat Thani (Thailand)
    "VCP", // Sao Paulo (Brazil)
    "VIE", // Vienna (Austria)
    "VIX", // Vitoria (Brazil)
    "VNO", // Vilnius (Lithuania)
    "VTE", // Vientiane (Laos)
    "WAW", // Warsaw (Poland)
    "WDH", // Windhoek (Namibia)
    "WHU", // Wuhan (China)
    "XAP", // Chapeco (Brazil)
    "XFN", // Xiangyang (China)
    "XIY", // Xi'an (China)
    "XNH", // Xining (China)
    "XNN", // Xining (China)
    "YHZ", // Halifax (Canada)
    "YOW", // Ottawa (Canada)
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
