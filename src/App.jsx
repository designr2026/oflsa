import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AirLogistics from './pages/AirLogistics';
import SeaFreight from './pages/SeaFreight';
import RoadFreight from './pages/RoadFreight';
import CustomsClearance from './pages/CustomsClearance';
import ProjectOversizeShipments from './pages/ProjectOversizeShipments';
import EventLogistics from './pages/EventLogistics';
import FreightInsurance from './pages/FreightInsurance';
import FoodStorage from './pages/FoodStorage';
import Warehousing from './pages/Warehousing';
import ConsolidationService from './pages/ConsolidationService';
import Contact from './pages/Contact';
import WhyChooseOFL from './pages/WhyChooseOFL';
import Tracker from './pages/Tracker';
import AirportCodeFinder from './pages/AirportCodeFinder';
import CountryCodeFinder from './pages/CountryCodeFinder';
import Incoterms from './pages/Incoterms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/air-logistics" element={<AirLogistics />} />
              <Route path="/sea-freight" element={<SeaFreight />} />
              <Route path="/road-freight" element={<RoadFreight />} />
              <Route path="/customs-clearance" element={<CustomsClearance />} />
              <Route path="/project-oversize-shipments" element={<ProjectOversizeShipments />} />
              <Route path="/event-logistics" element={<EventLogistics />} />
              <Route path="/freight-insurance" element={<FreightInsurance />} />
              <Route path="/food-storage" element={<FoodStorage />} />
              <Route path="/warehousing" element={<Warehousing />} />
              <Route path="/consolidation-service" element={<ConsolidationService />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/why-choose-ofl" element={<WhyChooseOFL />} />
              <Route path="/tracker" element={<Tracker />} />
              <Route path="/airport-code-finder" element={<AirportCodeFinder />} />
              <Route path="/country-code-finder" element={<CountryCodeFinder />} />
              <Route path="/incoterms" element={<Incoterms />} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
