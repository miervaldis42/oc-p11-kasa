// Imports
import convertObjectKeyValueIntoStringType from "utils/objectPartAsString";

/*
  List of existing paths to navigate in the website
  Useful for VS Code suggestions / autocompletion
 */
const pathList = convertObjectKeyValueIntoStringType({
  home: "/",
  accommodation: "/accommodation",
  about: "/about",
  404: "*",
});

export default pathList;
