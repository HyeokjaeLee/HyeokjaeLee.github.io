import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";
const timeout = 600;
interface TransitionStatus {
  entering: string;
  entered: string;
  exiting: string;
  exited?: string;
  unmounted?: string;
}
const transitionStatusClass: TransitionStatus = {
  entering: "ing",
  entered: "in",
  exiting: "out",
};

export const Main = (props: any) => {
  const { children, location } = props;
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {(status) => {
          return (
            <main id="main">
              <div id="contentWrap" className={"slide " + transitionStatusClass[status]}>
                {children}
              </div>
            </main>
          );
        }}
      </ReactTransition>
    </TransitionGroup>
  );
};