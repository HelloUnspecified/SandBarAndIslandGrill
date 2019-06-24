import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Fragment } from 'react';
import Hero from '../components/Hero'
import ContentSection from '../components/ContentSection'

const InfoBlock = styled.div`
  max-width: 800px;
  margin: auto;
  padding-bottom: 2.5rem;
`;

const Description = styled.p`
  margin: 0;
`;

const about = props => (
  <ParallaxProvider>
    <Fragment>
      <Hero
        imagePath="/static/images/home-entrance.jpg"
        heading="Sandbar and Island Grill"
        subheading="Our Story"
      />

      <ContentSection
        image='../static/images/conversation.jpg'
        title="How We Got Started"
        align='left'
      >
        <Description>
          The Sand Bar & Island Grill is a waterfront, "open-air" establishment located in the Lake Elizabeth marina literally a few feet away from the shore.
          <br/><br/>
          It was founded in 2009 by Carlo DiCarlo, a Twin Lakes resident who has spent a great deal of his time on Florida's Suncoast in the Tampa Bay/Clearwater area.
          <br/><br/>
          Carlo grew to greatly enjoy the abundant array of seafood featured in so very many restaurants along the gulf of Mexico's Florida beaches. The informal, laid-back culture of that area led him to furnish and decorate the restaurant and bar in a colorful, rustic Key West style.
        </Description>
      </ContentSection>

      <ContentSection
        image='../static/images/tacos-and-rings.jpg'
        title="Inspired Menu"
        align='right'
      >
        <Description>
          The menu selections are very Florida-inspired as well. They include blackened Grouper, grilled Mahi-Mahi, seared Ahi Tuna, along with weekly specials such as Marlin, Amberjack and Soft Shell Crab. One of our signature appetizers is a Clearwater-inspired smoked fish spread made from scratch in the Sand Bar's kitchen by our own chef. We feature fresh-shucked oysters every Friday, Saturday and Sunday along with steamed mussels bathed in garlic butter and white wine. For those who prefer "turf" over "surf" we serve three top-quality Filet Mignon "Sliders" on toasted buns topped with Dijon Mayonaise and shaved Red Onions. Our half-pound Burgers are made with the very finest Angus beef available. Our Mango-infused Cole Slaw is a tropical delight.
          <br/><br/>
          A visit to our place will surely put you in a Caribbean state of mind and treat you to vistas of our beautiful lake and the breathtaking sunsets you will enjoy as evening sets in. We are open for lunch and dinner seven days a week.
        </Description>
      </ContentSection>

      <ContentSection
        image='../static/images/testimage.jpg'
        title="Would You Like To Join The Team?"
        align='left'
      >
        <Description>
          The Sand Bar and Island Grill is always on the search for the right people to join our island crew. We have the following employment opportunities available:
          <ul>
            <li>Line Cook</li>
            <li>Prep Cook</li>
            <li>Busser</li>
            <li>Hostess</li>
            <li>Server</li>
            <li>Bartender</li>
            <li>Parking Lot attendant</li>
          </ul>
          Must have own transportation and be able to work nights, weekends and holidays.
        </Description>
      </ContentSection>
    </Fragment>
  </ParallaxProvider>
);

export default about;
