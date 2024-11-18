import React, { useState, useContext, useEffect } from 'react';
import { getMonth } from "../../../util";
import CalendarHeader from "../../components/CalendarHeader";
import Sidebar from "../../components/Sidebar";
import Month from "../../components/Month";
import GlobalContext from "../../context/GlobalContext";
import EventModal from "../../components/EventModal";


const Events = ({ sidebarWidth }) => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div style={{
      marginLeft: `${sidebarWidth}`,
      width: `calc(100% - ${sidebarWidth})`,
    }}>
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
    </div>
  )
}

export default Events;