import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Tracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all'); // 'all', 'sea', 'air'

  // Sea cargo tracking data
  const seaCargoData = [
    { name: "ACL Atlantic Container Line", url: "http://www.aclcargo.com/trackCargo.php" },
    { name: "AEL American Export Lines", url: "http://shipit.com/index.php?option=com_user&view=login" },
    { name: "AIS Ship Tracking", url: "http://www.portvision.com/" },
    { name: "Alianca Navegaceo e Logistica Ltda.", url: "http://www.alianca.com.br/ecommerce-al/trackntrace/?lang=en" },
    { name: "ANL Container Line", url: "http://www.anl.com.au/" },
    { name: "APL American President Line", url: "http://www.apl.com/tracking/" },
    { name: "Bahri (NSCSA National Shipping Company of Saudi Arabia)", url: "http://www.bahri.sa/cargo-tracking-services" },
    { name: "CCNI", url: "http://www.ccni.cl/index.php?option=com_ct&Itemid=115" },
    { name: "CSCL CHINA SHIPPING CONTAINER LINES", url: "http://www.cscl.com.cn/english/" },
    { name: "CMA-CGM", url: "http://www.cma-cgm.com/eBusiness/Tracking/Default.aspx" },
    { name: "CNC LINE Cheng Lie Navigation", url: "https://www.cncline.com.tw/eCNC/eservice/Cargo.asp" },
    { name: "CONTAINER Tracking", url: "http://www.seacargotracking.net/" },
    { name: "COSCO CONTAINER LINES", url: "http://ebusiness.coscon.com/NewEBWeb/public/cargoTracking/cargoTracking.xhtml?MM_PG_MeetingSearch&flag=l&PortalLanguage=GB18030&uid=&language=en" },
    { name: "COSCO USA", url: "http://www.cosco-usa.com/" },
    { name: "COSCO Canada", url: "http://www.cosco.ca/" },
    { name: "CROWLEY", url: "http://www.crowley.com/What-We-Do/Shipping-and-Logistics/Liner-Shipment-Tracking" },
    { name: "CSAV", url: "http://www2.csav.com/rastreo/rastreo.nsf/YourTrace?OpenForm" },
    { name: "CSAV Norasia", url: "http://www.csavnorasia.com/index_en.htm" },
    { name: "DAL – Deutsche Afrika Linien", url: "http://my.dal.biz/onlineservices/tracking/index.php" },
    { name: "DELMAS", url: "http://ebusiness.cma-cgm.com/DELMAS/Tracking/Default.aspx" },
    { name: "EIMSKIP – Vessel Tracking", url: "http://www.service.tracscape.com/tsp/servlet/com.trackwell.gis.ims.LoginServlet?customer=11640&user=opinn_eimskip&pwd=opinn8&sId=0&resolution=1200&parentPage=/servlet/com.trackwell.gis.ims.twims" },
    { name: "Emirates Shipping Line", url: "http://www.emiratesline.com/" },
    { name: "Evergreen Lines", url: "http://www.shipmentlink.com/servlet/TDB1_CargoTracking.do" },
    { name: "FESCO", url: "http://www.fesco.ru/en/index.html" },
    { name: "Gold Star Line", url: "http://www.gslltd.com.hk/cargo_tracing.html" },
    { name: "Grieg Star Shipping", url: "http://www.griegstar.com/" },
    { name: "Grimaldi Lines", url: "http://track.grimaldi-app.com/" },
    { name: "Hamburg-Sued (Columbus Line)", url: "http://www.hamburgsud-line.com/ecommerce-hs/trackntrace/?lang=en" },
    { name: "Hanjin", url: "http://www.hanjin.com/hanjin/CUP_HOM_3301.do?sessLocale=en" },
    { name: "Hapag-Lloyd", url: "https://www.hapag-lloyd.com/en/tracing/by_container.html" },
    { name: "HAWK Container Lines", url: "http://www.hawkgroups.com/" },
    { name: "HEUNG A Shipping", url: "http://www.heung-a.co.kr/eng/cargo_web/cargotrace.cfm" },
    { name: "HORIZON Lines", url: "http://www.heung-a.co.kr/eng/cargo_web/cargotrace.cfm" },
    { name: "HUGO STINNES", url: "http://www.stinnes-linien.de/softship/history.htm" },
    { name: "HYUNDAI Merchant Marine (HMM)", url: "http://www.hmm21.com/cms/company/eng/index.html" },
    { name: "Ignazio Messina Line", url: "http://www.messinaline.it/wps/portal/messina" },
    { name: "Italia Marittima (formerly Lloyd Triestino)", url: "http://www.shipmentlink.com/servlet/TDB1_CargoTracking.do" },
    { name: "K-Line", url: "http://www.kline.com/" },
    { name: "Kambara Kisen", url: "http://www.kambara-kisen.co.jp/" },
    { name: "Kestrel Liner", url: "http://www.kestrel-liner.com/shipment.shtml" },
    { name: "KMTC Line", url: "http://www.kmtc.co.kr/" },
    { name: "LIBRA", url: "http://www3.libra.com.br:8080/scripts/index.php?p=online_tracking_module" },
    { name: "MACS Shipping", url: "http://www.macship.com/t&t.html" },
    { name: "Maersk Line", url: "http://www.maerskline.com/appmanager/maerskline/public?_nfpb=true&_pageLabel=page_tracking3_trackSimple" },
    { name: "MARFRET Compagnie Maritime", url: "http://www.marfret.com/en/tracking" },
    { name: "MATSON", url: "https://www.matson.com/vcsc/pov/tracking/tracking.jsp" },
    { name: "MAXICON Container Line", url: "http://www.maxiconline.com/" },
    { name: "MOL Mitsui OSK Lines", url: "http://www.molpower.com/htm/default.htm" },
    { name: "MISC Berhad", url: "http://www.cargosmart.com/misc_main.htm" },
    { name: "MSC", url: "http://www.mscgva.ch/tracking/index.html" },
    { name: "NAMSUNG Shipping", url: "http://www.namsung.co.kr/kor/eservice/trace.ns.tsp" },
    { name: "Nordana", url: "http://server1.vilden.net/nu/public/index.htm" },
    { name: "NYK Nippon Yusen Kaisha Lines", url: "http://www2.nykline.com/" },
    { name: "Ocean Africa Container Lines vessel tracking", url: "http://www.oceanafrica.co.za/track.asp" },
    { name: "Ocean Empire Lines", url: "http://www.oelltd.com/" },
    { name: "OOCL", url: "http://www.cargosmart.com/" },
    { name: "PDL Pacific Direct Line", url: "http://www.pdl123.co.nz/services/track_and_trace.php" },
    { name: "PIL Pacific International Lines", url: "https://www.pilship.com/ecms-server/Public/TrackandTrace.jsp" },
    { name: "POLLUX & CASTOR", url: "http://www.pollux-castor.com/" },
    { name: "RCL Regional Container Lines", url: "http://www.rclgroup.com/CrgTrack_00.asp" },
    { name: "Royal Arctic Lines", url: "http://www.ral.gl/index.php?option=com_content&view=article&id=174&Itemid=222&lang=en" },
    { name: "Safmarine", url: "http://www.safmarine.com/" },
    { name: "SCI Shipping Corporation of India", url: "http://www.shipindia.com/app/consignment-tracking.aspx" },
    { name: "Seaboard Marine", url: "http://www.seaboardmarine.com/sml/" },
    { name: "Seago Line", url: "http://www.seagoline.com/" },
    { name: "Sea Star Line", url: "http://www.seastarline.com/" },
    { name: "Sinokor", url: "http://www.sinokor.co.kr/" },
    { name: "Sofrana", url: "http://www.sofrana.co.nz/" },
    { name: "STX PanOcean", url: "http://container.stxpanocean.com/" },
    { name: "Swire Shipping", url: "http://www.swireshipping.com/" },
    { name: "Tarros", url: "http://www.tarros.it/tarros4_1_e.htm" },
    { name: "TCC The Containership Company", url: "http://www.containership-company.com/" },
    { name: "T.S. Lines", url: "http://www.tslines.com/TCT1/TCT1Query.aspx" },
    { name: "TRANSLINER", url: "http://www.transliner.com.sg/Tracer.aspx" },
    { name: "UASC United Arab Shipping Co", url: "http://uasconline.uasc.net/Home" },
    { name: "Wallenius Wilhelmsen Logistics", url: "https://att.2wglobal.com/gstattweb/ocean.do?method=getDefaultOceanQuickSearchPage" },
    { name: "Wan Hai Lines", url: "http://web.wanhai.com/index_whl.jsp?file_num=15040&web=whlwww&i_url=whlwww/cargoTrack.jsp" },
    { name: "Yang Ming", url: "http://www.yangming.com/track_trace/track_trace.html" },
    { name: "Zim Line", url: "http://www.zim.com/pages/findcontainer.aspx" }
  ];

  // Air cargo tracking data
  const airCargoData = [
    { name: "Aban Air", url: "http://www.abanair.com/" },
    { name: "ACG Air Cargo Germany", url: "http://www.acg.aero/" },
    { name: "Adria Airways", url: "http://www.adria.si/en/information/?linkid=cargo" },
    { name: "Aegean Airlines", url: "http://en.aegeanair.com/travel-information/cargo-services/" },
    { name: "Aer Lingus Cargo", url: "http://www.aerlinguscargo.com/cms/publish/Cargo_Handling/Track.html" },
    { name: "Aero-Charter", url: "http://acr-air.com/cargo/track/index.php" },
    { name: "Aeroflot", url: "http://www.cargoserv.com/tracking.asp?Carrier=SU&Pfx=507" },
    { name: "Aerolineas Argentinas", url: "http://www.aerolineas.com.ar/arg/main.asp?idSitio=US&idPagina=186&idIdioma=en" },
    { name: "Aerosvit", url: "http://www.aerosvit.ua/eng/eng/onlservredir/auto_booking.html" },
    { name: "Aeromexico Cargo", url: "http://www.skyteamcargo.com/" },
    { name: "Aeromexpress Cargo", url: "http://www.searchcore.net/web?src=derr&appid=141113&systemid=426&q=http://www.aeromexpress.com.mx/indexi.cfm" },
    { name: "AeroUnion", url: "http://www.aerounion.com.mx/tracking/" },
    { name: "Africa West", url: "http://www.africawest.tg/" },
    { name: "Air Algerie", url: "http://www.cargoserv.com/tracking.asp?Carrier=AH&Pfx=124" },
    { name: "Air ALM", url: "http://www.cargoserv.com/tracking.asp?Carrier=LM&Pfx=119" },
    { name: "Air Armenia", url: "http://www.datacair.com/QryFlightinfo.aspx" },
    { name: "AirAsia/AirAsia Berhad", url: "http://cargo.airasia.com/Track.aspx" },
    { name: "Air Astana", url: "http://www.datacair.com/QryFlightinfo.aspx" },
    { name: "Air Atlanta Icelandic", url: "http://www.cargoserv.com/tracking.asp?Carrier=S3&Pfx=318" },
    { name: "Air Baltic", url: "http://www.airbaltic.com/public/cargo.html" },
    { name: "AirBridge Cargo", url: "http://www.airbridgecargo.com/" },
    { name: "Air Canada", url: "http://cargotools.aircanada.ca/TrackAndTraceInput.asp" },
    { name: "Air China", url: "http://www.airchinacargo.com/en/" },
    { name: "Air Europa Cargo", url: "http://cargo.air-europa.com/ferreret/in/WebPantallaPrincipal.html" },
    { name: "Air France AF", url: "http://www.af-klm.com/cargo/b2b/wps/portal/b2b/" },
    { name: "Air Greenland", url: "http://www.airgreenland.gl/cargo/tracking_awb/" },
    { name: "Air Hong Kong", url: "http://www.hactl.com/webapp/hactlpbf/CargoTracking/CargoTracking.jsp?language=en&country=US" },
    { name: "Air India", url: "http://www.airindia.in/SBCMS/Webpages/Cargo-Tracking.aspx?MID=200" },
    { name: "Air Jamaica JM", url: "http://www.airjamaica.com/track.aspx" },
    { name: "Air Macau", url: "http://202.106.139.28/nx/PublicEng/index.aspx?strCul=en" },
    { name: "Air Madagascar", url: "http://www.datacair.com/QryFlightinfo.aspx" },
    { name: "Air Malawi", url: "http://web.ana-aviation.com/" },
    { name: "Air Malta", url: "http://apps.traxon.com/amc.htm" },
    { name: "Air Mauritius", url: "http://apps.traxon.com/mau.htm" },
    { name: "Air Moldova", url: "http://www.airmoldova.md/cargo-check-en/" },
    { name: "Air New Zealand", url: "http://www.airnz.co.nz/aboutus/cargo/default.htm" },
    { name: "Air Seychelles", url: "http://www.cargoserv.com/tracking.asp?Carrier=HM&Pfx=061" },
    { name: "Air Tahiti Nui", url: "http://www.airtahitinui.co.nz/flightsched/flightstatus.asp" },
    { name: "Air Transat", url: "http://www.airtransatcargo.com/en" },
    { name: "Alaska Airlines", url: "http://www.alaskaair.com/content/cargo/cargo-home.aspx" },
    { name: "Alitalia", url: "http://www.cargoserv.com/tracking.asp?Carrier=AZ&Pfx=055" },
    { name: "Allied Air", url: "http://www.alliedairng.com/tracking.html" },
    { name: "Aloha Air Cargo", url: "http://www.alohaaircargo.com/shipment-tracking.html" },
    { name: "American Airlines", url: "http://www.aacargo.com/" },
    { name: "Amerijet International", url: "https://www.amerijet.com/" },
    { name: "ANA All Nippon Cargo", url: "http://www.ana.co.jp/cargo/en/int/" },
    { name: "Arik Air", url: "http://www.euro-cargo.com/Tracking/?awb_carrier=725" },
    { name: "Asiana Airlines", url: "http://www.asianacargo.com/English/tracking/trk_master_air_waybill.jsp" },
    { name: "Astral Aviation", url: "http://web.ana-aviation.com/" },
    { name: "Atlantic Southeast Airlines", url: "https://www.deltacargo.com/dsse1.asp" },
    { name: "Atlas Air", url: "http://www.atlasair.com/aa/explore.html" },
    { name: "Avient SMJ", url: "https://www.avient.aero/map/Track" },
    { name: "Azerbaijan Airlines", url: "http://www.cargoserv.com/tracking.asp?Carrier=J2&Pfx=771" },
    { name: "Biman Bangladesh", url: "http://www.cargoserv.com/tracking.asp?Carrier=BG&Pfx=997" },
    { name: "Bringer Air Cargo", url: "http://track.magaya.net/trackbynumber/bringer_trackandtrace.html" },
    { name: "British Airways", url: "http://www.baworldcargo.com/" },
    { name: "British Midland Airways", url: "http://www.tradevision.net/res-bma/" },
    { name: "Brussels Airlines", url: "http://company.brusselsairlines.com/en_be/corp/b2b-and-corporate/brussels-airlines-cargo/track-and-trace.aspx" },
    { name: "Bulgaria Air", url: "http://www.datacair.com/QryFlightinfo.aspx" },
    { name: "Buraq Air Transport", url: "http://booking.buraqair.com:8080/cargo/polno.aspx" },
    { name: "CAL Cargo", url: "http://www.cal-cargo.com/" },
    { name: "Canadian North", url: "http://www.canadiannorth.com/cargo/track.php" },
    { name: "Cargoitalia", url: "http://www.cargoitalia.it/" },
    { name: "Caribbean Airlines", url: "http://www.caribbean-airlines.com/track_cargo.php" },
    { name: "Cathay Pacific", url: "http://www.cathaypacificcargo.com/en-US/ManageYourShipment/Tracking.aspx" },
    { name: "Cebgo", url: "http://www.cebupacificair.com/pages/track-shipment" },
    { name: "Cebu Pacific Cargo", url: "http://www.cebupacificair.com/pages/track-shipment" },
    { name: "Centurion Air Cargo", url: "http://www.centurioncargo.com/track.awb.php" },
    { name: "China Airlines", url: "http://cargo.china-airlines.com/ccrdsInternet/tracking.do" },
    { name: "China Cargo Airlines", url: "http://www.ceaircargo.com/" },
    { name: "China Eastern Airlines", url: "http://www.ceair.com/cargo/" },
    { name: "China Southern Airlines", url: "http://www.csair.com/en/cargo/" },
    { name: "Cielos Airlines", url: "http://www.datacair.com/QryFlightinfo.aspx" },
    { name: "CMA CGM Air Cargo", url: "https://www.cma-cgm.com/aircargo" },
    { name: "Cobalt Air", url: "http://cobalt.aero/cargo" },
    { name: "Condor Cargo", url: "http://www.condor.com/us/flight-info/cargo.jsp" },
    { name: "Continental Airlines Cargo", url: "http://www.continental.com/web/en-US/content/cargo/track.aspx" },
    { name: "Corsair International", url: "http://www.corsair.fr/vos-bagages/le-fret-corsair" },
    { name: "Croatia Airlines", url: "http://www.croatiaairlines.com/en/Travel-Info/Cargo" },
    { name: "Cubana Cargo", url: "http://www.cubanafret.com/" },
    { name: "Cyprus Airways", url: "http://www.cyprusair.com/cargo/" },
    { name: "DHL Aviation", url: "http://www.dhl.com/en/express/tracking.html" },
    { name: "Delta Airlines Cargo", url: "http://www.deltacargo.com/" },
    { name: "DHL Aero Expreso", url: "http://www.dhl.com/" },
    { name: "DHL Air", url: "http://www.dhl.com/" },
    { name: "DHL Express", url: "http://www.dhl.com/" },
    { name: "DHL Global Forwarding", url: "http://www.dhl.com/" },
    { name: "DHL International", url: "http://www.dhl.com/" },
    { name: "DHL United Kingdom", url: "http://www.dhl.co.uk/" },
    { name: "Dragonair Cargo", url: "http://www.dragonair.com/ka/en_HK/manage-booking/track-cargo-awb.html" },
    { name: "Druk Air", url: "http://www.drukair.com.bt/cargo" },
    { name: "Eastern Air Lines", url: "http://www.easternairlines.aero/cargo" },
    { name: "Egyptair Cargo", url: "http://www.egyptair-cargo.com/en/track" },
    { name: "EL AL Israel Airlines", url: "http://www.elal.co.il/ELAL/English/ELAL_Cargo/Cargo_Tracking/" },
    { name: "Emirates SkyCargo", url: "http://www.skycargo.com/" },
    { name: "Etihad Cargo", url: "http://www.etihadcargo.com/en-us/track-shipment/" },
    { name: "Ethiopian Cargo & Logistics", url: "https://www.ethiopiancargo.com/#/tracking" },
    { name: "EVA Air Cargo", url: "http://www.evaholdings.com/en-us/cargo/track-shipment" },
    { name: "FedEx", url: "https://www.fedex.com/en-in/tracking.html" },
    { name: "Finnair Cargo", url: "http://cargo.finnair.com/en/track-shipment" },
    { name: "First Air", url: "http://www.firstair.ca/en/cargo-services/track-your-shipment/" },
    { name: "Flydubai Cargo", url: "https://www.flydubai.com/en/flying-with-us/cargo/track-shipment" },
    { name: "French Bee", url: "https://us.frenchbee.com/en/freight-cargo" },
    { name: "Frontier Airlines", url: "https://www.flyfrontier.com/cargo/track-cargo" },
    { name: "Garuda Indonesia Cargo", url: "https://cargo.garuda-indonesia.com/en/track-shipment" },
    { name: "Georgian Airways", url: "http://www.georgian-airways.com/cargo" },
    { name: "GOL Linhas Aéreas", url: "https://www.voegol.com.br/en/cargo" },
    { name: "Great Lakes Airlines", url: "https://www.greatlakesav.com/cargo/" },
    { name: "Gulf Air Cargo", url: "https://www.gulfair.com/cargo" },
    { name: "Guyana Airways", url: "https://www.guyanaairways.com/" },
    { name: "Hainan Airlines", url: "https://cargo.hainan-airlines.com/en-us" },
    { name: "Hawaiian Airlines", url: "https://www.hawaiianaircargo.com/" },
    { name: "Hong Kong Airlines Cargo", url: "https://www.hkaircargo.com/en/track-and-trace" },
    { name: "Horizon Air", url: "https://www.horizonair.com/content/cargo/cargo-home.aspx" },
    { name: "Iberia Cargo", url: "https://www.iberiacargo.com/en/tracking" },
    { name: "Icelandair Cargo", url: "https://www.icelandaircargo.com/track-and-trace" },
    { name: "Indian Airlines", url: "https://www.airindia.in/SBCMS/Webpages/Cargo-Tracking.aspx" },
    { name: "Indigo", url: "https://www.goindigo.in/book/cargo.html" },
    { name: "Iran Air Cargo", url: "https://cargo.iranair.com/en/tracking" },
    { name: "Iraqi Airways", url: "https://www.iraqiairways.co.uk/cargo" },
    { name: "ITA Airways (Italy)", url: "https://www.itaairways.com/en_en/fly-ita/cargo/tracking.html" },
    { name: "Japan Airlines Cargo", url: "https://www.jal.co.jp/en/inter/cargo/track/" },
    { name: "Jazeera Airways", url: "https://www.jazeeraairways.com/en-kw/book/cargo" },
    { name: "Jet Airways", url: "http://www.jetairways.com/EN/IN/Cargo/CargoTracking.aspx" },
    { name: "JetBlue Cargo", url: "https://www.jetblue.com/baggage/cargo" },
    { name: "Kenya Airways Cargo", url: "https://www.kenyacargo.com/track-shipment" },
    { name: "KLM Cargo", url: "http://www.af-klm.com/cargo/b2b/wps/portal/b2b" },
    { name: "Korean Air Cargo", url: "http://cargo.koreanair.com/track.awb" },
    { name: "Kuwait Airways", url: "https://www.kuwaitairways.com/en/cargo" },
    { name: "LACSA Cargo", url: "http://lacsa.com/cargo/en/tracking" },
    { name: "LAM Mozambique Airlines", url: "https://www.lam.co.mz/Cargo/Tracking" },
    { name: "LAN Airlines Cargo", url: "https://www.latamcargo.com/en/tracking" },
    { name: "Lauda Air", url: "https://www.laudaair.com/en/cargo/track-shipment" },
    { name: "Libyan Airlines", url: "https://web.ana-aviation.com/" },
    { name: "LOT Polish Airlines Cargo", url: "https://www.lot.com/pl/en/cargo" },
    { name: "Lufthansa Cargo", url: "https://www.lufthansa-cargo.com/en/tracking" },
    { name: "Luxair Cargo", url: "https://www.luxair.lu/en/cargo" },
    { name: "Malaysia Airlines Cargo", url: "https://www.maskargo.com/MH/Tracking" },
    { name: "Martinair Cargo", url: "https://www.martinair.com/en/track-and-trace" },
    { name: "Masair", url: "https://www.masair.com/en/track-awb" },
    { name: "MEA Middle East Airlines", url: "https://www.mea.com.lb/english/Cargo/Cargo-Tracking" },
    { name: "Meridiana Cargo", url: "http://www.datacair.com/QryFlightinfo.aspx" },
    { name: "Myanmar Airways International", url: "https://www.maiair.com/cargo" }
  ];

  // Combine all data with type information
  const allData = [
    ...seaCargoData.map(item => ({ ...item, type: 'sea' })),
    ...airCargoData.map(item => ({ ...item, type: 'air' }))
  ];

  // Filter data based on search term and selected type
  const filteredData = useMemo(() => {
    let filtered = allData;

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedType, allData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const openTrackingLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-18 md:pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Cargo Tracking
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Track your shipments across major sea cargo and air cargo carriers worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                {/* Search Input */}
                <div className="flex-1">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                    Search Carriers
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Enter carrier name..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Filter Dropdown */}
                <div className="md:w-48">
                  <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo Type
                  </label>
                  <select
                    id="type-filter"
                    value={selectedType}
                    onChange={handleTypeChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Carriers</option>
                    <option value="sea">Sea Cargo</option>
                    <option value="air">Air Cargo</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-gray-600">
                Showing {filteredData.length} carrier{filteredData.length !== 1 ? 's' : ''}
                {selectedType !== 'all' && ` (${selectedType === 'sea' ? 'Sea' : 'Air'} Cargo)`}
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredData.map((carrier, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {carrier.name}
                      </h3>
                      <div className="flex items-center mb-3">
                        <span className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          carrier.type === 'sea' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {carrier.type === 'sea' ? 'Sea Cargo' : 'Air Cargo'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => openTrackingLink(carrier.url)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Track Shipment
                  </button>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No carriers found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filter options.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tracker;
