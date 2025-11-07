import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AirportCodeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Airport codes data from airport code.txt
  const airportData = [
    // International Airports A-B
    { city: "Abu Dhabi", country: "United Arab Emirates", code: "AUH" },
    { city: "Acapulco", country: "Mexico", code: "ACA" },
    { city: "Agana", country: "Guam", code: "GUM" },
    { city: "Amman", country: "Jordan", code: "AMM" },
    { city: "Amsterdam", country: "Netherlands", code: "AMS" },
    { city: "Asuncion", country: "Paraguay", code: "ASU" },
    { city: "Athens", country: "Greece", code: "ATH" },
    { city: "Auckland", country: "New Zealand", code: "AKL" },
    { city: "Bahrain", country: "Bahrain", code: "BAH" },
    { city: "Bangkok", country: "Thailand", code: "BKK" },
    { city: "Barcelona", country: "Spain", code: "BCN" },
    { city: "Beijing", country: "China", code: "PEK" },
    { city: "Belfast", country: "Northern Ireland, UK", code: "BFS" },
    { city: "Belgrade", country: "Yugoslavia", code: "BJY" },
    { city: "Belize City", country: "Belize", code: "BZE" },
    { city: "Berlin", country: "Germany", code: "BER" },
    { city: "Bimini", country: "Bahamas", code: "BIM" },
    { city: "Bogota", country: "Columbia", code: "BOG" },
    { city: "Bombay", country: "India", code: "BOM" },
    { city: "Bonn", country: "Germany", code: "CGN" },
    { city: "Brussels", country: "Belgium", code: "BRU" },
    { city: "Bucharest", country: "Romania", code: "OTP" },
    { city: "Budapest", country: "Hungary", code: "BUD" },
    { city: "Buenos Aires", country: "Argentina", code: "EZE" },
    
    // International C-G
    { city: "Cancun", country: "Mexico", code: "CUN" },
    { city: "Cape Town", country: "South Africa", code: "CPT" },
    { city: "Caracas", country: "Venezuela", code: "CCS" },
    { city: "Casablanca", country: "Morocco", code: "CMN" },
    { city: "Colombo", country: "Sri Lanka", code: "CMB" },
    { city: "Cozumel", country: "Mexico", code: "CZM" },
    { city: "Dominica", country: "Dominica", code: "DOM" },
    { city: "Dublin", country: "Ireland", code: "DUB" },
    { city: "Dusseldorf", country: "Germany", code: "DUS" },
    { city: "Frankfurt", country: "Germany", code: "FRA" },
    { city: "Geneva", country: "Switzerland", code: "GVA" },
    { city: "Glasgow", country: "United Kingdom", code: "GLA" },
    { city: "Gothenburg", country: "Sweden", code: "GOT" },
    { city: "Governors Harbour", country: "Bahamas", code: "GHB" },
    { city: "Guadalajara", country: "Mexico", code: "GDL" },
    { city: "Guatemala City", country: "Guatemala", code: "GUA" },
    { city: "Guayaquil", country: "Ecuador", code: "GYE" },
    
    // International H-L
    { city: "Hamburg", country: "Germany", code: "HAM" },
    { city: "Hanoi", country: "Vietnam", code: "HAN" },
    { city: "Helsinki", country: "Finland", code: "HEL" },
    { city: "Hiroshima", country: "Japan", code: "HIW" },
    { city: "Hong Kong", country: "China", code: "HKG" },
    { city: "Huatulco", country: "Mexico", code: "HUX" },
    { city: "Istanbul", country: "Turkey", code: "IST" },
    { city: "Ixtapa", country: "Mexico", code: "ZIH" },
    { city: "Jakarta", country: "Indonesia", code: "CGK" },
    { city: "Johannesburg", country: "South Africa", code: "JNB" },
    { city: "Kiev", country: "Ukraine", code: "KBP" },
    { city: "Kingston", country: "Jamaica", code: "KIN" },
    { city: "Montego Bay", country: "Jamaica", code: "MBJ" },
    { city: "Leon", country: "Mexico", code: "BJX" },
    { city: "Lima", country: "Peru", code: "LIM" },
    { city: "Lisbon", country: "Portugal", code: "LIS" },
    { city: "London (Gatwick)", country: "UK", code: "LGW" },
    { city: "London (Heathrow)", country: "UK", code: "LHR" },
    { city: "Los Cabos", country: "Mexico", code: "SJD" },
    { city: "Lyon", country: "France", code: "LYN" },
    
    // International M-N
    { city: "Madrid", country: "Spain", code: "MAD" },
    { city: "Managua", country: "Nicaragua", code: "MGA" },
    { city: "Manchester", country: "England", code: "MAN" },
    { city: "Manila", country: "Philippines", code: "MNL" },
    { city: "Mazatlan", country: "Mexico", code: "MZT" },
    { city: "Melbourne", country: "Australia", code: "MEL" },
    { city: "Mexico City", country: "Mexico", code: "MEX" },
    { city: "Milan (Malpensa)", country: "Italy", code: "MXP" },
    { city: "Monterrey", country: "Mexico", code: "MTY" },
    { city: "Moscow (Sheremetyevo)", country: "Russia", code: "SVO" },
    { city: "Munich", country: "Germany", code: "MUC" },
    { city: "Nagoya", country: "Japan", code: "NGO" },
    { city: "Nairobi", country: "Kenya", code: "NBO" },
    { city: "Naples", country: "Italy", code: "NAP" },
    { city: "Nassau", country: "Bahamas", code: "NAS" },
    { city: "Nice", country: "France", code: "NCE" },
    
    // International O-R
    { city: "Osaka", country: "Japan", code: "KIX" },
    { city: "Oslo", country: "Norway", code: "OSL" },
    { city: "Panama City", country: "Panama", code: "PTY" },
    { city: "Paradise Island", country: "Bahamas", code: "PID" },
    { city: "Paris (Charles de Gaulle)", country: "France", code: "CDG" },
    { city: "Paris (Orly)", country: "France", code: "ORY" },
    { city: "Ponce", country: "Puerto Rico", code: "PSE" },
    { city: "Prague", country: "Czech Republic", code: "PRG" },
    { city: "Puerto Vallarta", country: "Mexico", code: "PVR" },
    { city: "Reykjavik", country: "Iceland", code: "RKV" },
    { city: "Rio de Janeiro", country: "Brazil", code: "GIG" },
    { city: "Rome (Fiumicino)", country: "Italy", code: "FCO" },
    
    // International S-Z
    { city: "San Juan", country: "Puerto Rico", code: "SJU" },
    { city: "Santiago de Chile", country: "Chile", code: "SCL" },
    { city: "Santo Domingo", country: "Dominican Republic", code: "SDQ" },
    { city: "Sao Paulo", country: "Brazil", code: "GRU" },
    { city: "Sapporo", country: "Japan", code: "CTX" },
    { city: "Seoul", country: "Korea", code: "SEL" },
    { city: "Shannon", country: "Ireland", code: "SNN" },
    { city: "Singapore", country: "Singapore", code: "SIN" },
    { city: "St. Croix", country: "U.S. Virgin Islands", code: "STX" },
    { city: "St. Lucia", country: "St. Lucia", code: "SLU" },
    { city: "St. Maarten", country: "Netherlands Antilles", code: "SXM" },
    { city: "St. Petersburg", country: "Russia", code: "LED" },
    { city: "St. Thomas", country: "U.S. Virgin Islands", code: "STT" },
    { city: "Stockholm", country: "Sweden", code: "ARN" },
    { city: "Stuttgart", country: "Germany", code: "STR" },
    { city: "Sydney", country: "Australia", code: "SYD" },
    { city: "Taipei", country: "Taiwan", code: "TPE" },
    { city: "Tel Aviv", country: "Israel", code: "TLV" },
    { city: "Tokyo (Narita)", country: "Japan", code: "NRT" },
    { city: "Tortola", country: "British Virgin Islands", code: "EIS" },
    { city: "Vienna", country: "Austria", code: "VIE" },
    { city: "Warsaw", country: "Poland", code: "WAW" },
    { city: "Xian Xianyang", country: "China", code: "XIY" },
    
    // United States A-B
    { city: "Abilene", country: "Texas", code: "ABI" },
    { city: "Akron/Canton", country: "Ohio", code: "CAK" },
    { city: "Albany", country: "New York", code: "ALB" },
    { city: "Albuquerque", country: "New Mexico", code: "ABQ" },
    { city: "Allentown", country: "Pennsylvania", code: "ABE" },
    { city: "Amarillo", country: "Texas", code: "AMA" },
    { city: "Anchorage", country: "Alaska", code: "ANC" },
    { city: "Appleton", country: "Wisconsin", code: "ATW" },
    { city: "Atlanta", country: "Georgia", code: "ATL" },
    { city: "Austin", country: "Texas", code: "AUS" },
    { city: "Bakersfield", country: "California", code: "BFL" },
    { city: "Baltimore", country: "Maryland", code: "BWI" },
    { city: "Bangor", country: "Maine", code: "BGR" },
    { city: "Baton Rouge", country: "Louisiana", code: "BTR" },
    { city: "Beaumont/Port Arthur", country: "Texas", code: "BPT" },
    { city: "Billings", country: "Montana", code: "BIL" },
    { city: "Birmingham", country: "Alabama", code: "BHM" },
    { city: "Bloomington", country: "Illinois", code: "BMI" },
    { city: "Boise", country: "Idaho", code: "BOI" },
    { city: "Boston", country: "Massachusetts", code: "BOS" },
    { city: "Buffalo", country: "New York", code: "BUF" },
    { city: "Burbank", country: "California", code: "BUR" },
    { city: "Burlington", country: "Vermont", code: "BTV" },
    
    // United States C-D
    { city: "Calgary", country: "Canada", code: "YYC" },
    { city: "Cedar Rapids", country: "Iowa", code: "CID" },
    { city: "Champaign/Urbana", country: "Illinois", code: "CMI" },
    { city: "Charleston", country: "South Carolina", code: "CHS" },
    { city: "Charlotte", country: "North Carolina", code: "CLT" },
    { city: "Chattanooga", country: "Tennessee", code: "CHA" },
    { city: "Chicago (Midway)", country: "Illinois", code: "MDW" },
    { city: "Chicago (O'Hare)", country: "Illinois", code: "ORD" },
    { city: "Cincinnati", country: "Ohio", code: "CVG" },
    { city: "Cleveland", country: "Ohio", code: "CLE" },
    { city: "Colorado Springs", country: "Colorado", code: "COS" },
    { city: "Columbia", country: "South Carolina", code: "CAE" },
    { city: "Columbus", country: "Ohio", code: "CMH" },
    { city: "Corpus Christi", country: "Texas", code: "CRP" },
    { city: "Dallas-Fort Worth", country: "Texas", code: "DFW" },
    { city: "Dayton", country: "Ohio", code: "DAY" },
    { city: "Denver", country: "Colorado", code: "DEN" },
    { city: "Des Moines", country: "Iowa", code: "DSM" },
    { city: "Detroit (City)", country: "Michigan", code: "DET" },
    { city: "Detroit (Metro)", country: "Michigan", code: "DTW" },
    { city: "Dubuque", country: "Iowa", code: "DBQ" },
    { city: "Durango", country: "Colorado", code: "DRO" },
    
    // United States L-N
    { city: "La Crosse", country: "Wisconsin", code: "LSE" },
    { city: "Lafayette", country: "Louisiana", code: "LFT" },
    { city: "Lake Charles", country: "Louisiana", code: "LCH" },
    { city: "Lansing", country: "Michigan", code: "LAN" },
    { city: "Las Vegas", country: "Nevada", code: "LAS" },
    { city: "Lexington", country: "Kentucky", code: "LEX" },
    { city: "Lihue", country: "Kauai, Hawaii", code: "LIH" },
    { city: "Lincoln", country: "Nebraska", code: "LNK" },
    { city: "Little Rock", country: "Arkansas", code: "LIT" },
    { city: "Long Beach", country: "California", code: "LGB" },
    { city: "Los Angeles", country: "California", code: "LAX" },
    { city: "Louisville", country: "Kentucky", code: "SDF" },
    { city: "Lubbock", country: "Texas", code: "LBB" },
    { city: "Madison", country: "Wisconsin", code: "MSN" },
    { city: "Manchester", country: "New Hampshire", code: "MHT" },
    { city: "Marquette", country: "Michigan", code: "MQT" },
    { city: "Maui", country: "Hawaii", code: "OGG" },
    { city: "McAllen", country: "Texas", code: "MFE" },
    { city: "Medford", country: "Oregon", code: "MFR" },
    { city: "Melbourne", country: "Florida", code: "MLB" },
    { city: "Memphis", country: "Tennessee", code: "MEM" },
    { city: "Miami", country: "Florida", code: "MIA" },
    { city: "Milwaukee", country: "Wisconsin", code: "MKE" },
    { city: "Minneapolis", country: "Minnesota", code: "MSP" },
    { city: "Mobile", country: "Alabama", code: "MOB" },
    { city: "Moline", country: "Illinois", code: "MLI" },
    { city: "Molokai", country: "Hawaii", code: "MKK" },
    { city: "Monterey", country: "California", code: "MRY" },
    { city: "Montgomery", country: "Alabama", code: "MGM" },
    { city: "Montreal", country: "Canada", code: "YUL" },
    { city: "Muskegon", country: "Michigan", code: "MKG" },
    { city: "Myrtle Beach", country: "South Carolina", code: "MYR" },
    { city: "Nashville", country: "Tennessee", code: "BNA" },
    { city: "New Haven", country: "Connecticut", code: "HVN" },
    { city: "New Orleans", country: "Louisiana", code: "MSY" },
    { city: "New York (Kennedy)", country: "New York", code: "JFK" },
    { city: "New York (La Guardia)", country: "New York", code: "LGA" },
    { city: "Newark", country: "New Jersey", code: "EWR" },
    { city: "Newburgh", country: "New York", code: "SWF" },
    { city: "Newport News", country: "Virginia", code: "PHF" },
    { city: "Norfolk", country: "Virginia", code: "ORF" },
    
    // United States O-P
    { city: "Oakland", country: "California", code: "OAK" },
    { city: "Odessa/Midland", country: "Texas", code: "MAF" },
    { city: "Oklahoma City", country: "Oklahoma", code: "OKC" },
    { city: "Omaha", country: "Nebraska", code: "OMA" },
    { city: "Ontario", country: "California", code: "ONT" },
    { city: "Orange County", country: "California", code: "SNA" },
    { city: "Orlando", country: "Florida", code: "MCO" },
    { city: "Ottawa", country: "Canada", code: "YOW" },
    { city: "Owensboro", country: "Kentucky", code: "OWB" },
    { city: "Oxnard", country: "California", code: "OXR" },
    { city: "Palm Springs", country: "California", code: "PSP" },
    { city: "Pasco", country: "Washington", code: "PSC" },
    { city: "Pensacola", country: "Florida", code: "PNS" },
    { city: "Peoria", country: "Illinois", code: "PIA" },
    { city: "Philadelphia", country: "Pennsylvania", code: "PHL" },
    { city: "Phoenix", country: "Arizona", code: "PHX" },
    { city: "Pittsburgh", country: "Pennsylvania", code: "PIT" },
    { city: "Portland", country: "Maine", code: "PWM" },
    { city: "Portland", country: "Oregon", code: "PDX" },
    { city: "Providence", country: "Rhode Island", code: "PVD" },
    
    // United States Q-S
    { city: "Quebec", country: "Canada", code: "YQB" },
    { city: "Raleigh-Durham", country: "North Carolina", code: "RDU" },
    { city: "Reno", country: "Nevada", code: "RNO" },
    { city: "Richmond", country: "Virginia", code: "RIC" },
    { city: "Roanoke", country: "Virginia", code: "ROA" },
    { city: "Rochester", country: "Minnesota", code: "RST" },
    { city: "Rochester", country: "New York", code: "ROC" },
    { city: "Sacramento", country: "California", code: "SMF" },
    { city: "Salt Lake City", country: "Utah", code: "SLC" },
    { city: "San Angelo", country: "Texas", code: "SJT" },
    { city: "San Antonio", country: "Texas", code: "SAT" },
    { city: "San Diego", country: "California", code: "SAN" },
    { city: "San Francisco", country: "California", code: "SFO" },
    { city: "San Jose", country: "California", code: "SJC" },
    { city: "Santa Barbara", country: "California", code: "SBA" },
    { city: "Sarasota", country: "Florida", code: "SRQ" },
    { city: "Savannah", country: "Georgia", code: "SAV" },
    { city: "Seattle", country: "Washington", code: "SEA" },
    { city: "Shreveport", country: "Louisiana", code: "SHV" },
    { city: "Sioux Falls", country: "South Dakota", code: "FSD" },
    { city: "South Bend", country: "Indiana", code: "SBN" },
    { city: "Spokane", country: "Washington", code: "GEG" },
    { city: "Springfield", country: "Illinois", code: "SPI" },
    { city: "Springfield", country: "Missouri", code: "SGF" },
    { city: "St. Louis", country: "Missouri", code: "STL" },
    { city: "Syracuse", country: "New York", code: "SYR" },
    
    // United States T-W
    { city: "Tallahassee", country: "Florida", code: "TLH" },
    { city: "Tampa", country: "Florida", code: "TPA" },
    { city: "Toledo", country: "Ohio", code: "TOL" },
    { city: "Toronto", country: "Canada", code: "YYZ" },
    { city: "Traverse City", country: "Michigan", code: "TVC" },
    { city: "Tri City", country: "Tennessee", code: "TRI" },
    { city: "Tucson", country: "Arizona", code: "TUS" },
    { city: "Tulsa", country: "Oklahoma", code: "TUL" },
    { city: "Vail", country: "Colorado", code: "EGE" },
    { city: "Vancouver", country: "Canada", code: "YVR" },
    { city: "Waco", country: "Texas", code: "ACT" },
    { city: "Washington (Dulles)", country: "D.C.", code: "IAD" },
    { city: "Washington (National)", country: "D.C.", code: "DCA" },
    { city: "Wausau/Stevens Point", country: "Wisconsin", code: "CWA" },
    { city: "West Palm Beach", country: "Florida", code: "PBI" },
    { city: "Westchester County", country: "New York", code: "HPN" },
    { city: "Wichita", country: "Kansas", code: "ICT" },
    { city: "Wilmington", country: "North Carolina", code: "ILM" },
    { city: "Wilkes Barre", country: "Pennsylvania", code: "AVP" }
  ];

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return airportData;
    }

    const searchLower = searchTerm.toLowerCase();
    return airportData.filter(airport =>
      airport.city.toLowerCase().includes(searchLower) ||
      airport.country.toLowerCase().includes(searchLower) ||
      airport.code.toLowerCase().includes(searchLower)
    );
  }, [searchTerm, airportData]);

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
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-18 md:pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Airport Code Finder
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Find airport codes for cities and airports worldwide
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
                    Search Airports
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Enter city, country, or airport code..."
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
                Showing {filteredData.length} airport{filteredData.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredData.map((airport, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 border border-gray-200"
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                        {airport.city}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3">
                        {airport.country}
                      </p>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800">
                        {airport.code}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => copyToClipboard(airport.code)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
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
                <h3 className="text-lg font-medium text-gray-900 mb-2">No airports found</h3>
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

export default AirportCodeFinder;
