import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd';
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const sideBarOptions = useSelector(
    (state) => state.appReducer.sideBarOptions
  );
  const dispatch = useDispatch();
  return (
    <Sider
      width={200}
      className='site-layout-background'
      style={{
        marginTop: 64,
        marginBottom: 64,
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        zIndex: 1,
      }}
      collapsible
      onCollapse={() => dispatch({ type: 'SIDE_BAR', value: false })}
    >
      <Menu mode='inline' style={{ height: '100%', borderRight: 0 }}>
        {sideBarOptions.map((js, j) =>
          js.heading ? (
            <SubMenu key={j} title={js.heading}>
              {js.children.map((child, i) => (
                <Menu.Item key={`${js.heading} + "__ + ${i}`}>
                  <Link
                    active
                    to={{
                      pathname: js.pathname,
                      hash: child.id,
                    }}
                    smooth
                  >
                    {child.title}
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            js.children.map((child, i) => (
              <Menu.Item key={`${js.heading} + "__ + ${i}`}>
                <Link
                  active
                  to={{
                    pathname: child.pathname,
                  }}
                  smooth
                >
                  {child.title}
                </Link>
              </Menu.Item>
            ))
          )
        )}
      </Menu>
    </Sider>
  );
};

export default SideBar;
