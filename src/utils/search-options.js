import DATA_STRUCTURE_CONFIG from "../config/dataStructureConfig";
import JAVASCRIPT_CONFIG from "../config/javaScriptConfig";
import QUESTIONS_CONFIG from "../config/questionsConfig";
import REACT_JS_CONFIG from "../config/reactJsConfig";
import REACT_NATIVE_CONFIG from "../config/reactNativeConfig";
import NEXT_JS_CONFIG from "../config/nextJsConfig";
import REGEX_CONFIG from "../config/regexConfig";
import TYPESCRIPT_CONFIG from "../config/typescriptConfig";
import SYSTEM_DESIGN_CONFIG from "../config/systemDesignConfig";
import CSS_CONFIG from "../config/cssConfig";
import HTML_CONFIG from "../config/htmlConfig";
import NODE_JS_CONFIG from "../config/nodeJsConfig";

const serachOptions = (config) => {
  return (
    config.map((ele) => {
      return ele.children.map((child) => ({
        path: `${ele.pathname}#${child.id}`,
        title: child.keywords?.toLowerCase(),
      }));
    })
  )
}

export const getSearchData = (appsConfig) => {
  const questionData = QUESTIONS_CONFIG.map((ele) => ({
    title: ele?.keywords?.toLowerCase(),
    path: `/questions#${ele.id}`,
  }));


  return [...serachOptions(JAVASCRIPT_CONFIG).flat(),
    ...serachOptions(REACT_JS_CONFIG).flat(),
    ...serachOptions(DATA_STRUCTURE_CONFIG).flat(),
    ...serachOptions(REACT_NATIVE_CONFIG).flat(),
    ...serachOptions(REGEX_CONFIG).flat(),
    ...serachOptions(NEXT_JS_CONFIG).flat(),
    ...serachOptions(TYPESCRIPT_CONFIG).flat(),
    ...serachOptions(SYSTEM_DESIGN_CONFIG).flat(),
    ...serachOptions(REGEX_CONFIG).flat(),
    ...serachOptions(CSS_CONFIG).flat(),
    ...serachOptions(HTML_CONFIG).flat(),
    ...serachOptions(NODE_JS_CONFIG).flat(),
    ...serachOptions(appsConfig).flat(),
    ...questionData.flat()];
};
