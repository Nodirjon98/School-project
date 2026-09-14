/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { LMSDataProvider } from './contexts/LMSDataContext';
import { AppRouter } from './router';

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AuthProvider>
          <LMSDataProvider>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
          </LMSDataProvider>
        </AuthProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

