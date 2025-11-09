import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LazyBackground from '../components/LazyBackground';

const CountryCodeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Country codes data from country code.txt
  const countryData = [
    { country: "AFGHANISTAN", code: "AF" },
    { country: "ÅLAND ISLANDS", code: "AX" },
    { country: "ALBANIA", code: "AL" },
    { country: "ALGERIA", code: "DZ" },
    { country: "AMERICAN SAMOA", code: "AS" },
    { country: "ANDORRA", code: "AD" },
    { country: "ANGOLA", code: "AO" },
    { country: "ANGUILLA", code: "AI" },
    { country: "ANTARCTICA", code: "AQ" },
    { country: "ANTIGUA AND BARBUDA", code: "AG" },
    { country: "ARGENTINA", code: "AR" },
    { country: "ARMENIA", code: "AM" },
    { country: "ARUBA", code: "AW" },
    { country: "AUSTRALIA", code: "AU" },
    { country: "AUSTRIA", code: "AT" },
    { country: "AZERBAIJAN", code: "AZ" },
    { country: "BAHAMAS", code: "BS" },
    { country: "BAHRAIN", code: "BH" },
    { country: "BANGLADESH", code: "BD" },
    { country: "BARBADOS", code: "BB" },
    { country: "BELARUS", code: "BY" },
    { country: "BELGIUM", code: "BE" },
    { country: "BELIZE", code: "B2" },
    { country: "BENIN", code: "BJ" },
    { country: "BERMUDA", code: "BM" },
    { country: "BHUTAN", code: "BT" },
    { country: "BOLIVIA, PLURINATIONAL STATE OF", code: "BO" },
    { country: "BONAIRE, SINT EUSTATIUS AND SABA", code: "BQ" },
    { country: "BOSNIA AND HERZEGOVINA", code: "BA" },
    { country: "BOTSWANA", code: "BW" },
    { country: "BOUVET ISLAND", code: "BV" },
    { country: "BRAZIL", code: "BR" },
    { country: "BRITISH INDIAN OCEAN TERRITORY", code: "IO" },
    { country: "BRUNEI DARUSSALAM", code: "BN" },
    { country: "BULGARIA", code: "BG" },
    { country: "BURKINA FASO", code: "BF" },
    { country: "BURUNDI", code: "BI" },
    { country: "CAMBODIA", code: "KH" },
    { country: "CAMEROON", code: "CM" },
    { country: "CANADA", code: "CA" },
    { country: "CAPE VERDE", code: "CV" },
    { country: "CAYMAN ISLANDS", code: "KY" },
    { country: "CENTRAL AFRICAN REPUBLIC", code: "CF" },
    { country: "CHAD", code: "TD" },
    { country: "CHILE", code: "CL" },
    { country: "CHINA", code: "CN" },
    { country: "CHRISTMAS ISLAND", code: "CX" },
    { country: "COCOS (KEELING) ISLANDS", code: "CC" },
    { country: "COLOMBIA", code: "CO" },
    { country: "COMOROS", code: "KM" },
    { country: "CONGO", code: "CG" },
    { country: "CONGO, THE DEMOCRATIC REPUBLIC OF THE", code: "CD" },
    { country: "COOK ISLANDS", code: "CK" },
    { country: "COSTA RICA", code: "CR" },
    { country: "COTE D'IVOIRE", code: "CI" },
    { country: "CROATIA", code: "HR" },
    { country: "CUBA", code: "CV" },
    { country: "CURAÇAO", code: "CW" },
    { country: "CYPRUS", code: "CY" },
    { country: "CZECH REPUBLIC", code: "CZ" },
    { country: "DENMARK", code: "DK" },
    { country: "DJIBOUTI", code: "DJ" },
    { country: "DOMINICA", code: "DM" },
    { country: "DOMINICAN REPUBLIC", code: "DO" },
    { country: "ECUADOR", code: "EC" },
    { country: "EGYPT", code: "EG" },
    { country: "EL SALVADOR", code: "SV" },
    { country: "EQUATORIAL GUINEA", code: "GQ" },
    { country: "ERITREA", code: "ER" },
    { country: "ESTONIA", code: "EE" },
    { country: "ETHIOPIA", code: "ET" },
    { country: "FALKLAND ISLANDS (MALVINAS)", code: "FK" },
    { country: "FAROE ISLANDS", code: "FO" },
    { country: "FIJI", code: "FJ" },
    { country: "FINLAND", code: "FI" },
    { country: "FRANCE", code: "FR" },
    { country: "FRENCH GUIANA", code: "GF" },
    { country: "FRENCH POLYNESIA", code: "PF" },
    { country: "FRENCH SOUTHERN TERRITORIES", code: "TF" },
    { country: "GABON", code: "GA" },
    { country: "GAMBIA", code: "GM" },
    { country: "GEORGIA", code: "GE" },
    { country: "GERMANY", code: "DE" },
    { country: "GHANA", code: "GH" },
    { country: "GIBRALTAR", code: "GI" },
    { country: "GREECE", code: "GR" },
    { country: "GREENLAND", code: "GL" },
    { country: "GRENADA", code: "GD" },
    { country: "GUADELOUPE", code: "GP" },
    { country: "GUAM", code: "GU" },
    { country: "GUATEMALA", code: "GT" },
    { country: "GUERNSEY", code: "GG" },
    { country: "GUINEA", code: "GN" },
    { country: "GUINEA-BISSAU", code: "GW" },
    { country: "GUYANA", code: "GY" },
    { country: "HAITI", code: "HT" },
    { country: "HEARD ISLAND AND MCDONALD ISLANDS", code: "HM" },
    { country: "HOLY SEE (VATICAN CITY STATE)", code: "VA" },
    { country: "HONDURAS", code: "HN" },
    { country: "HONG KONG", code: "HK" },
    { country: "HUNGARY", code: "HU" },
    { country: "ICELAND", code: "IS" },
    { country: "INDIA", code: "IN" },
    { country: "INDONESIA", code: "ID" },
    { country: "IRAN, ISLAMIC REPUBLIC OF", code: "IR" },
    { country: "IRAQ", code: "IQ" },
    { country: "IRELAND", code: "IE" },
    { country: "ISLE OF MAN", code: "IM" },
    { country: "ISRAEL", code: "IL" },
    { country: "ITALY", code: "IT" },
    { country: "JAMAICA", code: "JM" },
    { country: "JAPAN", code: "JP" },
    { country: "JERSEY", code: "JE" },
    { country: "JORDAN", code: "JO" },
    { country: "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF", code: "KP" },
    { country: "KOREA, REPUBLIC OF", code: "KR" },
    { country: "KUWAIT", code: "KW" },
    { country: "KYRGYZSTAN", code: "KG" },
    { country: "LAO PEOPLE'S DEMOCRATIC REPUBLIC", code: "LA" },
    { country: "LATVIA", code: "LV" },
    { country: "LEBANON", code: "LB" },
    { country: "LESOTHO", code: "LS" },
    { country: "LIBERIA", code: "LR" },
    { country: "LIBYA", code: "LY" },
    { country: "LIECHTENSTEIN", code: "LI" },
    { country: "LITHUANIA", code: "LT" },
    { country: "LUXEMBOURG", code: "LU" },
    { country: "MACAO", code: "MO" },
    { country: "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF", code: "MK" },
    { country: "MADAGASCAR", code: "MG" },
    { country: "MALAWI", code: "MW" },
    { country: "MALAYSIA", code: "MY" },
    { country: "MALDIVES", code: "MV" },
    { country: "MALI", code: "ML" },
    { country: "MALTA", code: "MT" },
    { country: "MARSHALL ISLANDS", code: "MH" },
    { country: "MARTINIQUE", code: "MQ" },
    { country: "MAURITANIA", code: "MR" },
    { country: "MICRONESIA, FEDERATED STATES OF", code: "FM" },
    { country: "MOLDOVA, REPUBLIC OF", code: "MD" },
    { country: "MONACO", code: "MC" },
    { country: "MONGOLIA", code: "MN" },
    { country: "MONTENEGRO", code: "ME" },
    { country: "MONTSERRAT", code: "MS" },
    { country: "MOROCCO", code: "MA" },
    { country: "MOZAMBIQUE", code: "MZ" },
    { country: "MYANMAR", code: "MM" },
    { country: "NAMIBIA", code: "NA" },
    { country: "NAURU", code: "NR" },
    { country: "NEPAL", code: "NP" },
    { country: "NETHERLANDS", code: "NL" },
    { country: "NEW CALEDONIA", code: "NC" },
    { country: "NEW ZEALAND", code: "NZ" },
    { country: "NICARAGUA", code: "NI" },
    { country: "NIGER", code: "NE" },
    { country: "NIGERIA", code: "NG" },
    { country: "NIUE", code: "NU" },
    { country: "NORFOLK ISLAND", code: "NF" },
    { country: "NORTHERN MARIANA ISLANDS", code: "MP" },
    { country: "NORWAY", code: "NO" },
    { country: "OMAN", code: "OM" },
    { country: "PAKISTAN", code: "PK" },
    { country: "PALAU", code: "PW" },
    { country: "PALESTINIAN TERRITORY, OCCUPIED", code: "PS" },
    { country: "PANAMA", code: "PA" },
    { country: "PAPUA NEW GUINEA", code: "PG" },
    { country: "PARAGUAY", code: "PY" },
    { country: "PERU", code: "PE" },
    { country: "PHILIPPINES", code: "PH" },
    { country: "PITCAIRN", code: "PN" },
    { country: "POLAND", code: "PL" },
    { country: "PORTUGAL", code: "PT" },
    { country: "PUERTO RICO", code: "PR" },
    { country: "QATAR", code: "QA" },
    { country: "RÉUNION", code: "RE" },
    { country: "ROMANIA", code: "RO" },
    { country: "RUSSIAN FEDERATION", code: "RU" },
    { country: "RWANDA", code: "RW" },
    { country: "SAINT BARTHÉLEMY", code: "BL" },
    { country: "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA", code: "SH" },
    { country: "SAINT KITTS AND NEVIS", code: "KN" },
    { country: "SAINT LUCIA", code: "LC" },
    { country: "SAINT MARTIN (FRENCH PART)", code: "MF" },
    { country: "SAINT PIERRE AND MIQUELON", code: "PM" },
    { country: "SAINT VINCENT AND THE GRENADINES", code: "VC" },
    { country: "SAMOA", code: "WS" },
    { country: "SAN MARINO", code: "SM" },
    { country: "SAO TOME AND PRINCIPE", code: "ST" },
    { country: "SAUDI ARABIA", code: "SA" },
    { country: "SENEGAL", code: "SN" },
    { country: "SERBIA", code: "RS" },
    { country: "SEYCHELLES", code: "SC" },
    { country: "SIERRA LEONE", code: "SL" },
    { country: "SINGAPORE", code: "SG" },
    { country: "SINT MAARTEN (DUTCH PART)", code: "SX" },
    { country: "SOMALIA", code: "SO" },
    { country: "SOUTH AFRICA", code: "ZA" },
    { country: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS", code: "GS" },
    { country: "SOUTH SUDAN", code: "SS" },
    { country: "SPAIN", code: "ES" },
    { country: "SRI LANKA", code: "LK" },
    { country: "SUDAN", code: "SD" },
    { country: "SURINAME", code: "SR" },
    { country: "SVALBARD AND JAN MAYEN", code: "SJ" },
    { country: "SWAZILAND", code: "SZ" },
    { country: "SWEDEN", code: "SE" },
    { country: "SWITZERLAND", code: "CH" },
    { country: "SYRIAN ARAB REPUBLIC", code: "SY" },
    { country: "TAIWAN, PROVINCE OF CHINA", code: "TW" },
    { country: "TAJIKISTAN", code: "TJ" },
    { country: "TANZANIA, UNITED REPUBLIC OF", code: "TZ" },
    { country: "THAILAND", code: "TH" },
    { country: "TIMOR-LESTE", code: "TL" },
    { country: "TOGO", code: "TG" },
    { country: "TOKELAU", code: "TK" },
    { country: "TONGA", code: "TO" },
    { country: "TRINIDAD AND TOBAGO", code: "TT" },
    { country: "TUNISIA", code: "TN" },
    { country: "TURKEY", code: "TR" },
    { country: "TURKMENISTAN", code: "TM" },
    { country: "TURKS AND CAICOS ISLANDS", code: "TC" },
    { country: "TUVALU", code: "TV" },
    { country: "UGANDA", code: "UG" },
    { country: "UKRAINE", code: "UA" },
    { country: "UNITED ARAB EMIRATES", code: "AE" },
    { country: "UNITED KINGDOM", code: "GB" },
    { country: "UNITED STATES", code: "US" },
    { country: "UNITED STATES MINOR OUTLYING ISLANDS", code: "UM" },
    { country: "URUGUAY", code: "UY" },
    { country: "UZBEKISTAN", code: "UZ" },
    { country: "VANUATU", code: "VU" },
    { country: "VENEZUELA, BOLIVARIAN REPUBLIC OF", code: "VE" },
    { country: "VIET NAM", code: "VN" },
    { country: "VIRGIN ISLANDS, BRITISH", code: "VG" },
    { country: "VIRGIN ISLANDS, U.S.", code: "VI" },
    { country: "WALLIS AND FUTUNA", code: "WF" },
    { country: "WESTERN SAHARA", code: "EH" },
    { country: "YEMEN", code: "YE" },
    { country: "ZAMBIA", code: "ZM" },
    { country: "ZIMBABWE", code: "ZW" }
  ];

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return countryData;
    }

    const searchLower = searchTerm.toLowerCase();
    return countryData.filter(country =>
      country.country.toLowerCase().includes(searchLower) ||
      country.code.toLowerCase().includes(searchLower)
    );
  }, [searchTerm, countryData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here if desired
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-18 md:pb-20">
        <LazyBackground 
          src="/assets/home__page.webp"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Country Code Finder
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Find ISO country codes for countries and territories worldwide
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
                    Search Countries
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Enter country name or country code..."
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-gray-600">
                Showing {filteredData.length} countr{filteredData.length !== 1 ? 'ies' : 'y'}
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredData.map((country, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                        {country.country}
                      </h3>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                        {country.code}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => copyToClipboard(country.code)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Code
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
                <h3 className="text-lg font-medium text-gray-900 mb-2">No countries found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms.
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

export default CountryCodeFinder;
