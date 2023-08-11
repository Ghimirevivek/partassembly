import React, { useState } from 'react';
import ProductDescriptionPage from './pages/ProductDescriptionPage';
import PartSelectionPage from './pages/PartSelectionPage';
import AssemblyPage from './pages/AssemblyPage';
import { FinalProductView } from './pages/FinalProductView';
import Navbar from './components/Navbar';
const partsList = [
  {
    id: 1,
    name: 'Engine',
    imageUrl:
      'https://www.theengineerspost.com/wp-content/uploads/2022/08/Motorcycle-Engine-300x300.jpg?ezimgfmt=ng:webp/ngcb19',
  },
  {
    id: 2,
    name: 'Frame',
    imageUrl:
      'https://www.theengineerspost.com/wp-content/uploads/2022/08/Motorcycle-frame-300x196.jpg?ezimgfmt=ng:webp/ngcb19',
  },
  {
    id: 3,
    name: 'Battery',
    imageUrl:
      'https://www.theengineerspost.com/wp-content/uploads/2022/08/Battery-300x280.jpg?ezimgfmt=ng:webp/ngcb19',
  },
];

const App = () => {
  const [page, setPage] = useState(1);

  const startButton = () => {
    setPage(2);
  };
  const partsSelectButton = () => {
    setPage(3);
  };
  const assemblyPageButton = () => {
    setPage(4);
  };

  switch (page) {
    case 1:
      return <ProductDescriptionPage onStartButton={startButton} />;
    case 2:
      return (
        <>
          <Navbar />
          <PartSelectionPage
            partsList={partsList}
            onPartSelect={partsSelectButton}
            setPage={setPage}
          />
        </>
      );
    case 3:
      return (
        <>
          <Navbar />
          <AssemblyPage onAssembly={assemblyPageButton} setPage={setPage} />
        </>
      );
    case 4:
      return (
        <>
          <Navbar />
          <FinalProductView setPage={setPage} />
        </>
      );
    default:
      return <div>Invalid page.</div>;
  }
};

export default App;
