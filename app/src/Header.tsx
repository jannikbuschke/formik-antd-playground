import * as React from "react";
import { Button, Icon } from "antd";
export const Header = () => (
  <div className="Header">
    <h1>
      <a href="https://ant.design" target="_blank">
        Formik
      </a>{" "}
      +{" "}
      <a href="https://github.com/jaredpalmer/formik" target="_blank">
        Ant Design
      </a>
    </h1>
    <h2>Simple declarative bindings</h2>
    <Button.Group>
      <Button type="primary">
        <a
          href="https://www.github.com/jannikbuschke/formik-antd"
          target="_blank"
        >
          Github <Icon type="github" />
        </a>
      </Button>
      <Button>
        <a
          href="https://www.twitter.com/jannikbuschke"
          target="_blank"
        >
          Twitter <Icon type="twitter" />
        </a>
      </Button>
    </Button.Group>
  </div>
);
