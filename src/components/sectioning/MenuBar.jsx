import LinkItem from "../items/LinkItem"
import Logo from "../items/Logo"
import house from '../../assets/icons/house.svg'
import houseActive from '../../assets/icons/house-active.svg'
import patients from '../../assets/icons/patients.svg'
import patientsActive from '../../assets/icons/patients-active.svg'
import staff from '../../assets/icons/staff.svg'
import staffActive from '../../assets/icons/staff-active.svg'
import bill from '../../assets/icons/bill.svg'
import billActive from '../../assets/icons/bill-active.svg'
import roster from '../../assets/icons/roster.svg'
import rosterActive from '../../assets/icons/roster-active.svg'
import stock from '../../assets/icons/stock.svg'
import stockActive from '../../assets/icons/stock-active.svg'
import messages from '../../assets/icons/messages.svg'
import messagesActive from '../../assets/icons/messages-active.svg'
import trashcan from '../../assets/icons/trashcan.svg'
import trashcanActive from '../../assets/icons/trashcan-active.svg'
import settings from '../../assets/icons/settings.svg'
import settingsActive from '../../assets/icons/settings-active.svg'
import logout from '../../assets/icons/logout.svg'
import logoutActive from '../../assets/icons/logout-active.svg'


function MenuBar({tools}) {
  return (
    <div id="toolbar">
      <Logo/>
      <div className="options">
        {
          tools.includes("house") &&
          <LinkItem 
            link="Home" 
            icon={house} 
            iconActive={houseActive} 
            iconName="house" 
            path='/home' 
          />
        }
        {
          tools.includes("patients") &&
          <LinkItem 
            link="Patients" 
            icon={patients} 
            iconActive={patientsActive} 
            iconName="patients" 
            path='/patients' 
          />
        }
        {
          tools.includes("staff") &&
          <LinkItem
            link="Staff"
            icon={staff}
            iconActive={staffActive}
            iconName="staff" 
            path='/staff' 
          />
        }
        {
          tools.includes("bill") &&
          <LinkItem
            link="Bill"
            icon={bill}
            iconActive={billActive}
            iconName="bill" 
            path='/bill' 
          />
        }
        {
          tools.includes("roster") &&
          <LinkItem
            link="Roster"
            icon={roster}
            iconActive={rosterActive}
            iconName="roster" 
            path='/roster' 
          />
        }
        {
          tools.includes("inventory") &&
          <LinkItem
            link="Inventory"
            icon={stock}
            iconActive={stockActive}
            iconName="inventory" 
            path='/inventory' 
          />
        }
        {
          tools.includes("messages") &&
          <LinkItem
            link="Messages"
            icon={messages}
            iconActive={messagesActive}
            iconName="messages" 
            path='/messages' 
          />
        }
        {
          tools.includes("trashcan") &&
          <LinkItem
            link="Trashcan"
            icon={trashcan}
            iconActive={trashcanActive}
            iconName="trashcan" 
            path='/trashcan' 
          />
        }
      </div>
      <div className="settings">
        <LinkItem
          link="Settings"
          icon={settings}
          iconActive={settingsActive}
          iconName="settings" 
          path='/settings' 
        />
        <LinkItem
          link="Logout"
          icon={logout}
          iconActive={logoutActive}
          iconName="logout" 
          path='/logout' 
        />
      </div>
    </div>
  )
}

export default MenuBar