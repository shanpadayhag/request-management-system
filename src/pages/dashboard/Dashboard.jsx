import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AdminPage } from "../../components";

const AdminDashboardMain = styled.main`
.info-data {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-gap: 20px;
}
.info-data .card {
	padding: 20px;
	border-radius: 10px;
	background: var(--light);
	box-shadow: 4px 4px 16px rgba(0, 0, 0, .05);
}
.card .head {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}
.card .head h2 {
	font-size: 24px;
	font-weight: 600;
}
.card .head p {
	font-size: 14px;
}
.card .head .icon {
	font-size: 20px;
	color: var(--green);
}
.card .head .icon.down {
	color: var(--red);
}
.card .progress {
	display: block;
	margin-top: 24px;
	height: 10px;
	width: 100%;
	border-radius: 10px;
	background: var(--grey);
	overflow-y: hidden;
	position: relative;
	margin-bottom: 4px;
}
.card .progress::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	background: var(--blue);
	width: var(--value);
}
.card .label {
	font-size: 14px;
	font-weight: 700;
}
.data {
	display: flex;
	grid-gap: 20px;
	margin-top: 20px;
	flex-wrap: wrap;
}
.data .content-data {
	flex-grow: 1;
	flex-basis: 400px;
	padding: 20px;
	background: var(--light);
	border-radius: 10px;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
}
.content-data .head {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
}
.content-data .head h3 {
	font-size: 20px;
	font-weight: 600;
}
.content-data .head .menu {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}
.content-data .head .menu .icon {
	cursor: pointer;
}
.content-data .head .menu-link {
	position: absolute;
	top: calc(100% + 10px);
	right: 0;
	width: 140px;
	background: var(--light);
	border-radius: 10px;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
	padding: 10px 0;
	opacity: 0;
	pointer-events: none;
	transition: all .3s ease;
}
.content-data .head .menu-link.show {
	top: 100%;
	opacity: 1;
	pointer-events: visible;
}
.content-data .head .menu-link a {
	display: block;
	padding: 6px 16px;
	font-size: 14px;
	color: var(--dark);
	transition: all .3s ease;
}
.content-data .head .menu-link a:hover {
	background: var(--grey);
}
.content-data .chart {
	width: 100%;
	max-width: 100%;
	overflow-x: auto;
	scrollbar-width: none;
}
.content-data .chart::-webkit-scrollbar {
	display: none;
}

.chat-box {
	width: 100%;
	max-height: 360px;
	overflow-y: auto;
	scrollbar-width: none;
}
.chat-box::-webkit-scrollbar {
	display: none;
}
.chat-box .day {
	text-align: center;
	margin-bottom: 10px;
}
.chat-box .day span {
	display: inline-block;
	padding: 6px 12px;
	border-radius: 20px;
	background: var(--light-blue);
	color: var(--blue);
	font-size: 12px;
	font-weight: 600;
}
.chat-box .msg img {
	width: 28px;
	height: 28px;
	border-radius: 50%;
	object-fit: cover;
}
.chat-box .msg {
	display: flex;
	grid-gap: 6px;
	align-items: flex-start;
}
.chat-box .profile .username {
	font-size: 14px;
	font-weight: 600;
	display: inline-block;
	margin-right: 6px;
}
.chat-box .profile .time {
	font-size: 12px;
	color: var(--dark-grey);
}
.chat-box .chat p {
	font-size: 14px;
	padding: 6px 10px;
	display: inline-block;
	max-width: 400px;
	line-height: 150%;
}
.chat-box .msg:not(.me) .chat p {
	border-radius: 0 5px 5px 5px;
	background: var(--blue);
	color: var(--light);
}
.chat-box .msg.me {
	justify-content: flex-end;
}
.chat-box .msg.me .profile {
	text-align: right;
}
.chat-box .msg.me p {
	background: var(--grey);
	border-radius: 5px 0 5px 5px;
}
form {
	margin-top: 6px;
}
.form-group {
	width: 100%;
	display: flex;
	grid-gap: 10px;
}
.form-group input {
	flex-grow: 1;
	padding: 10px 16px;
	border-radius: 5px;
	outline: none;
	background: var(--grey);
	border: none;
	transition: all .3s ease;
	width: 100%;
}
.form-group input:focus {
	box-shadow: 0 0 0 1px var(--blue), 0 0 0 4px var(--light-blue);
}
.btn-send {
	padding: 0 16px;
	background: var(--blue);
	border-radius: 5px;
	color: var(--light);
	cursor: pointer;
	border: none;
	transition: all .3s ease;
}
.btn-send:hover {
	background: var(--dark-blue);
}
`

const Dashboard = () => {
    const BreadCrumb = () => {
        return <>
            <li><Link to="/">Home</Link></li>
            <li className="divider">/</li>
            <li><a href="#" className="active">Dashboard</a></li>
        </>;
    }

    useEffect(() => {
        const allProgress = document.querySelectorAll('main .card .progress');

        allProgress.forEach(item => {
            item.style.setProperty('--value', item.dataset.value)
        })

        var options = {
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }, [])

    return <AdminPage title="Dashboard" breadCrumb={<BreadCrumb />}>
        <AdminDashboardMain>
            <div className="info-data">
                <div className="card">
                    <div className="head">
                        <div>
                            <h2>1500</h2>
                            <p>Traffic</p>
                        </div>
                        <i className='bx bx-trending-up icon' ></i>
                    </div>
                    <span className="progress" data-value="40%"></span>
                    <span className="label">40%</span>
                </div>
                <div className="card">
                    <div className="head">
                        <div>
                            <h2>234</h2>
                            <p>Sales</p>
                        </div>
                        <i className='bx bx-trending-down icon down' ></i>
                    </div>
                    <span className="progress" data-value="60%"></span>
                    <span className="label">60%</span>
                </div>
                <div className="card">
                    <div className="head">
                        <div>
                            <h2>465</h2>
                            <p>Pageviews</p>
                        </div>
                        <i className='bx bx-trending-up icon' ></i>
                    </div>
                    <span className="progress" data-value="30%"></span>
                    <span className="label">30%</span>
                </div>
                <div className="card">
                    <div className="head">
                        <div>
                            <h2>235</h2>
                            <p>Visitors</p>
                        </div>
                        <i className='bx bx-trending-up icon' ></i>
                    </div>
                    <span className="progress" data-value="80%"></span>
                    <span className="label">80%</span>
                </div>
            </div>
            <div className="data">
                <div className="content-data">
                    <div className="head">
                        <h3>Sales Report</h3>
                        <div className="menu">
                            <i className='bx bx-dots-horizontal-rounded icon'></i>
                            <ul className="menu-link">
                                <li><a href="#">Edit</a></li>
                                <li><a href="#">Save</a></li>
                                <li><a href="#">Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="chart">
                        <div id="chart"></div>
                    </div>
                </div>
                <div className="content-data">
                    <div className="head">
                        <h3>Chatbox</h3>
                        <div className="menu">
                            <i className='bx bx-dots-horizontal-rounded icon'></i>
                            <ul className="menu-link">
                                <li><a href="#">Edit</a></li>
                                <li><a href="#">Save</a></li>
                                <li><a href="#">Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="chat-box">
                        <p className="day"><span>Today</span></p>
                        <div className="msg">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="chat">
                                <div className="profile">
                                    <span className="username">Alan</span>
                                    <span className="time">18:30</span>
                                </div>
                                <p>Hello</p>
                            </div>
                        </div>
                        <div className="msg me">
                            <div className="chat">
                                <div className="profile">
                                    <span className="time">18:30</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum eos quam dolores eligendi exercitationem animi nobis reprehenderit laborum! Nulla.</p>
                            </div>
                        </div>
                        <div className="msg me">
                            <div className="chat">
                                <div className="profile">
                                    <span className="time">18:30</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto!</p>
                            </div>
                        </div>
                        <div className="msg me">
                            <div className="chat">
                                <div className="profile">
                                    <span className="time">18:30</span>
                                </div>
                                <p>Lorem ipsum, dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div className="form-group">
                            <input type="text" placeholder="Type..." />
                            <button type="submit" className="btn-send"><i className='bx bxs-send' ></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminDashboardMain>
    </AdminPage>
}

export default Dashboard;
