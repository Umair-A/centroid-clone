import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import { FaBars, FaList } from "react-icons/fa";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar  } from 'react-pro-sidebar';
import DashboardTable from './DashboardTable';
import Header from './Header';

function Sidebar1() {
    const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%'}}>
      <Sidebar backgroundColor="#000">
      <h1>Kubri Gateway</h1>
      <div className='iconcolor'>
      <MDBIcon fas icon="align-justify" />
      <FaBars onClick={() => collapseSidebar()} />
      </div>
        <Menu  renderMenuItemStyles={({ level, disabled, active }) => ({
          '.menu-icon': {
            backgroundColor: '#e1e1e1',
          },
          '.menu-anchor': {
            backgroundColor: active ? '#ffcaec' : 'initial',
            color: level === 0 ? (disabled ? 'black' : 'black') : 'black',
          },
        })}
        >
          <SubMenu label="Hub" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Hub</MenuItem>
          </SubMenu>
          <SubMenu label="Makers" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Makers</MenuItem>
          </SubMenu>
          <SubMenu label="Takers" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Takers</MenuItem>
          </SubMenu>
          <SubMenu label="Risk Accounts" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Risk Accounts</MenuItem>
          </SubMenu>
          <SubMenu label="HuRisk Usersb" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Risk Users</MenuItem>
          </SubMenu>
          <SubMenu label="Giveup Rule" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Giveup Rule</MenuItem>
          </SubMenu>
          <SubMenu label="Filtration Pool" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Filtration Pool</MenuItem>
          </SubMenu>
          <SubMenu label="Trading" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Trading</MenuItem>
          </SubMenu>
          <SubMenu label="Reports" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Reports</MenuItem>
          </SubMenu>
          <SubMenu label="Risk Management" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Risk Management</MenuItem>
          </SubMenu>
          <SubMenu label="Monitoring" icon={<FaBars />}>
          <MenuItem icon={<FaList />}> Monitoring</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main>
        <div className='headerSidebar'>
            <h1>Header</h1>
        </div>
        <div className='dashboardTable'>
            <DashboardTable />
        </div>
      </main>
    </div>
  );
    
}

export default Sidebar1;