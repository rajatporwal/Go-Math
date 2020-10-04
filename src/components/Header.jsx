import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import javaScriptConfig from "../config/javaScriptConfig";
import regexConfig from "../config/regexConfig";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

const { Header } = Layout;

export default ({ setCollapsed, collapsed }) => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%", padding: 0 }}>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item
          key="menuOutline"
          icon={<MenuUnfoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Menu.Item key="1">
          <Link active to="/home">
            Home
          </Link>
        </Menu.Item>
        <SubMenu key="SubMenuJS" title="JavaScript">
          {javaScriptConfig.map((js) => (
            <Menu.ItemGroup title={js.heading}>
              {js.children.map((child, i) => (
                <Menu.Item key={`${js.heading} + "__ + ${i}`}>
                  <Link
                    active
                    to={{
                      pathname: "/javascript",
                      hash: child.id
                    }}
                    smooth
                  >
                    {child.title}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          ))}
        </SubMenu>
        <SubMenu key="SubMenuRegex" title="Regex" active>
          {regexConfig.map((r) => (
            <Menu.ItemGroup title={r.heading}>
              {r.children.map((child, i) => (
                <Menu.Item key={`${r.heading} + "__ + ${i}`}>
                  <Link
                    active
                    to={{
                      pathname: "/regex",
                      hash: child.id
                    }}
                    smooth
                  >
                    {child.title}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          ))}
        </SubMenu>
        <Menu.Item key="4">
          <Link active to="/questions">
            Questions
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
