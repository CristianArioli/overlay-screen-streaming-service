// import { Tab, Tabs } from "react-tabs";
import { Tabs } from "antd";
import LogoTelecine from '../../assets/logo-telecine.svg';
import GeneralInformations from "../GeneralInformations/generalInformations";
import CastInformations from "../CastInformations/castInformations";
import {
  Container,
  TabsContainer,
} from "./informationsTabs.styled";

function InformationsTabs({ showCast, showSynopsis }) {

  const generateTelecineLogo = () => (
    <img src={LogoTelecine} height="30px" alt="Botão para acessar a Telecine" />
  );

  return (
    <Container>
      <TabsContainer defaultActiveKey="1" tabBarExtraContent={generateTelecineLogo()} >
        <Tabs.TabPane tab="Geral" key="1">
          <GeneralInformations showSynopsis={showSynopsis} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Elenco" key="2">
          <CastInformations showCast={showCast} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Principais Prêmios" disabled key="3">
        </Tabs.TabPane>
      </TabsContainer>
    </Container>
  );
}

export default InformationsTabs;
