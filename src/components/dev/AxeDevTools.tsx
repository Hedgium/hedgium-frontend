'use client';

import { useEffect } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * Runs axe-core checks in the browser during development only.
 */
export default function AxeDevTools() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;
    let cancelled = false;
    void import('@axe-core/react').then((axeModule) => {
      if (cancelled) return;
      const runAxe = axeModule.default;
      runAxe(React, ReactDOM, 1000);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
