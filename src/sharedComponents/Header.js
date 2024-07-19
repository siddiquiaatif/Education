import React from "react";
import user_img from "../assets/images/user_img.svg";
import ic_bell from "../assets/images/ic_bell.svg";
import { Accordion, Button, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";

import ic_active_arrow from "../assets/images/ic_active_arrow.svg";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const handleLang = () => setIsShown(!isShown);

  const [isShown1, setIsShown1] = useState(false);
  const handleLang1 = () => setIsShown1(!isShown1);

  const [isShown2, setIsShown2] = useState(false);
  const handleLang2 = () => setIsShown2(!isShown2);

  const [openMode, setOpenMode] = useState(false);

  return (
    <main className="main-header">
      <div className="header-wrapper">
        <div className="left">
          {/* <div className="u-img">
            <img src={user_img} alt="" />
          </div>
          <div className="u-name header-u-name">
            <div className="name">Anna Newman</div>
            <div className="shift">6th D, Regular Shift</div>
          </div> */}

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <div className="left">
                <div className="u-img">
                  <img src={user_img} alt="" />
                </div>
                <div className="u-name header-u-name">
                  <div className="name">Anna Newman</div>
                  <div className="shift">6th D, Regular Shift</div>
                </div>
                <div className="arrow">
                  <img src={ic_active_arrow} alt="" />
                </div>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div className="d-item">
                  <div className="u-img">
                    <img src={user_img} alt="" />
                  </div>
                  <div className="u-name">
                    <div className="name">Anna Newman</div>
                    <div className="shift">6th D, Regular Shift</div>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="d-item">
                  <div className="u-img">
                    <img src={user_img} alt="" />
                  </div>
                  <div className="u-name">
                    <div className="name">Anna Newman</div>
                    <div className="shift">6th D, Regular Shift</div>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="d-item">
                  <div className="u-img">
                    <img src={user_img} alt="" />
                  </div>
                  <div className="u-name">
                    <div className="name">Anna Newman</div>
                    <div className="shift">6th D, Regular Shift</div>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="right">
          <div className="bell" id="bell">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <div className="arrow ">
                  <span></span>
                  <img src={ic_bell} alt="" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <div className="d-item">
                    <div className="u-img">
                      <img src={ic_bell} alt="" />
                    </div>
                    <div className="u-name ">
                      <label className="name">
                        Anna’a Missed the lecture today.
                      </label>
                    </div>
                  </div>
                  <div className="shift">4 hours ago</div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="d-item">
                    <div className="u-img">
                      <img src={ic_bell} alt="" />
                    </div>
                    <div className="u-name">
                      <label className="name">
                        Anna’a Missed the lecture today.
                      </label>
                    </div>
                  </div>
                  <div className="shift">4 hours ago</div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="d-item">
                    <div className="u-img">
                      <img src={ic_bell} alt="" />
                    </div>
                    <div className="u-name">
                      <label className="name">
                        Anna’a Missed the lecture today.
                      </label>
                    </div>
                  </div>
                  <div className="shift">4 hours ago</div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="profile" id="profile">
            {/* <div className="u-img">
              <img src={user_img} alt="" />
            </div>
            <div className="u-name header-u-name">
              <div className="name">Anna Newman</div>
              <div className="shift">6th D, Regular Shift</div>
            </div> */}

            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <div className="profile" id="profile">
                  <div className="u-img">
                    <img src={user_img} alt="" />
                  </div>
                  <div className="u-name header-u-name">
                    <div className="name">Anna Newman</div>
                    <div className="shift">6th D, Regular Shift</div>
                  </div>
                  <div className="arrow">
                    <img src={ic_active_arrow} alt="" />
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="lan-menu">
                          <label>My Language</label>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <div className="line-menu"></div>
                          <li
                            onClick={() => {
                              handleLang(true);
                            }}
                          >
                            <Link
                              to="#"
                              className={isShown ? "linkisactive" : ""}
                            >
                              English
                            </Link>
                          </li>

                          <li 
                           onClick={() => {
                            handleLang1(true);
                          }}>
                            <Link
                              to="#"
                              className={isShown1 ? "linkisactive1" : ""}
                            >
                              Arabic
                            </Link>
                          </li>

                          <li onClick={() => {
                            handleLang2(true);
                          }}>
                            <Link
                              to="#"
                              className={isShown2 ? "linkisactive2" : ""}
                            >
                              Hindi
                            </Link>
                          </li>

                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <div className="h-menu-item">
                      <Link to="#">Change School</Link>
                    </div>
                    <div className="h-menu-item">
                      <Link to="#" onClick={() => setOpenMode(true)}>Logout</Link>
                    </div>
                  </Accordion>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <Modal
        size="md"
        centered
        show={openMode}
        onHide={() => setOpenMode(false)}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="borderModal"></div>
          <p>Are you sure you want to Log Out ?</p>
          <div className="borderModalBelow"></div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modalBtns">
            <button className="cancelBtn" onClick={() => setOpenMode(false)}>
              Cancel
            </button>
            <button className="cancelBtn cx-ml-15">
              <Link to="/">Log Out</Link>
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Header;
