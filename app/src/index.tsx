import * as React from "react"
import { render } from "react-dom"
import {
  Checkbox,
  Input,
  InputNumber,
  Switch,
  DatePicker,
  TimePicker,
  Radio,
  FormikDebug,
  FormItem,
  ResetButton,
  SubmitButton,
  Select,
  AutoComplete,
  Rate,
  Slider,
  Cascader,
  TreeSelect,
  Transfer,
  Form,
} from "formik-antd"
import { Formik } from "formik"
import { Button, notification, Icon, Tabs } from "antd"
import { Header } from "./Header"
import "./index.css"
import { generatePassword } from "./utils"
import { SampleForm } from "./SampleForm"
import {
  BrowserRouter as Router,
  Route,
  Switch as BrowserSwitch,
} from "react-router-dom"
import { useParams, useHistory } from "react-router"

function App() {
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "sample@email.com",
        address: { city: "hamburg" },
        password: generatePassword(),
        index: 5,
        dollars: 1,
        newsletter: true,
        consent: false,
        description: "lorem ipsum\ndolor sit amet",
        time: new Date().toISOString(),
        date: new Date().toISOString(),
        city: 3,
        radioGroup: "1",
        todos: ["2", "3"],
        slider1: 30,
        slider2: [20, 60],
        select1: 2,
      }}
      onSubmit={(values, actions) => {
        notification.open({
          duration: 0,
          message: <pre>{JSON.stringify(values, null, 2)}</pre>,
        })
        actions.setSubmitting(false)
      }}
      validate={(values) => {
        return !values.userName
          ? {
              userName: "required",
            }
          : undefined
      }}
      render={() => (
        <Form>
          <div className="container">
            <div className="component-container">
              <Input name="email" />
              <FormItem name="userName">
                <Input name="userName" />
              </FormItem>
              <Input addonBefore="city" name="address.city" />
              <Input.Password name="password" />
              <Input.TextArea name="description" />
              <AutoComplete
                name="auto"
                placeholder="Autocomplete"
                // defaultValue="1"
                // dataSource={["Berlin", "Amsterdam", "Paris"]}
                dataSource={[
                  { value: "1", text: "Berlin" },
                  { value: "2", text: "Amsterdam" },
                  { value: "3", text: "Paris" },
                ]}
                showArrow={true}
                allowClear={true}
              />
              <Rate name="rate" allowHalf={true} allowClear={true} />
              <Rate
                name="rate"
                allowHalf={true}
                character={<Icon type="heart" />}
                style={{ color: "red" }}
                allowClear={true}
              />
              <Slider name="slider1" />
              <Slider name="slider2" range={true} />
              <InputNumber name="index" min={0} />
              <InputNumber
                name="dollars"
                formatter={(value: any) => `$ ${value}`}
              />
              <Checkbox name="newsletter">Newsletter</Checkbox>
              <div>
                <Switch name="consent" />
              </div>
              <TimePicker name="time" />
              <DatePicker name="date" showTime={true} />
              <DatePicker.RangePicker
                name="range"
                placeholder={["Rangepicker", "Rangepicker"]}
              />
              <DatePicker.WeekPicker name="week" placeholder="WeekPicker" />
              <DatePicker.MonthPicker name="month" placeholder="MonthPicker" />
              <Radio.Group
                name="radioGroup"
                options={[
                  { label: "item 1", value: "1" },
                  { label: "item 2", value: 2 },
                  { label: "item 3", value: "3" },
                  { label: <span>foo</span>, value: "4" },
                ]}
              />
              <Radio.Group name="city" size="default">
                <Radio.Button value={1}>Hamburg</Radio.Button>
                <Radio.Button value={2}>Amsterdam</Radio.Button>
                <Radio.Button value={3}>London</Radio.Button>
              </Radio.Group>
              <Checkbox.Group
                name="todos"
                options={[
                  { label: "item 1", value: "1" },
                  { label: "item 2", value: "2" },
                  { label: "item 3", value: "3" },
                ]}
              />
              <Select
                name="select2"
                style={{ width: "100%" }}
                placeholder="Select multiple"
                mode="multiple"
              >
                <Select.Option value={1}>item 1</Select.Option>
                <Select.Option value={2}>item 2</Select.Option>
                <Select.Option value={3}>item 3</Select.Option>
              </Select>
              <Select
                name="select3"
                style={{ width: "100%" }}
                placeholder="Select with groups"
              >
                <Select.OptGroup label="group 1">
                  <Select.Option value={1}>item 1</Select.Option>
                  <Select.Option value={2}>item 2</Select.Option>
                  <Select.Option value={3}>item 3</Select.Option>
                </Select.OptGroup>
                <Select.OptGroup label="group 2">
                  <Select.Option value={4}>item 4</Select.Option>
                  <Select.Option value={5}>item 5</Select.Option>
                  <Select.Option value={6}>item 6</Select.Option>
                </Select.OptGroup>
              </Select>
              <Cascader
                options={[
                  {
                    value: "zhejiang",
                    label: "Zhejiang",
                    children: [
                      {
                        value: "hangzhou",
                        label: "Hangzhou",
                        children: [
                          {
                            value: "xihu",
                            label: "West Lake",
                          },
                        ],
                      },
                    ],
                  },
                ]}
                name="cascader"
                placeholder="Cascader"
              />
              <TreeSelect name="treeselect" placeholder="Treeselect">
                <TreeSelect.TreeNode
                  value="parent 1"
                  title="parent 1"
                  key="0-1"
                >
                  <TreeSelect.TreeNode
                    value="parent 1-0"
                    title="parent 1-0"
                    key="0-1-1"
                  >
                    <TreeSelect.TreeNode
                      value="leaf1"
                      title="my leaf"
                      key="random"
                    />
                    <TreeSelect.TreeNode
                      value="leaf2"
                      title="your leaf"
                      key="random1"
                    />
                  </TreeSelect.TreeNode>
                  <TreeSelect.TreeNode
                    value="parent 1-1"
                    title="parent 1-1"
                    key="random2"
                  >
                    <TreeSelect.TreeNode
                      value="sss"
                      title={<b style={{ color: "#08c" }}>sss</b>}
                      key="random3"
                    />
                  </TreeSelect.TreeNode>
                </TreeSelect.TreeNode>
              </TreeSelect>
              <Transfer
                name="transfer"
                dataSource={[
                  { key: "1", title: "item 1" },
                  { key: "2", title: "item 2" },
                  { key: "3", title: "item 3" },
                ]}
                render={(item: any) => item.title}
              />
              <Button.Group size="large">
                <ResetButton>Reset</ResetButton>
                <SubmitButton type="primary" disabled={false}>
                  Submit
                </SubmitButton>
              </Button.Group>
            </div>

            <FormikDebug style={{ maxWidth: 400 }} />
          </div>
        </Form>
      )}
    />
  )
}

function Root() {
  const { tab } = useParams<{ tab: string | undefined }>()
  const history = useHistory()
  return (
    <Tabs
      animated={false}
      onChange={(key) => {
        history.push(key)
      }}
      activeKey={tab || "/"}
    >
      <Tabs.TabPane tab="Overview" key={"/"}>
        <Header />
        <App />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Sample Form" key={"form"}>
        <SampleForm />
      </Tabs.TabPane>
    </Tabs>
  )
}

const rootElement = document.getElementById("root")
render(
  <Router>
    <BrowserSwitch>
      <Route path="/" exact={true} component={Root} />
      <Route path="/:tab" component={Root} />
    </BrowserSwitch>
  </Router>,
  rootElement,
)
