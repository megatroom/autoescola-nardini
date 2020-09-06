import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola Nardini</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            repellendus deleniti qui nemo minima quibusdam corrupti eius porro,
            soluta vero modi doloribus, minus dolor assumenda officia voluptatum
            neque ipsam voluptate?
          </p>
          <p>
            Dignissimos amet non quam quae. Blanditiis amet explicabo numquam
            commodi cumque iusto labore doloribus illum inventore. Labore,
            cupiditate qui neque ipsum sit soluta laboriosam repellat totam
            consequuntur quasi ab corrupti?
          </p>
          <p>
            Eum ut facere aperiam, sit iste deleniti quam fugit ea sequi
            quibusdam expedita in commodi eos laboriosam veritatis quod placeat
            modi dignissimos. Aliquid nesciunt soluta quisquam iusto? Eveniet,
            non soluta.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            consequatur commodi. Iure, quasi unde consequatur deserunt odio
            animi? Sapiente facere id optio ad, repellendus voluptatibus. Labore
            et doloremque praesentium earum.
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex
            aspernatur consectetur. Consectetur dolore, error at, debitis
            officiis impedit sequi porro expedita facilis voluptates, labore aut
            ducimus. Earum, reiciendis repellendus.
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Odit aut quia reiciendis corporis aspernatur, necessitatibus
            inventore id ullam vitae, ratione pariatur, repellat dolorum omnis
            molestiae delectus ad sequi error! Magnam necessitatibus voluptates
            laborum vitae nisi accusamus excepturi asperiores?
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
