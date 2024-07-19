import React from "react";
import { useState } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import User from "../../assets/images/editProfile.svg";
import { Calendar } from "primereact/calendar";
import CalendarImg from "../../assets/images/calendar.svg";
import SubHeader from "../../sharedComponents/SubHeader";
import { Navigate, useNavigate } from "react-router-dom";

const Leaves = () => {
  const [leaveData, setLeaveData] = useState({
    LeaveStartDate: null,
    LeaveEndDate: null,
    LeaveType: "",
    LeaveMode: "",
    LeaveReason: "",
  });

  console.log(leaveData , "Leave Data");

  const [showBlank, setShowBlank] = useState(false);
  const handleShowBlank = () => setShowBlank(true);
  const [date, setDate] = useState(null);
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      apicall();
    }

    setValidated(true);
  };

  const handleCancel = () => {
    setLeaveData({
      LeaveStartDate: null,
      LeaveEndDate: null,
      LeaveType: "",
      LeaveMode: "",
      LeaveReason: "",
    });
  };
const apicall =() =>{
  // alert("Api Call Success");
  navigate("/Leaves");
}






  return (
    <main id="cx-main" className="Apply_leave">
      <div className="cx-main-card">
        <SubHeader />
        <div className="form-wrapper">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div
              className="mainLandingCard"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <div className="form-title-wrapper">
                <p className="form-title">Apply Leave</p>
              </div>

              {/* Forms section */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="fieldSetCUST cx-mb-25">
                    <Calendar
                      value={leaveData.LeaveStartDate}
                      onChange={(e) =>
                        setLeaveData({ ...leaveData, LeaveStartDate: e.value })
                      }
                      placeholder="Select Date"
                      className="dateChapter"
                    />
                    <span className="legendHere">
                      Leave From Date<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <img src={CalendarImg} className="caledarImg" alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="fieldSetCUST cx-mb-25">
                    <Calendar
                      value={leaveData.LeaveEndDate}
                      onChange={(e) =>
                        setLeaveData({ ...leaveData, LeaveEndDate: e.value })
                      }
                      placeholder="Select Date"
                      className="dateChapter"
                    />
                    <span className="legendHere">
                      Leave To Date<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <img src={CalendarImg} className="caledarImg" alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 cx-mb-20">
                  <div className="fieldSetCUST">
                    <span className="legendHere">
                      Leave Type<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <Form.Select
                      class="form-select"
                      required
                      aria-label="Default select example"
                      value={leaveData.LeaveType}
                      onChange={(e) =>
                        setLeaveData({
                          ...leaveData,
                          LeaveType: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Leave Type...</option>
                      <option value="Paid Leave">Paid Leave</option>
                      <option value="Unpaid Leave">Unpaid Leave</option>
                      <option value="Emergency Leave">Emergency Leave</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please Select Leave Type.
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 cx-mb-20">
                  <div className="fieldSetCUST">
                    <span className="legendHere">
                      Leave Mode<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <Form.Select
                      class="form-select"
                      required
                      aria-label="Default select example"
                      value={leaveData.LeaveMode}
                      onChange={(e) =>
                        setLeaveData({
                          ...leaveData,
                          LeaveMode: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Leave Type...</option>
                      <option value="Paid Leave">Paid Leave</option>
                      <option value="Unpaid Leave">Unpaid Leave</option>
                      <option value="Emergency Leave">Emergency Leave</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please Select Gender.
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="fieldSetCUST cx-mb-25">
                    <span className="legendHere">
                      Reason<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <Form.Control
                      className="formsForTextArea"
                      as="textarea"
                      rows={4}
                      placeholder="Write reason for leave..."
                      value={leaveData.LeaveReason}
                      onChange={(e) =>
                        setLeaveData({
                          ...leaveData,
                          LeaveReason: e.target.value,
                        })
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Write reason for leave...
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="main-btn-wrapper">
                  <button
                    type="button"
                    className="cx-btn-2"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button className="cx-btn-1">Apply Leave</button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Leaves;
