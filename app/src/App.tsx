import * as React from "react";
import { render } from "react-dom";
import {
  CheckboxField,
  InputField,
  InputPasswordField,
  InputNumberField,
  SwitchField,
  TextAreaField,
  DatePickerField,
  DateTimeAsStringField,
  RadioGroupField,
  ArrayEditor,
  FormikDebug,
  FormItem,
  ResetButton,
  SubmitButton,
  CheckboxGroupField
} from "@jbuschke/formik-antd";
import { Formik } from "formik";
import { Divider, Button } from "antd";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
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
        <h2>Antd components that are connected to Formik</h2>
      </div>
      <Formik
        initialValues={{
          userName: "",
          email: "sample@email.com",
          website: "github.com/jannikbuschke/formik-antd",
          password: "hidden",
          index: 5,
          dollars: 1,
          applyForNewsletter: false,
          description: "lorem ipsum",
          date: null
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validate={values => {
          return !values.userName
            ? {
                userName: "required"
              }
            : undefined;
        }}
      >
        <div className="split">
          <div style={{ display: "grid", gridGap: 5 }}>
            <h3>Buttons</h3>
            <Button.Group>
              <ResetButton>Reset</ResetButton>
              <SubmitButton>Submit (when dirty & valid)</SubmitButton>
              <SubmitButton disabled={false}>Submit</SubmitButton>
            </Button.Group>
            <h3>Simple fields</h3>
            <div className="field-container">
              <span>Input</span>
              <InputField name="email" />
              <span>with props</span>
              <InputField name="website" addonBefore="https://" />
              <span>PasswordInput</span>
              <InputPasswordField name="password" />
              <span>TextArea</span>
              <TextAreaField name="description" />
              <span>InputNumber</span>
              <InputNumberField name="index" />
              <span>with formatter</span>
              <InputNumberField
                name="dollars"
                formatter={value => `$ ${value}`}
              />
              <span>Checkbox</span>
              <div>
                <CheckboxField name="applyForNewsletter" />
              </div>
              <span>Switch</span>
              <div>
                <SwitchField name="applyForNewsletter" />
              </div>
              <span>DatePicker</span>
              <DatePickerField name="date" />
              <h3 style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>Groups</h3>
              <span>RadioGroup</span>
              <RadioGroupField
                name="radioGroup"
                dataSource={[
                  { label: "Val 1", value: "val1" },
                  { label: "5", value: 5 }
                ]}
              />
              <span>CheckboxGroup</span>
              <CheckboxGroupField
                name="checkboxGroup"
                options={[
                  { label: "item 1", value: "1" },
                  { label: "item 2", value: "2" }
                ]}
              />
            </div>
            <div>
              <h3 style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>Lists</h3>
              <FormItem name="items[0]name">
                <InputField name="items[0]name" />
              </FormItem>
              <h3 style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                Validation
              </h3>
              <FormItem name="userName">
                <InputField name="userName" />
              </FormItem>
            </div>
          </div>
          <Divider type="vertical" style={{ height: "100%" }} />
          <div>
            <FormikDebug />
          </div>
        </div>
      </Formik>
    </div>
  );
}

export default App;
