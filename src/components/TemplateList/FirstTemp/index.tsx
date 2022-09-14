import img from './../../assets/css/bread.jpg';
import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import profile from './../../../assets/images/profile.jpg'; // assets/images/profile.jpg
import d2 from './../../../assets/images/d2.png';
import d3 from './../../../assets/images/d3.png';

import CircleColor from './../../Shared/ColorCircle'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
        id?: number,
        idWorkExperience?: number,
        title?: string,
        description?: string
    }
}
interface cVInterface {
    CVList: {
        editable: boolean,
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
    // console.log(props.CVList)
    // let data = props.CVList

    const [show, setShow] = useState(false);
    const [elemList, setElemList] = useState(null)
    const [CVObj, setCVObj] = useState<cVInterface[`CVList`]>();
    const [workExperienceObj, setworkExperience] = useState<workExperienceIn[`workExperience`]>();
    const [taskListObj, settaskListIn] = useState<taskListIn[`taskList`]>();
    const [educationObj, seteducationIn] = useState<educationIn[`education`]>();
    const [hobbieInObj, sethobbieIn] = useState<hobbieIn[`hobbie`]>();
    const [referenceObj, setreferenceIf] = useState<referenceIf[`reference`]>();

    const [activeDataModalType, setActiveDataModalType] = useState<string | undefined>()
    const [presentlyModalData, setPresentlyModalData] = useState<any>();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setCVObj(props.CVList)
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string | any[], idMain?: any, topic?: any) => {
        console.log(e.target.name);
        console.log(e.target.value)
        console.log(field);
        console.log(idMain)
        if (workExperienceObj && activeDataModalType == `workExperience`) {

            if (topic == `taskList`) {
                let workExAny: any = workExperienceObj;
                console.log(`workExpeirnece Obj`);
                console.log(workExAny[topic]);

                let workTaskList = workExAny[topic];

                let indexOfWorkTopic = workTaskList && workTaskList.findIndex((i: any) => {
                    console.log(`i i i i`)
                    console.log(i)
                    return i.id == Number(idMain.id)

                })

                console.log(`workTopicObj workTopicObj`);
                console.log(indexOfWorkTopic)

                let seperatePart = workTaskList[indexOfWorkTopic];
                let objName = e.target.name
                seperatePart = { ...seperatePart, [e.target.name]: e.target.value }

                workTaskList[indexOfWorkTopic] = seperatePart
                workExAny[topic] = workTaskList;

                console.log(`test test test`);
                console.log(workExAny);

                // workExperienceObj = workExAny
                settaskListIn({
                    ...taskListObj,
                    [e.target.name]: e.target.value
                })

                setworkExperience(workExAny)
            }
            else {
                let workExObj = {
                    ...workExperienceObj,
                    [e.target.name]: e.target.value
                }

                let CVObjval: any = CVObj;
                let workObjList = CVObjval.workExperience;
                let CVObjvalWorkExpIndex = workObjList && workObjList.findIndex((i:any) => i.id == Number(workExObj.id))

                workObjList[CVObjvalWorkExpIndex] = workExObj
                
                setworkExperience(workExObj);
            }
            
        }
        else if (referenceObj && activeDataModalType == `reference`) {

            setreferenceIf({
                ...referenceObj,
                [e.target.name]: e.target.value
            })
        }

    }


    const relatedFn = (e: React.MouseEvent<HTMLButtonElement>, field?: string, value?: string | referenceIf['reference'] | hobbieIn['hobbie'] | educationIn['education'] | workExperienceIn['workExperience'], idMain?: number) => {

        setActiveDataModalType(field);
        let isObj: any = value && typeof value === `object` ? value : false;
        // let elem = null;

        if (isObj) {
            let Test = isObj

            if (field == `workExperience`)
                setworkExperience(Test)
            else if (field == `reference`)
                setreferenceIf(Test)

            // setElemList(elem)
        }
        setShow(true);
    }

    let elem: any = []
    let presentActive: any = activeDataModalType;
    if (activeDataModalType == `workExperience`) {
        let aaa: any = workExperienceObj && Object.keys(workExperienceObj)
        let aaaaa: any = workExperienceObj;

        elem = aaa && aaa.map((i: any) => {
            let name = workExperienceObj ? [i] : ``;

            if (Array.isArray(aaaaa[i])) {

                return aaaaa[i].map((j: any) => {

                    return (
                        <>
                            <input
                                type="text"
                                placeholder={j.description}
                                value={j.description}
                                onChange={(e) => handleChange(e, presentActive, j, `taskList`)}
                                name={`description`}
                            />
                            <input
                                type="text"
                                placeholder={j.title}
                                value={j.title}
                                onChange={(e) => handleChange(e, presentActive, j, `taskList`)}
                                name={`title`}
                            />
                        </>
                    )
                })
            }
            else
                return (


                    <input
                        type="text"
                        placeholder='age'
                        value={aaaaa[i]}
                        onChange={(e) => handleChange(e, presentActive, i)}
                        name={i}
                    />
                )
        })

    }
    else if (activeDataModalType == `reference`) {
        let aaa: any = referenceObj && Object.keys(referenceObj)
        let aaaaa: any = referenceObj;

        elem = aaa && aaa.map((i: any) => {
            let name = referenceObj ? [i] : ``;
            if (Array.isArray(aaaaa[i])) {

                let bbb: any = aaaaa[i] && Object.keys(aaaaa[i])
                let bbbb: any = aaaaa[i];

                elem = bbb.map((j: any) => {
                    return (
                        <input
                            type="text"
                            placeholder={j}
                            value={bbbb[j]}
                            onChange={(e) => handleChange(e, presentActive, i)}
                            name={j}
                        />
                    )
                })
            }
            else
                return (
                    <input
                        type="text"
                        placeholder={i}
                        value={aaaaa[i]}
                        onChange={(e) => handleChange(e, presentActive, i)}
                        name={i}
                    />
                )
        })
    }

    let data: any = CVObj //| undefined;

   
    return (

        <>
            {
                data ?
                    <div className="container-fluid overcover">
                        <div className="container profile-box">
                            <div className="row">
                                <div className="col-md-4 left-co">
                                    <div className="left-side">
                                        <div className="profile-info">
                                            <img src={profile} alt="" />
                                            <h3>{data.title} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `title`, data.title, data.idMain)}><i className="fas fa-paper-plane"></i></Button>} </h3>
                                            <span>{data.subtitle} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `subtitle`, data.subtitle, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}

                                            </span>

                                        </div>
                                        <h4 className="ltitle">Contact</h4>
                                        <div className="contact-box pb0">
                                            <div className="icon">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="detail">
                                                {data.contact?.firtMobile} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `contact.firtMobile`, data.contact?.firtMobile, data.idMain)}><i className="fas fa-paper-plane"></i></Button>} <br />
                                                {data.contact?.SecondMobile} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `contact.SecondMobile`, data.contact?.SecondMobile, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}
                                            </div>
                                        </div>
                                        <div className="contact-box pb0">
                                            <div className="icon">
                                                <i className="fas fa-globe-americas"></i>
                                            </div>
                                            <div className="detail">
                                                {data.contact?.email} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `contact.email`, data.contact?.email, data.idMain)}><i className="fas fa-paper-plane"></i></Button>} <br />
                                                {data.contact?.website} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `contact.website`, data.contact?.website, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}
                                            </div>
                                        </div>
                                        <div className="contact-box">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="detail">
                                                {data.contact?.address} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `contact.address`, data.contact?.address, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}
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
                                            data.reference?.map((i: any, index: number) => {
                                                return (
                                                    <div className="refer-cov">
                                                        <b>{i.name} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `reference`, i, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}</b>
                                                        <p>{i.designation} </p>
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
                                                data.hobbies?.map((i: any, index: number) => {
                                                    return (
                                                        <li><i className={`${i.defaultImg}`}></i> <br /> {i.name} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `hobbies`, i, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}</li>
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
                                            <h1 className="">{data.title} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `title`, data.title, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}</h1>
                                            <small>{data.subtitle} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `subtitle`, data.subtitle, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}</small>
                                        </div>
                                        <h2 className="rit-titl"><i className="far fa-user"></i> Profile {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e)}><i className="fas fa-paper-plane"></i></Button>}</h2>
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

                                        <h2 className="rit-titl"><i className="fas fa-briefcase"></i> Work Experiance {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e)}><i className="fas fa-paper-plane"></i></Button>}</h2>
                                        {
                                            data.workExperience?.map((i: any) => {
                                                return (
                                                    <div className="work-exp">
                                                        <h6>{i.designation} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `workExperience`, i, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}<span>{i.timeline}</span> {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e)}><i className="fas fa-paper-plane"></i></Button>}</h6>
                                                        <i>{i.compancy} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e)}><i className="fas fa-paper-plane"></i></Button>}</i>
                                                        <ul>
                                                            {
                                                                i.taskList?.map((j: any, index: number) => {
                                                                    return (
                                                                        <li><i className="far fa-hand-point-right"></i> {j.title} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `taskList`, i, data.idMain)}><i className="fas fa-paper-plane"></i></Button>} </li>

                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                )
                                            })
                                        }


                                        <h2 className="rit-titl"><i className="fas fa-graduation-cap"></i> Education {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e)}><i className="fas fa-paper-plane"></i></Button>}</h2>
                                        <div className="education">
                                            <ul className="row no-margin">
                                                {
                                                    data.education?.map((i: any, index: number) => {
                                                        return (
                                                            <li className="col-md-6"><span>{i.timeline}</span> <br />
                                                                {i.degree} - {i.school} {<Button variant="default" className='no-hover p-0' onClick={(e) => relatedFn(e, `education`, i, data.idMain)}><i className="fas fa-paper-plane"></i></Button>}</li>
                                                        )
                                                    })
                                                }


                                            </ul>
                                        </div>

                                        <h2 className="rit-titl"><i className="fas fa-users-cog"></i> Skills</h2>
                                        <div className="profess-cover row no-margin">
                                            {
                                                data.skills?.map((i: any) => {
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
                    :
                    null
            }


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!

                    {elem && elem.map((i: any) =>

                        Array.isArray(i) ? i.map(j => j)
                            : i
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    )
}

export default FirstTemp;