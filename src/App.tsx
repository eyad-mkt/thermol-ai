/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Fuel,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import ChatInterface from './components/ChatInterface';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <Fuel className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                المساعد التقني الذكي لمنتج ثيرمول
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-gray-500">تقنية الوقود الذكي - سوريا</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-black text-gray-900 mb-3"
            >
              كيف يمكنني مساعدتك اليوم؟
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              أنا هنا للإجابة على استفساراتك حول منتجات ثيرمول، تشخيص مشاكل محركك، واقتراح الكورس المناسب لك.
            </motion.p>
          </div>
          
          <ChatInterface />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white">
                <Fuel className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-gray-900">ثيرمول سوريا</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ثيرمول سوريا. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="https://wa.me/963938266347" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                واتساب
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/963938266347" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
        title="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
          تواصل
        </span>
      </a>
    </div>
  );
}

