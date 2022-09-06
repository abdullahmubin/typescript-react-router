import img from './../../assets/css/bread.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import profile from './../../../assets/images/profile.jpg'; // assets/images/profile.jpg
import d2 from './../../../assets/images/d2.png';
import d3 from './../../../assets/images/d3.png';

import CircleColor from './../../Shared/ColorCircle'

const colors = [
    { color: 'rgb(7, 239, 88)' },
    { color: '#555' },
    { color: 'rgb(239, 208, 7)' },
    { color: 'rgb(239, 84, 7)' },
    { color: 'rgb(239, 7, 223)' },
]

const FirstTemp: React.FC = () => {
    return (

        <>

            <div className="container-fluid overcover">
                <div className="container profile-box">
                    <div className="row">
                        <div className="col-md-4 left-co">
                            <div className="left-side">
                                <div className="profile-info">
                                    <img src={profile} alt="" />
                                    <h3>Jonney Anderson</h3>
                                    <span>Web Designer</span>
                                </div>
                                <h4 className="ltitle">Contact</h4>
                                <div className="contact-box pb0">
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="detail">
                                        +123 8767 5465 <br />
                                        +122 2345 3763
                                    </div>
                                </div>
                                <div className="contact-box pb0">
                                    <div className="icon">
                                        <i className="fas fa-globe-americas"></i>
                                    </div>
                                    <div className="detail">
                                        info@smarteyeapps.com <br />
                                        www.smarteyeapps.com
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="detail">
                                        First Floor,Vincent Plaza, Toranto, Canada
                                    </div>
                                </div>
                                <h4 className="ltitle">Contact</h4>
                                <ul className="row social-link no-margin">
                                    <li><i className="fab fa-facebook-f"></i></li>
                                    <li><i className="fab fa-twitter"></i></li>
                                    <li><i className="fab fa-google-plus-g"></i></li>
                                    <li><i className="fab fa-linkedin-in"></i></li>
                                    <li><i className="fab fa-github"></i></li>
                                </ul>
                                <h4 className="ltitle">Referencess</h4>

                                <div className="refer-cov">
                                    <b>Jonney Smith</b>
                                    <p>CEO Casinocarol</p>
                                    <span>p +00 890 1232 8767</span>
                                </div>
                                <div className="refer-cov">
                                    <b>Jonney Smith</b>
                                    <p>System Administrator</p>
                                    <span>p +00 890 1232 8767</span>
                                </div>
                                <h4 className="ltitle">Hobbies</h4>
                                <ul className="hoby row no-margin">
                                    <li><i className="fas fa-pencil-alt"></i> <br /> Writing</li>
                                    <li><i className="fas fa-bicycle"></i> <br /> Cycling</li>
                                    <li><i className="fas fa-futbol"></i> <br /> Football</li>
                                    <li><i className="fas fa-film"></i><br /> Movies</li>
                                    <li><i className="fas fa-plane-departure"></i> <br />Travel</li>
                                    <li><i className="fas fa-gamepad"></i> <br /> Games</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 rt-div">
                            <div className="rit-cover">
                                <div className="hotkey">
                                    <h1 className="">Jonney Anderson </h1>
                                    <small>Web Designer</small>
                                </div>
                                <h2 className="rit-titl"><i className="far fa-user"></i> Profile</h2>
                                <div className="about">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan purus enim, a vestibulum est tristique sit amet. Suspendisse nibh nisl, imperdiet sit amet mi vitae, elementum elementum nibh. Vivamus vitae eros malesuada, convallis dolor malesuada, lobortis ex. Sed cursus augue risus, ac semper est consectetur vitae. Praesent consequat metus sit amet rhoncus luctus.</p>
                                    <div className="btn-ro row no-margin">
                                        <ul className="btn-link">
                                            <li>
                                                <a href=""><i className="fas fa-paper-plane"></i> Hire Me</a>
                                            </li>
                                            <li>
                                                <a href=""><i className="fas fa-cloud-download-alt"></i> Download Resume</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <h2 className="rit-titl"><i className="fas fa-briefcase"></i> Work Experiance</h2>
                                <div className="work-exp">
                                    <h6>Junior Software Developer <span>2008-2011</span></h6>
                                    <i>Microsoft / United States</i>
                                    <ul>
                                        <li><i className="far fa-hand-point-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                        <li><i className="far fa-hand-point-right"></i> Sorem dolor sit amet, consectetur. </li>
                                        <li><i className="far fa-hand-point-right"></i> Porem ipsum sit amet, consectetur adipiscing </li>
                                    </ul>
                                </div>
                                <div className="work-exp">
                                    <h6>Junior Software Developer <span>2008-2011</span></h6>
                                    <i>Microsoft / United States</i>
                                    <ul>
                                        <li><i className="far fa-hand-point-right"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>

                                        <li><i className="far fa-hand-point-right"></i> Sed cursus augue risus, ac semper est consectetur vitae </li>
                                    </ul>
                                </div>
                                <div className="work-exp">
                                    <h6>Junior Software Developer <span>2008-2011</span></h6>
                                    <i>Microsoft / United States</i>
                                    <ul>
                                        <li><i className="far fa-hand-point-right"></i> Praesent consequat metus sit amet rhoncus luctus.

                                        </li>
                                        <li><i className="far fa-hand-point-right"></i> Lorem ipsum dolor sit amet, consectetur. </li>

                                    </ul>
                                </div>

                                <h2 className="rit-titl"><i className="fas fa-graduation-cap"></i> Education</h2>
                                <div className="education">
                                    <ul className="row no-margin">
                                        <li className="col-md-6"><span>2013-2015</span> <br />
                                            Master Degree - Cambridg University</li>
                                        <li className="col-md-6"><span>2013-2015</span> <br />
                                            Master Degree - Cambridg University</li>
                                        <li className="col-md-6"><span>2013-2015</span> <br />
                                            Master Degree - Cambridg University</li>
                                        <li className="col-md-6"><span>2013-2015</span> <br />
                                            Master Degree - Cambridg University</li>
                                    </ul>
                                </div>

                                <h2 className="rit-titl"><i className="fas fa-users-cog"></i> Skills</h2>
                                <div className="profess-cover row no-margin">
                                    <div className="col-md-6">
                                        <div className=" prog-row row">
                                            <div className="col-sm-6">
                                                Photoshop
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row prog-row">
                                            <div className="col-sm-6">
                                                PHP
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="row prog-row">
                                            <div className="col-sm-6">
                                                Web Design
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row prog-row">
                                            <div className="col-sm-6">
                                                Web Development
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>






                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default FirstTemp;