import React, { useState, useEffect } from 'react';
import { Type, Moon, Sun, Accessibility } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AccessibilityTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    if (highContrast) {
      document.documentElement.classList.add('grayscale', 'contrast-125');
    } else {
      document.documentElement.classList.remove('grayscale', 'contrast-125');
    }
  }, [fontSize, highContrast]);

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-0 z-[60]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-univ-blue text-white p-3 rounded-r-lg shadow-lg hover:bg-univ-gold hover:text-univ-blue transition-all"
        title="Accessibility Tools"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="absolute top-0 left-full ml-2 w-48 bg-white shadow-2xl rounded-lg p-4 border border-gray-100"
          >
            <h3 className="font-bold text-sm mb-4 border-b pb-2">Accessibility</h3>
            
            <div className="space-y-6">
              {/* Font Size */}
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-widest block mb-2">Text Size</label>
                <div className="flex items-center justify-between gap-2">
                  <button onClick={() => setFontSize(Math.max(80, fontSize - 10))} className="p-1 hover:bg-gray-100 rounded">
                    <Type className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold">{fontSize}%</span>
                  <button onClick={() => setFontSize(Math.min(150, fontSize + 10))} className="p-1 hover:bg-gray-100 rounded">
                    <Type className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Contrast */}
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-widest block mb-2">Contrast</label>
                <button 
                  onClick={() => setHighContrast(!highContrast)}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded text-sm font-bold transition-colors ${
                    highContrast ? 'bg-univ-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {highContrast ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {highContrast ? 'Normal' : 'High Contrast'}
                </button>
              </div>

              <button 
                onClick={() => { setFontSize(100); setHighContrast(false); }}
                className="w-full text-xs text-univ-blue font-bold hover:underline"
              >
                Reset to Default
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
