
import { cardStyle, subTitleStyle, titleStyle } from './CSS/styles'
import { CCardBody, CCard, CCardTitle, CButton, CCardText, CCardImage } from '@coreui/react'
import { buttonStyle, divSection, divStyle, inverseButtonStyle } from "./CSS/styles"

export default function EventCard({ eventsJson, sectionID }) {
  return (
    <section id={sectionID}>
      <h1 style={titleStyle}>Events</h1>
      <div style={divSection}>
        {eventsJson.map((event) => (
          <CCard style={cardStyle}>
            <CCardBody>
              <CCardImage orientation="top" src={event.image} />
              <CCardTitle style={subTitleStyle}>{event.title}</CCardTitle>
              <CCardText>{event.description}</CCardText>
              <CCardText>{event.location}</CCardText>
              <CButton style={inverseButtonStyle} href={event.link}>
                RSVP
              </CButton>
            </CCardBody>
          </CCard>
        ))}  
      </div>
    </section>
  )
}

