import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [isSm, setIsSm] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const [isXl, setIsXl] = useState(false);
  const [is2Xl, setIs2Xl] = useState(false);

  useEffect(() => {
    const smQuery = window.matchMedia('(min-width: 640px)');
    const mdQuery = window.matchMedia('(min-width: 768px)');
    const lgQuery = window.matchMedia('(min-width: 1024px)');
    const xlQuery = window.matchMedia('(min-width: 1280px)');
    const doubleXlQuery = window.matchMedia('(min-width: 1536px)');

    const handleResize = () => {
      setIsSm(smQuery.matches);
      setIsMd(mdQuery.matches);
      setIsLg(lgQuery.matches);
      setIsXl(xlQuery.matches);
      setIs2Xl(doubleXlQuery.matches)
    };

    // Initialize the values
    handleResize();

    // Add event listeners
    smQuery.addEventListener('change', handleResize);
    mdQuery.addEventListener('change', handleResize);
    lgQuery.addEventListener('change', handleResize);
    xlQuery.addEventListener('change', handleResize);
    doubleXlQuery.addEventListener('change', handleResize);

    // Clean up event listeners
    return () => {
      smQuery.removeEventListener('change', handleResize);
      mdQuery.removeEventListener('change', handleResize);
      lgQuery.removeEventListener('change', handleResize);
      xlQuery.removeEventListener('change', handleResize);
      doubleXlQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return { isSm, isMd, isLg, isXl, is2Xl };
};

export default useBreakpoint;