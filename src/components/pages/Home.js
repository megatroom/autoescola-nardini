import React from "react";
import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProductType from "models/types/ProductType";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/hero.jpg";
import AboutVideo from "assets/about.mp4";

const Home = ({ products }) => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br />
          para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      <Button color="primary" variant="outlined">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Nardini Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            modi veritatis voluptatem pariatur fuga in, accusantium recusandae
            assumenda eum, cumque odio minus quo aut sed molestiae nobis vitae a
            voluptatibus.
          </p>
          <div>
            <Button as={Link} to="/sobre" color="primary">
              Saiba mais
            </Button>
          </div>
        </div>
        <div>
          <video
            src={AboutVideo}
            width="100%"
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          veritatis autem reprehenderit necessitatibus laborum perspiciatis.
          Repellat mollitia minus, eum eos excepturi quos placeat culpa ea
          consequuntur facere vel. Consequatur, reiciendis.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          veritatis autem reprehenderit necessitatibus laborum perspiciatis.
          Repellat mollitia minus, eum eos excepturi quos placeat culpa ea
          consequuntur facere vel. Consequatur, reiciendis.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          veritatis autem reprehenderit necessitatibus laborum perspiciatis.
          Repellat mollitia minus, eum eos excepturi quos placeat culpa ea
          consequuntur facere vel. Consequatur, reiciendis.
        </Accordion>
        <Accordion title="Quanto tempo é necessário para tirar a primeira habilitação?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          veritatis autem reprehenderit necessitatibus laborum perspiciatis.
          Repellat mollitia minus, eum eos excepturi quos placeat culpa ea
          consequuntur facere vel. Consequatur, reiciendis.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default Home;
