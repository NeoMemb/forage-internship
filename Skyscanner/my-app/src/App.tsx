import React from 'react';
import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import './App.scss';

// const getClassName = cssModules(STYLES);

const App = () => (
  <div className={`App`}>
    <header className={`App__header`}>
      <div className={`App__header-inner`}>
        <BpkText tagName="h1" textStyle="xxl" className={`App__heading`}>Welcome to React + Backpack</BpkText>
      </div>
    </header>
    <main className={`App__main`}>
      <BpkText tagName="p" className={`App__text`}>
        To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
      </BpkText>
      <BpkButton onClick={() => alert('It works!')}>Click me</BpkButton>
    </main>
  </div>
);

export default App;
