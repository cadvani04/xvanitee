import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="xv-container">
        <div className="xv-content">
          <header className="xv-header">
            <img src="/ailogo.png" alt="Xvanitee Logo" className="xv-logo" />
            <h1>Xvanitee AI Agency</h1>
            <h2>Implement AI Into Your Business To Get to 10 Listing Appointments within 30 Days!</h2>
            <p className="xv-cta">👇 <span>Schedule A Call With Us To Learn How We Do It</span> 👇</p>
          </header>
          <section className="xv-calendly">
            <iframe
              src="https://calendly.com/advanicurran/30min"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a Call"
              style={{ minWidth: '320px', borderRadius: '16px', boxShadow: '0 4px 32px rgba(0,0,0,0.12)' }}
              allowFullScreen
            ></iframe>
          </section>
          <footer style={{ marginTop: '2rem', textAlign: 'center', width: '100%' }}>
            <Link to="/privacy" style={{ color: '#3030F1', fontSize: '14px', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
          </footer>
        </div>
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
