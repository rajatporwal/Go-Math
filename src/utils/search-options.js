import DATA_STRUCTURE_CONFIG from "../config/dataStructureConfig";
import JAVASCRIPT_CONFIG from "../config/javaScriptConfig";
import QUESTIONS_CONFIG from "../config/questionsConfig";
import REACT_JS_CONFIG from "../config/reactJsConfig";

export const getSearchData = (appsConfig) => {
  const js = JAVASCRIPT_CONFIG.map((ele) => {
    return ele.children.map((child) => ({
      path: `${ele.pathname}#${child.id}`,
      title: child.keywords?.toLowerCase(),
    }));
  });

  const reactData = REACT_JS_CONFIG.map((ele) => {
    return ele.children.map((child) => ({
      title: child.keywords?.toLowerCase(),
      path: `${ele.pathname}#${child.id}`,
    }));
  });

  const questionData = QUESTIONS_CONFIG.map((ele) => ({
    title: ele?.keywords?.toLowerCase(),
    path: `/questions#${ele.id}`,
  }));

  const dataStructure = DATA_STRUCTURE_CONFIG.map((ele) => {
    return ele.children.map((child) => ({
      title: child.keywords?.toLowerCase(),
      path: `${ele.pathname}#${child.id}`,
    }));
  });
  
  const myApps = appsConfig?.map((ele) => {
    return ele.children.map((child) => ({
      title: child.keywords?.toLowerCase(),
      path: `${ele.pathname}#${child.id}`,
    }));
  });

  return [...js.flat(), ...reactData.flat(), ...questionData.flat(), ...dataStructure.flat(), ...myApps.flat()];
};
