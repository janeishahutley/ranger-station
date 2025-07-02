import Container from "@/components/Container/Container";
import { listItem, photoRules } from "@/data";

export default function MutantAccords() {
    return (
        <Container>
            <div className="ranger-station-border">
                <h1 className="ranger-station-center header">May the Power Protect You – Policies</h1>
                <h4 className="ranger-station-center">Cosplay and Weapons Policy</h4>
                <p className="ranger-station-para">
                    The Promoters of Ranger Station all started as cosplayers so we understand how 
                    important the perfect prop is to completing a cosplay.  With that said, we ask 
                    that all cosplayers keep Safety in mind, as we want to maintain a morphinonminal 
                    and secure environment. Please read this policy in full and follow the rules! 
                    If you violate this policy, you could be asked to leave Ranger Station without a refund.
                </p>
                <h4 className="ranger-station-subheader">
                    Any weapon that could seriously hurt somebody is not allowed. Specifically, but not limited to:
                </h4>
                <ul className="ranger-station-ul">
                    {listItem.map((item,i)=> (
                        <li key={i}>{item.listItem}</li>
                    ))}
                </ul>
                <p className="ranger-station-para">
                    Prop weapons are allowed into Ranger Station as long as they meet the following 
                    criteria; that they are composed of cardboard, foam, something light. Prop firearms 
                    are allowed only if they cannot be mistaken for real weapons. Prop bows will be allowed 
                    providing all arrows have soft tips and will not be shot. Props will be allowed at the 
                    discretion of Ranger Station staff and security personnel. 
                </p>
                <h4 className="ranger-station-center">Panel Room Policy </h4>
                <p className="ranger-station-para">
                    If you attend a panel and wish to attend the next panel, you will need to exit 
                    the room and enter the queue that is designated for the upcoming panel. 
                    No cutting in line. No holding spots in line for others. VIPs must be in line 
                    15 minutes before seating begins to use their priority seating benefit for panel 
                    rooms that will be cleared.  VIP Ticket holders will be seated first-come-first-
                    serve in the VIP section of each panel room.
                </p>
                <h4 className="ranger-station-center">Anti-Harassment Policy </h4>
                <p className="ranger-station-para">
                    Just like the Power Ranger Teams are all inclusive, Ranger Station is fostering 
                    this type of atmosphere at the convention and has a zero tolerance policy for harassment 
                    of any kind. Harassment includes, but is not limited to, verbal comments that reinforce 
                    social structures of domination related to gender, gender identity and expression, 
                    sexual orientation, disability, physical appearance, body size, race, age, religion; 
                    deliberate intimidation; stalking; following; harassing photography or recording; 
                    sustained disruption of talks or other events; inappropriate physical contact; and 
                    unwelcome sexual attention. Violation of this policy will result in removal from the event.
                </p>
                <p className="ranger-station-para">
                    Remember: Cosplay is not consent. Please be respectful and kind to each other. 
                    If you would like to take a picture with or of another Ranger Station Attendee, 
                    always ask first and respect that person’s right to say no. 
                </p>
                <p className="ranger-station-para">
                    Should you feel like you are being harassed in anyway, please find the nearest 
                    staff or security member so that a report can be made.  
                </p>
                <h4 className="ranger-station-center">Professional Photo-OP Policy </h4>
                <p className="ranger-station-para">
                    A professional photo is taken by a professional photographer. Our professional 
                    photographer will take and print an 8×10 photo of you and celebrity guest(s) onsite and in front of a backdrop.
                </p>
                <h4 className="ranger-station-subheader">Policy:</h4>
                <ul className="ranger-station-ul">
                    {photoRules.map((item,i)=> (
                        <li key={i}>{item.listItem}</li>
                    ))}
                </ul>
                <div className="ranger-station-container">
                    <h2 className="ranger-station-center">GUEST & ARTIST POLICY</h2>
                    <p className="ranger-station-para">
                        All information regarding attendance, appearance times & fees, photo opportunities 
                        and signatures of Celebrity Guests, Cosplayers, Artists & Writers to Ranger Station 
                        are subject to change at any time. We do not accept any liability for any loss, damage, 
                        cost or expense (whether direct, indirect, consequential or otherwise) incurred by 
                        any person whatsoever arising out of or referable to the information on this 
                        website or accessed through this website.
                    </p>
                </div>
            </div>
        </Container>
    )
}