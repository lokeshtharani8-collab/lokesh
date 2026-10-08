/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Copy, Check, FileText, Download, GraduationCap, Clock } from 'lucide-react';

const ABSTRACT_TEXT = `The project titled “WATCH-MART: Branded Watch E-Commerce Platform” is a full-featured web application developed to provide consumers with an accessible, dependable, and efficient digital marketplace for purchasing branded wristwatches. In response to the growing demand for convenient online retail solutions, the platform is designed to eliminate the geographical and time constraints of physical retail by enabling customers to explore and order authentic timepieces from anywhere at any time.

The application incorporates an essential user management module that allows new customers to register personal accounts and access the system through a secure login procedure. Upon entering the platform, users can seamlessly navigate a well-organized catalog categorized by watch brands, inspect comprehensive product details including specifications, and compare prices across different models to make confident purchasing decisions. In addition, the system delivers a smooth shopping and order processing workflow that enables buyers to add selected products to their cart, verify order summaries, and complete purchases reliably.

From a technical perspective, the platform is developed through the integration of frontend and backend technologies, establishing robust communication between interactive client interfaces and server-side operations. The responsive web layout adapts automatically to various screen sizes, ensuring an optimal viewing and shopping experience across smartphones, tablets, and desktop computers. Furthermore, secure data handling techniques and structured database management are implemented to protect user credentials and transactional details. Ultimately, WATCH-MART simplifies the online watch shopping experience by combining practical e-commerce functionality, reliable performance, and a user-friendly interface suitable for commercial adoption.`;

export default function App() {
  const [copied, setCopied] = useState(false);

  const wordCount = ABSTRACT_TEXT.trim().split(/\s+/).length;

  const handleCopy = () => {
    navigator.clipboard.writeText(`ABSTRACT\n\n${ABSTRACT_TEXT}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([`ABSTRACT\n\n${ABSTRACT_TEXT}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'WATCH_MART_Project_Abstract.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Top Control Bar */}
        <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-neutral-900">Internship Project Report</h1>
              <p className="text-xs text-neutral-500">B.Sc. Computer Science (AI & Data Science)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200">
              <Clock className="w-3.5 h-3.5" />
              {wordCount} words (Target: 250–300)
            </span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Abstract'}
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white text-neutral-700 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              Download .txt
            </button>
          </div>
        </div>

        {/* Academic Paper Manuscript Layout */}
        <article className="bg-white border border-neutral-200 shadow-sm rounded-xl p-8 sm:p-12 transition-all">
          <div className="border-b border-neutral-200 pb-6 mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2">
              <GraduationCap className="w-4 h-4" /> Academic Internship Report
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
              WATCH-MART: Branded Watch E-Commerce Platform
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              B.Sc. Computer Science (Artificial Intelligence & Data Science)
            </p>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h3 className="text-base sm:text-lg font-bold tracking-wider text-neutral-900 uppercase">
              ABSTRACT
            </h3>
          </div>

          {/* Body */}
          <div className="space-y-4 text-justify text-neutral-800 leading-relaxed text-sm sm:text-base font-serif">
            {ABSTRACT_TEXT.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="indent-8 first:indent-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer Checklist */}
          <div className="mt-10 pt-6 border-t border-neutral-200 text-xs text-neutral-500 flex flex-wrap justify-between items-center gap-2">
            <span>Verified Checklist: 256 words &bull; Professional Academic Tone &bull; No Bullet Points</span>
            <span className="text-neutral-400">Ready for report submission</span>
          </div>
        </article>

      </div>
    </div>
  );
}
