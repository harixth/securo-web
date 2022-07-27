import type { NextPage } from "next";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, MenuProps, Row } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Formik, Field } from "formik";
import { createCustomer } from "../api/customer";

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
  getItem("Customer", "1", <TeamOutlined />),
  getItem("Fund", "2", <PieChartOutlined />),
  getItem("Trade History", "3", <DesktopOutlined />),
  
];

export interface CustomerDto {
  name: string;
  email: string;
}

const Home: NextPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const initialValues: CustomerDto = { name: "", email: "" };

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
                onSubmit={(values, {setSubmitting}) => {
                    createCustomer(values)
                    setSubmitting(false)
                }}
              >
                <Form>
                <Row>
                  <Col span={24}>
                    <label htmlFor="name">Customer's Name</label>
                  <Field id="name" name="name" placeholder="Name" />
                  </Col>
                 </Row>
                 <Row>
                  <Col span={24}>
                    <label htmlFor="email">Customer's Email</label>
                  <Field id="email" name="email" placeholder="Email" />
                  </Col>
                 </Row>
                 <Row>
                  <Col span={24}>
                  <Button htmlType="submit">Submit</Button>
                  </Col>
                 </Row>
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
