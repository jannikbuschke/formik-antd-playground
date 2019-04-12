import * as React from "react";
import { render } from "react-dom";
import {
  Checkbox,
  Input,
  InputNumber,
  Switch,
  DatePicker,
  Radio,
  FormikDebug,
  FormItem,
  ResetButton,
  SubmitButton,
  Select
} from "@jbuschke/formik-antd";
import { Formik } from "formik";
import { Button, notification } from "antd";
import "./App.css";
import "antd/dist/antd.css";
import { Header } from "./Header";

function App() {
  return (
    <div>
      <Header />
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
          notification.open({
            duration: 0,
            message: <pre>{JSON.stringify(values, null, 2)}</pre>
          });
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
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: 800,
            gridTemplateColumns: "1fr 1fr"
          }}
        >
          <div
            style={{
              display: "grid",
              gridGap: 5,
              margin: 5,
              height: "100%"
            }}
          >
            <Button.Group>
              <ResetButton>Reset</ResetButton>
              <SubmitButton>Submit (when dirty & valid)</SubmitButton>
              <SubmitButton disabled={false}>Submit</SubmitButton>
            </Button.Group>
            <Input name="email" />
            <FormItem name="userName">
              <Input name="userName" />
            </FormItem>
            <Input name="items[0]name" />
            <Input name="website" addonBefore="https://" />
            <Input.Password name="password" />
            <Input.TextArea name="description" />
            <InputNumber name="index" />
            <InputNumber
              name="dollars"
              formatter={(value: any) => `$ ${value}`}
            />
            <Checkbox name="applyForNewsletter">Newsletter</Checkbox>
            <div>
              <Switch name="applyForNewsletter" />
            </div>
            <DatePicker name="date" />
            <Radio.Group
              name="radioGroup"
              options={[
                { label: "item 1", value: "1" },
                { label: "item 2", value: 2 },
                { label: "item 3", value: "3" }
              ]}
            />
            <Radio.Group name="radioGroup" defaultValue="a" size="small">
              <Radio.Button value="1">Hangzhou</Radio.Button>
              <Radio.Button value={2}>Shanghai</Radio.Button>
              <Radio.Button value="3">Beijing</Radio.Button>
            </Radio.Group>
            <Checkbox.Group
              name="checkboxGroup"
              options={[
                { label: "item 1", value: "1" },
                { label: "item 2", value: "2" },
                { label: "item 3", value: "3" }
              ]}
            />
            <Select name="select" style={{ width: "100%" }}>
              {Select.renderOptions([
                { label: "displayed value", value: 2 },
                {
                  label: <h1>hello world</h1>,
                  value: "123"
                },
                {
                  disabled: true,
                  value: "123",
                  label: "child"
                }
              ])}
            </Select>
          </div>

          <FormikDebug style={{ maxWidth: 400 }} />
        </div>
      </Formik>
    </div>
  );
}

export default App;
