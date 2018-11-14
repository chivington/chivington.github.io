// // import components
// Header = require("Header");
// Menu = require("Menu");
// Router = require("Router");
//
// // define app component
// function Shell(props, dispatch, children) {
//   const styles = {
//     app: `
//       display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch;
//       position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; margin: auto; background-color: #cdc;
//     `
//   }
//
//   const store = props.store;
//   const menuState = store.getState().menuState;
//
//   return React.createElement("div", {style: styles.app}, [
//     null//Header(null, store.dispatch), Menu({menuState}, store.dispatch), Router(null, store.dispatch)
//   ]);
// }