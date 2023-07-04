// Imports
import convertObjectKeyValueIntoStringType from "utils/objectPartAsString";

// Project Icon Library
const library = convertObjectKeyValueIntoStringType({
  copyright: "fa-regular fa-copyright",
  caretUp: "fa-solid fa-angle-up",
  caretDown: "fa-solid fa-angle-down",
});

// Types
type IconType = {
  name: string;
  styling: string;
};

/**
 * @description Icon Component based on Font Awesome
 *
 * @param {string} name Custom name to match the one(s) in the custom icon library
 * @param {string} styling Any CSS styles or classes to style the icon
 * @returns {HTMLElement} Icon HTML tag
 */
function Icon({ name, styling }: IconType) {
  return <i className={`${name} ${styling}`}></i>;
}

export { library, Icon };
