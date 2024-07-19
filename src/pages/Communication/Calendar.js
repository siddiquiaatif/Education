import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";

import back_btn from "../../assets/images/back_btn.svg";
import forward_btn from "../../assets/images/forward_btn.svg";

const Calendar = ({ showDetailsHandle }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";
    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            <img src={back_btn} alt="" />
          </div>
        </div>

        <div className="col col-center">
          <span className="current-month">
            {format(currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">
            <img src={forward_btn} alt="" />
          </div>
        </div>
      </div>
    );
  };
  // const renderDays = () => {
  //   const dateFormat = "EEE";
  //   const days = [];
  //   let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
  //   for (let i = 0; i < 7; i++) {
  //     days.push(
  //       <div className="cell" key={i}>
  //         {format(addDays(startDate, i), dateFormat)}
  //       </div>
  //     );
  //   }
  //   return <div className="days">{days}</div>;
  // };
  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    const dateFormat2 = "EEE";
    const days2 = [];
    let startDate2 = startOfWeek(currentMonth, { weekStartsOn: 1 });

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`cell ${
              isSameDay(day, new Date())
                ? "today"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <span className="number" key={i}>
              {format(addDays(startDate2, i), dateFormat2)}
            </span>
            <p>{formattedDate}</p>
            {/* <span className="bg">{formattedDate}</span> */}
          </div>
        );
        day = addDays(day, 1);
      }

      // rows.push(
      //   <div className="row" key={day}>
      //     {days}
      //   </div>
      // );
      // days = [];
      for (let i = 0; i < 7; i++) {
        days2.push();
      }
    }

    // return <div className="days">{days}</div>;

    return <div className="days">{days}</div>;
  };

  // function days() {
  //   let daysss = renderDays;
  //   let cells = renderCells;
  // }

  // console.log(days)

  //   const renderFooter = () => {
  //     return <div className="header row flex-middle"></div>;
  //   };
  return (
    <div className="calendar">
      {renderHeader()}
      {/* {renderDays()} */}
      {renderCells()}
      {/* {renderFooter()} */}
    </div>
  );
};

export default Calendar;
/**
 * Header:
 * icon for switching to the previous month,
 * formatted date showing current month and year,
 * another icon for switching to next month
 * icons should also handle onClick events to change a month
 */
