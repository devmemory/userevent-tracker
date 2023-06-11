export const debugConsole = (show = false) => {
  if(!show){
    return () => {}
  }

  return (...args: any[]) => {
    console.log(...args);
  };
};
