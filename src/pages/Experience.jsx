import React from 'react'
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";



export default function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2019 - 2020' iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> City of Liverpool College, Merseyside </h3>
          <p> Access to Higher Education (Distinction)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lancaster University
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            BA Hons 
          </h4>

          <p> Psychology and Criminology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#8b8b8b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Young people and Children Ambassador 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            LU Students Union
          </h4>
          <p>Taught primary students topics such as democracy, environmental sustainability and mental health at the university's lecture theathres as well as conducting developmental activities for the children to enjoy their time at university </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#8b8b8b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lecturer 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            City of Liverpool College 
          </h4>
          <p>
          Lecturing the subjects of Psychology, Criminology and Mental Health. I take on the role of guiding and inspiring students toward the attainment of their academic and personal aspirations </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#8b8b8b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Engagement Excecutive  
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tritone Health, Lancaster 
          </h4>
          <p>Working alongside a passionate team in a medical software company building digital tools for patients with intellectual and developmental disabilities</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
