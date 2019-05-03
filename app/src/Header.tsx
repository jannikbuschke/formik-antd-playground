import * as React from "react";
import { Button } from "antd";
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
    <Button type="primary">
      <a
        href="https://www.github.com/jannikbuschke/formik-antd"
        target="_blank"
      >
        Github
      </a>
    </Button>
  </div>
);
