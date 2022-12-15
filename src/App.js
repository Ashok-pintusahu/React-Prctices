import React from 'react';
import CssInJs from '../src/01.addingCss/1.1.cssInJs';
import UsingImport from './02.addingImages/2.1.usingImport';
import UsingRequire from './02.addingImages/2.2.usingRequire';
import DynamicImages from './02.addingImages/2.3.dynamicImages';
import Card from './02.addingImages/2.4.card';
import ClassComponents from './03.creatingComponents/3.1.classComponents';
// import Functional from './03.creatingComponents/3.2.funcationalComponents';
import {FunctionalComponents} from './03.creatingComponents/3.2.funcationalComponents';
import StateClass from './04.state/4.1.stateinClasscomponent';
import PropsComponent from './05.props/5.1.introtoprops';
import InlineCss from '../src/01.addingCss/1.2.inlineCss';
import Mounting from './11.lifeCyclemethod/11.1.mounting';


const App = () => {
  return (
    <div>
      {/* <CssInJs/> */}
      {/* <UsingImport/> */}
      {/* <UsingRequire/> */}
      {/* <DynamicImages/> */}
      {/* <Card/> */}
      {/* <ClassComponents/> */}
      {/* <FunctionalComponents/> */}
      {/* <StateClass Name="Mantu bhai"/> */}
      {/* <StateClass Name="Mantu bhai">
        <h1>I love you</h1>
      </StateClass> */}
      {/* <PropsComponent/> */}
      {/* <InlineCss/> */}
      <Mounting/>
    </div>
  );
}

export default App;
