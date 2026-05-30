import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { User } from 'lucide-react';
import { motion } from 'motion/react';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import ForgotPassword from '../components/auth/ForgotPassword';

type AuthMode = 'login' | 'register' | 'forgot';

export default function Auth() {
  const { authUser, login, register, logout, showToast } = useShop();
  const navigate = useNavigate();

  // Mode switcher
  const [mode, setMode] = useState<AuthMode>('login');

  // Input fields
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      if (!email || !password) return;
      try {
        const success = await login(email, password);
        if (success) {
          navigate('/collection');
        }
      } catch (err: any) {
        showToast(err.message || 'Login failed', 'error');
      }
    } else if (mode === 'register') {
      if (!name || !email || !password) return;
      try {
        const success = await register(name, email, password);
        if (success) {
          navigate('/collection');
        }
      } catch (err: any) {
        showToast(err.message || 'Registration failed', 'error');
      }
    } else {
      // Forgot password handling
      if (!email) return;
      showToast(`A private password restoration token has been sent to ${email}`, 'success');
      setMode('login');
    }
  };

  // Logged-in Profile View Card
  if (authUser) {
    return (
      <div className="bg-[#FAF7F2] min-h-[70vh] flex items-center justify-center p-6 text-[#111] select-none" id="auth-view-active">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-[#D4AF37]/35 w-full max-w-md p-8 text-center rounded-lg shadow-2xl font-sans"
        >
          <div className="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full mx-auto flex items-center justify-center border border-[#D4AF37]/50 mb-4">
            <User className="w-8 h-8 font-light" />
          </div>

          <h1 className="text-xl md:text-2xl font-serif text-gray-900 tracking-wide font-normal uppercase mb-1">
            Noble Client Profile
          </h1>
          <p className="text-[10px] text-gray-400 font-sans tracking-widest uppercase mb-6 leading-none">
            Welcome to your Private Showroom Curation Account
          </p>

          <div className="bg-[#FAF7F2] p-4 rounded-lg border border-gray-150 text-left text-xs font-sans uppercase mb-6 flex flex-col gap-2 tracking-wide text-gray-700">
            <p className="flex justify-between"><span>Registrant designation:</span> <strong className="text-black">{authUser.name}</strong></p>
            <p className="flex justify-between"><span>Notification destination:</span> <strong className="text-black">{authUser.email}</strong></p>
            <p className="flex justify-between"><span>Tier association:</span> <strong className="text-[#D4AF37] font-bold">VIP COUTURE CLIENT</strong></p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/collection')}
              className="w-full bg-black hover:bg-[#D4AF37] hover:text-black py-3 px-6 text-white text-xs font-sans uppercase tracking-[0.2em] font-extrabold transition-colors shadow-md rounded-none cursor-pointer text-center"
            >
              Browse Active Masterpieces
            </button>
            <button
              onClick={logout}
              className="w-full border border-red-200 text-red-600 hover:bg-red-50 py-3 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all cursor-pointer text-center"
            >
              Exit Private Fitting Session
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFAF8] min-h-[75vh] flex items-center justify-center p-6 text-gray-850" id="auth-view">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-gray-100 p-8 md:p-10 rounded-lg shadow-2xl w-full max-w-md select-none relative overflow-hidden"
      >


        {/* Form header branding */}
        <div className="text-center mb-8 select-none">
          <span className="text-xs font-serif tracking-[0.3em] text-[#C5A880] uppercase">DEMO ATELIER</span>

          <h2 className="text-xl md:text-2xl font-serif text-[#0D0D0D] tracking-wide font-normal uppercase mt-1">
            {mode === 'login' && 'Client Log-In'}
            {mode === 'register' && 'Bespoke Registry'}
            {mode === 'forgot' && 'Credential Restore'}
          </h2>
          <p className="text-[10px] text-gray-400 font-sans uppercase tracking-widest mt-1">
            {mode === 'login' && 'Enter your private credentials to access orders'}
            {mode === 'register' && 'Create a lifestyle profile for custom hemming logs'}
            {mode === 'forgot' && 'We will dispatch secure recovery parameters'}
          </p>
        </div>

        {/* Action Forms */}
        {mode === 'login' && (
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleSubmit}
            onSwitchToForgot={() => setMode('forgot')}
          />
        )}

        {mode === 'register' && (
          <RegisterForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleSubmit}
          />
        )}

        {mode === 'forgot' && (
          <ForgotPassword
            email={email}
            setEmail={setEmail}
            onSubmit={handleSubmit}
          />
        )}

        {/* Footer switcher triggers */}
        <div className="mt-8 border-t border-gray-100 pt-5 text-center text-[10px] font-sans uppercase tracking-widest text-gray-400">
          {mode === 'login' && (
            <p>
              New Patron to DEMO?{' '}
              <button
                onClick={() => setMode('register')}
                className="text-[#D4AF37] font-bold hover:underline cursor-pointer"
              >
                Create Account Registry
              </button>
            </p>
          )}
          {mode === 'register' && (
            <p>
              Already a Registered Client?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-[#D4AF37] font-bold hover:underline cursor-pointer"
              >
                Log-In Fitting Account
              </button>
            </p>
          )}
          {mode === 'forgot' && (
            <button
              onClick={() => setMode('login')}
              className="text-gray-600 font-bold hover:text-black hover:underline cursor-pointer"
            >
              Back to Client Sign-In
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
