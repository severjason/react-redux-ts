import React, { ComponentType } from 'react';
import { Subtract } from 'utility-types';

export type WithSomething = {
  someProp: boolean;
};

const withSomething = () => <P extends WithSomething>(WrappedComponent: ComponentType<P>) => {
  return ((props: Subtract<P, WithSomething>) => {

    // here you can set any props/actions for a HOC
    const someProp = false;

    return (
      <WrappedComponent
        someProp={someProp}
        {...props as P}
      />
    )
  });
};

export default withSomething;
