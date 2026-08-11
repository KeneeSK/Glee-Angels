import React from 'react';
import { renderToString } from 'react-dom/server';
import { MobileApp } from './src/components/MobileApp';
try {
  console.log(renderToString(<MobileApp />));
} catch (e) {
  console.error("RENDER ERROR:", e);
}
