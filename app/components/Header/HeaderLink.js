import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  flex-wrap: nowrap;
  padding: 0.25em 2em;
  margin: 1em;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 13px;
  border: 0px solid #41ADDD;
  color: #bfa69a;
  -webkit-transition: color 0.3s linear;
  -moz-transition: color 0.3s linear;
  -o-transition: color 0.3s linear;
  
  &:hover {
    color: rgba(255,255,255,1);
  }
`;
