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

interface referenceIf {
    reference: {
        id: number,
        idMain: number,
        name?: string,
        designation?: string,
        mail?: string,
        mobile?: string,
        occupation?: string
    }
}

interface hobbieIn {
    hobbie: {
        id: number,
        idMain: number,
        name?: string,
        image?: string,
        defaultImg?: string

    }
}

interface educationIn {
    education: {
        id: number,
        idMain: number,
        timeline?: string,
        degree?: string,
        school?: string
    }
}

interface workExperienceIn {
    workExperience: {
        id: number,
        idMain: number,
        designation?: string,
        compancy?: string,
        timeline?: string,
        taskList?: taskListIn['taskList'][]
    }
}

interface taskListIn {
    taskList: {
        id: number,
        idWorkExperience: number,
        title?: string,
        description?: string
    }
}
interface cVInterface {
    CVList: {
        idMain: number,
        necessaryColor?: string,
        title?: string,
        subtitle?: string,
        profilePic?: string,
        master: boolean,
        reference?: referenceIf['reference'][]
        hobbies?: hobbieIn['hobbie'][]
        education?: educationIn['education'][]
        profileTxt?: string,
        workExperience?: workExperienceIn['workExperience'][],
        skills?: {
            id: number,
            idMain: number,
            name?: string,
            percentage?: string
        }[],
        contact?: {
            firtMobile?: string,
            SecondMobile?: string,
            email?: string,
            website?: string,
            Linkedin?: string,
            git?: string,
            facebook?: string,
            address?: string
        }
    },


}

const FirstTemp = (props: cVInterface) => {
    console.log(`cVInterface cVInterface`)
    console.log(props.CVList)
    let data = props.CVList
    return (

        <>

            <div className="container-fluid overcover">
                <div className="container profile-box">
                    <div className="row">
                        <div className="col-md-4 left-co">
                            <div className="left-side">
                                <div className="profile-info">
                                    <img src={profile} alt="" />
                                    <h3>{data.title}</h3>
                                    <span>{data.subtitle}</span>
                                </div>
                                <h4 className="ltitle">Contact</h4>
                                <div className="contact-box pb0">
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="detail">
                                        {data.contact?.firtMobile} <br />
                                        {data.contact?.SecondMobile}
                                    </div>
                                </div>
                                <div className="contact-box pb0">
                                    <div className="icon">
                                        <i className="fas fa-globe-americas"></i>
                                    </div>
                                    <div className="detail">
                                        {data.contact?.email} <br />
                                        {data.contact?.website}
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="detail">
                                        {data.contact?.address}
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

                                {
                                    data.reference?.map((i) => {
                                        return (
                                            <div className="refer-cov">
                                                <b>{i.name}</b>
                                                <p>{i.designation}</p>
                                                <span>{i.mobile}</span>
                                            </div>
                                        )
                                    })
                                }

                                {/* <div className="refer-cov">
                                    <b>Jonney Smith</b>
                                    <p>System Administrator</p>
                                    <span>p +00 890 1232 8767</span>
                                </div> */}
                                <h4 className="ltitle">Hobbies</h4>
                                <ul className="hoby row no-margin">
                                    {
                                        data.hobbies?.map((i) => {
                                            return (
                                                <li><i className={`${i.defaultImg}`}></i> <br /> {i.name}</li>
                                            )
                                        })

                                    }
                                    {/* <li><i className="fas fa-futbol"></i> <br /> Football</li> */}
                                    {/* <li><i className="fas fa-bicycle"></i> <br /> Cycling</li>
                                    <li><i className="fas fa-futbol"></i> <br /> Football</li>
                                    <li><i className="fas fa-film"></i><br /> Movies</li>
                                    <li><i className="fas fa-plane-departure"></i> <br />Travel</li>
                                    <li><i className="fas fa-gamepad"></i> <br /> Games</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 rt-div">
                            <div className="rit-cover">
                                <div className="hotkey">
                                    <h1 className="">{data.title} </h1>
                                    <small>{data.subtitle}</small>
                                </div>
                                <h2 className="rit-titl"><i className="far fa-user"></i> Profile</h2>
                                <div className="about">
                                    <p>{data.profileTxt}</p>
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
                                {
                                    data.workExperience?.map((i) => {
                                        return (
                                            <div className="work-exp">
                                                <h6>{i.designation} <span>{i.timeline}</span></h6>
                                                <i>{i.compancy}</i>
                                                <ul>
                                                    {
                                                        i.taskList?.map((j) => {
                                                            return (
                                                                <li><i className="far fa-hand-point-right"></i> {j.title} </li>

                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }


                                <h2 className="rit-titl"><i className="fas fa-graduation-cap"></i> Education</h2>
                                <div className="education">
                                    <ul className="row no-margin">
                                        {
                                            data.education?.map((i) => {
                                                return (
                                                    <li className="col-md-6"><span>{i.timeline}</span> <br />
                                                        {i.degree} - {i.school}</li>
                                                )
                                            })
                                        }


                                    </ul>
                                </div>

                                <h2 className="rit-titl"><i className="fas fa-users-cog"></i> Skills</h2>
                                <div className="profess-cover row no-margin">
                                    {
                                        data.skills?.map((i) => {
                                            return (
                                                <div className="col-md-6">
                                                    <div className=" prog-row row">
                                                        <div className="col-sm-6">
                                                            {i.name}
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{ width: `${i.percentage}%` }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }




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