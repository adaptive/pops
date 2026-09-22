/**
 * source: Sucuri firewall location map, status and expansion announcements
 * https://docs.sucuri.net/website-firewall/sucuri-firewall-locations/
 * https://status.sucuri.net/
 * https://blog.sucuri.net/2019/12/product-update-sucuri-firewall-in-sophia.html
 * https://blog.sucuri.net/2021/11/product-update-sucuri-firewall-in-india.html
 */
const sucuri = {
  name: "Sucuri",
  url: "https://sucuri.net/",
  pops: [
    "AMS", // Amsterdam (Netherlands)
    "BOM", // IATA BOM
    "CDG", // Paris (France)
    "DFW", // Dallas (US)
    "FRA", // Frankfurt (Germany)
    "GRU", // Sao Paulo CDN edge (Brazil)
    "IAD", // Washington DC (US)
    "LHR", // London (UK)
    "MIA", // Miami (US)
    "NRT", // Tokyo (Japan)
    "ORD", // Chicago (US)
    "SIN", // Singapore (Singapore)
    "SJC", // San Jose (US)
    "SOF", // Sofia (Bulgaria)
    "SYD" // Sydney CDN edge (Australia)
  ]
};

export default sucuri;
