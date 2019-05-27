import React from 'react';
import ShoppingCart from "./context_providers/ShoppingCart";

const ProviderComposer = ({ contexts, children }) => {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
};

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[<ShoppingCart/>]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
