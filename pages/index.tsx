import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Form, MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Formik, Field } from "formik";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Trade History", "1", <DesktopOutlined />),
  getItem("Fund", "2", <PieChartOutlined />),
  getItem("Customer", "3", <TeamOutlined />),
];

interface CustomerValues {
  name: string;
}

const Home: NextPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const initialValues: CustomerValues = { name: "" };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <span
            style={{
              color: "white",
              fontSize: 24,
              padding: 50,
            }}
          >
            Securo
          </span>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Customer</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  console.log({ values, actions });
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }}
              >
                <Form>
                  <label htmlFor="name">Customer's Name</label>
                  <Field id="name" name="name" placeholder="Name" />
                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Securo ©2022 Created by Harixth
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
