import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import ProductType from "models/types/ProductType";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/hero.jpg";
import SpeedImage from "draws/Speed";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = ({ product }) => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>{product.title}</h1>
      </Heading>
      <BreadCrumb
        items={[
          { label: "Início", link: "/" },
          { label: "Serviços" },
          { label: product.title },
        ]}
      />
    </Hero>
    <Section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos porro
        velit, ullam enim iusto necessitatibus dignissimos atque nam harum
        facere minus, ducimus magnam voluptate error dolorum sint rem. Corrupti,
        cupiditate.
      </p>
      <p>
        Architecto iure, magnam, quaerat officia veritatis, assumenda pariatur
        debitis nulla maiores dolore molestias facilis quis repellat esse modi
        autem laboriosam quia rerum iusto velit nisi aperiam culpa. Fugit,
        sapiente maxime?
      </p>
      <p>
        Explicabo, molestias dolorem. Harum eaque id odio quasi culpa deleniti
        quis unde autem sapiente dolorem cum minima dolores iure, nesciunt non.
        Dolore dignissimos quasi sed laboriosam, hic aspernatur ipsum? Cum!
      </p>
      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faça sua matrícula agora mesmo</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            quidem vel perferendis et a, porro atque officia aliquid voluptate
            recusandae, corporis obcaecati delectus aut repellendus, doloribus
            aspernatur libero? Quasi, consequuntur?
          </p>
          <CalloutActions>
            <Button color="primary">Matricular</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.propTypes = {
  product: ProductType,
};

export default ProductDetail;
