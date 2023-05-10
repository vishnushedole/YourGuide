import React, { Component } from "react";
export default class GetSchool extends Component{
    Schools = [
        {
        "sch_info": "<html><p> BIS is one of Bangalore's top 10 schools. In the 60s and 70s, there were many American families living within the city, but the local schools didn't offer a North American model of instruction. The idea of sending their children to a private school didn't appeal to Eloise R. Bennett and her family and so they decided to open their own school in a garage on Millers Road, which is now known as the Bangalore International School.\nToday, this school is an establishment where global education is seamlessly integrated with positive social values, alongside creative freedom that equips every student with necessary life skills. BIS constantly endeavors to nurture students to become responsible citizens. The school's inclusive environment ensures that each learner gets the exposure that takes him/her beyond the textbooks. </p></html>",
        "sch_misn": "<html><p>“A Caring, Connected Community.”</p></html>",
        "sch_fac": "<html><p> Subject wise Laboratories with all the required equipment, Transportation facilities, Daycare, Play area for the juniors, Sports field to keep students embraced with all the possible sporting activities, Library (with a variety of books from different genres), Cafeteria, Infirmary, Music room and many more.</p></html>",
        "sch_loc": "<html><p>Bangalore International School, Geddalahalli, Hennur Bagalur Road, Kothanur Post, Bangalore - 560077</p></html>",
        "sch_img": "",
        "sch_name": "BI school"
        },
        {
        "sch_info": "<html><p>Mr. Sawal Das Jethani, entered into the field of education because he had a firm belief that education is the key to make a difference. Bearing the vision of helping the children by understanding them, guiding them to the right path & strengthening their self-belief, Mr.Jethani started Chrysalis High. It is a chain of co-educational schools in Bangalore. It is a protected space for your child to grow and develop, to unfold and explore, to get a grip, and to fly.</p></html>",
        "sch_misn": "<html><p> Preparing children for the exam called life</p></html>",
        "sch_fac": "<html><p>Chrysalis High School offers some amazing facilities like swimming, skating, basketball, gymnastics, yoga, contemporary dance, western music, theatre and chess to name a few.</p></html>",
        "sch_loc": "<html><p>Chrysalis High, Survey No. 219/3 & 219/5, Varthur Main Road, Bengaluru, Karnataka 560087</p></html>",
        "sch_img": "",
        "sch_name": "Chrysalis HS"
        },
        {
        "sch_info": "<html><p>Founded by JGI, JIRS aims towards the holistic development of students by enriching their quality of life. It is a co-educational, residential school with more than 750 students. They believe to set the highest standards of academic achievement, intellectual growth, ethical awareness, behavior, sportsmanship, and other good qualities among their students. Through the years, their means of achieving success have changed, yet they maintain a particular balance of tradition and innovation that continues to provide exceptional opportunities for deserving students. </p></html>",
        "sch_misn": "<html><p>Jain International Residential School endeavors to lay the foundations for the student's future success and prepares them for the college/university of their choice and life beyond.</p></html>",
        "sch_fac": "<html><p> Arts, Clubs and Activities, Transportation, Food Canteen, Library, Labs, Music room, Sports courts, Swimming, Bowling</p></html>",
        "sch_loc": "<html><p>Jain Global Campus, Jakkasandra Post, Kanakapura, Karnataka 562112</p></html>",
        "sch_img": "",
        "sch_name": "jain school"
        }
        ]
    constructor()
    {
        console.log("get School constructor");
        super();
        this.state = {
            Schools : this.Schools
        }
    }
    async componentDidMount()
    {
        console.log("cmd")
       let data = await fetch("http://localhost:8080/getschools");
       let parsedData = await data.json();
       this.setState({Schools:parsedData['schools']});
    }
    render()
    {
        console.log("Render ..");

        return <div>
        <h3>Schools </h3>
        <div className="ContentDiv grid">
        {this.state.Schools.map((school,index)=>{
            return <>
            <div className="card">
            <img src={school.sch_img} width={300} height={200} ></img>
            <h2>{school.name}</h2>
            <ul>
            <li>{school.sch_misn}</li><br/>
            <li>{school.sch_info}</li><br/>
            <li>{school.sch_loc}</li>
            </ul>
           
            </div>
            </>
        })}
        </div>
    </div>
    }
}
