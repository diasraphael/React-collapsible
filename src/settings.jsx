/**
 * To showcase input and form usage
 *
 */

import React from "react";
import styled from "@emotion/styled";

import { Section, Dropdown } from "dnb-ui-lib/components";
import { settings } from "dnb-ui-lib/icons";
import { Link } from "dnb-ui-lib/elements";

export default function Settings() {
  return (
    <Example>
      <Wrapper className="dnb-core-style" spacing>
        <Dropdown
          more_menu="true"
          icon={settings}
          title="Choose an item"
          data={() => [
            <Link href="/">Go to this Link</Link>,
            "Or press on me",
            <CustomComponent />
          ]}
          on_change={({ value }) => {
            console.log("More menu:", value);
          }}
          right="small"
        />
      </Wrapper>
    </Example>
  );
}

const CustomComponent = () => (
  <CustomComponentInner
    onMouseDown={preventDefault}
    onTouchStart={preventDefault}
    onClick={e => {
      console.log("Do someting different");
    }}
  >
    Custom event handler
  </CustomComponentInner>
);
const CustomComponentInner = styled.span`
  display: block;
  margin: -1rem -2rem -1rem -1rem;
  padding: 1rem 2rem 1rem 1rem;
`;
const preventDefault = e => {
  e.stopPropagation();
  e.preventDefault();
};

const Example = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled(Section)`
  padding: 1rem;
`;
