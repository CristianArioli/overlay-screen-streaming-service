import styled from 'styled-components';
import { Tabs } from "antd";

export const Container = styled.div`
  background-image: linear-gradient(to right, #12171a , #000000);
  padding: 0 3rem;
  height: 25vh;
  width: 100%;
  z-index: 999;
  position: absolute;
  bottom: 0;
  overflow-y: scroll;

  .ant-tabs {
    height: 100%;
    padding: 0 1rem 1rem 1rem;

    div {
      font-size: 1.5rem;
      color: var(--text-body) !important;
    }
  }

  .ant-tabs-content-holder{
    padding-top: 1rem;
  }
`;

export const TabsContainer = styled(Tabs)`
  & .ant-tabs-nav{
    margin-bottom: 0 !important;
  }
  & .ant-tabs-nav-list {
    display: flex;
    gap: 2rem;
  }
`;