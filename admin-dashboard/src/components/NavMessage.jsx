import React from 'react'

function NavMessage() {
    return (
        (
            <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-chat-left-text"></i>
                    <span className="badge bg-success badge-number">4</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                    <li className="dropdown-header">
                        You have 4 new messages
                        <a href="#">
                            <span className="badge rounded-pill bg-primary p-2 ms-2">
                                View all
                            </span>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                        <a href="#">
                            <img
                                src="assets/img/messages-1.jpg"
                                alt=""
                                className="rounded-circle"
                            />
                            <div>
                                <h4>Maria Hudson</h4>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <p>4 hrs. ago</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                        <a href="#">
                            <img
                                src="assets/img/messages-2.jpg"
                                alt=""
                                className="rounded-circle"
                            />
                            <div>
                                <h4>Lord Fel</h4>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <p>5 hrs. ago</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                        <a href="#">
                            <img
                                src="assets/img/messages-3.jpg"
                                alt=""
                                className="rounded-circle"
                            />
                            <div>
                                <h4>Felsito Hue</h4>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <p>7 hrs. ago</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="message-item">
                        <a href="#">
                            <img
                                src="assets/img/messages-4.jpg"
                                alt=""
                                className="rounded-circle"
                            />
                            <div>
                                <h4>Georgia Marie</h4>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                <p>7 hrs. ago</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-footer">
                        <a href="#">Show all notifications</a>
                    </li>
                </ul>
            </li>
        )
    )
}

export default NavMessage
