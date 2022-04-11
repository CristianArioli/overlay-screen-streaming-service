import styled from "styled-components";
import { Tabs } from "antd";
import 'antd/lib/tabs/style/index.css';
import { Collapse } from "antd";

export const Container = styled.div`
  height: 61vh;
  display: flex;
  justify-content: end;

  & .ant-tabs {
    @media (min-width: 761px) {
      width: 30%;
    }
    @media (max-width: 760px) {
      width: 50%;
    }
    @media (max-width: 460px) {
      width: 100%;
    }
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    padding: 0rem 1rem 1rem 1rem;
    -webkit-box-shadow: 14px 7px 15px 21px rgba(0, 0, 0, 0.2);
    box-shadow: 14px 7px 15px 21px rgba(0, 0, 0, 0.2);
    overflow-y: scroll;
  }
  & .ant-tabs-tab {
    font-size: 1.5rem;
    color: var(--text-body);
  }

  & .ant-tabs-tab > div {
    &:hover {
      color: #225739 !important;
    }
  }
`;

export const TabsContainer = styled(Tabs)`
  button {
    background: transparent;
    border: none;
  }

  & .ant-tabs-nav{
    position: fixed;
    margin-bottom: 0 !important;
  }
  & .ant-tabs-nav-list {
    display: flex;
    gap: 2rem;
  }
`;

export const TabPaneContainer = styled(Tabs.TabPane)`
  color: var(--text-title);
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-bottom: 1rem;
  font-size: 1.3rem;
`;

export const CollapseContainer = styled(Collapse)`
  & .ant-collapse-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .ant-collapse-item {
    padding: 0.5rem;
    background: transparent;
    border-bottom: 1px solid var(--text-body) !important;
    font-size: 1rem;
    color: var(--text-body);
  }

  & .ant-collapse {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const RoundedButtonContainer = styled.div`
  border-radius: 1rem;
  background: transparent;
`;

export const CollapsePanelContainer = styled(Collapse.Panel)`
  & .ant-collapse-content{
    background: transparent;
  }

  transtion: all ease 0.2s;
`;