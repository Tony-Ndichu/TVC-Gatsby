import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import '../utils/fontawesome'
import { Link } from "gatsby";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  secondaryBar: {
    backgroundColor: 'white',
    color: '#0c2340',
    borderBottom: '3px solid #d2d2d2',

    [theme.breakpoints.up('md')]: {
      backgroundColor: '#0c2340',
      color: 'white',
      borderBottom: '3px solid #081629'
    }
  }
}));

const SecondaryBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.secondaryBar}>
        <Wrapper className="no-bullets">
        <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: '#0c2340',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
          <Item>
            <Icon>
              <FontAwesomeIcon icon={"home"} />
            </Icon>
            <Description>Home</Description>
          </Item>
          </Link>

          <Link
                to="/academics"
                style={{
                  textDecoration: 'none',
                  color: '#0c2340',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
          <Item>
            <Icon>
              <FontAwesomeIcon icon={"book"} />
            </Icon>
            <Description>Academics</Description>
          </Item>
          </Link>

          <Link
                to="/contacts"
                style={{
                  textDecoration: 'none',
                  color: '#0c2340',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
          <Item>
            <Icon>
              <FontAwesomeIcon icon={"envelope"} />
            </Icon>
            <Description>Contacts</Description>
          </Item>
          </Link>


          <Link
                to="/media"
                style={{
                  textDecoration: 'none',
                  color: '#0c2340',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
          <Item>
            <Icon>
              <FontAwesomeIcon icon={"images"} />
            </Icon>
            <Description>Media</Description>
          </Item>
          </Link>
        </Wrapper>
      </AppBar>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: auto;
  text-align: center;
  font-size: 0.75rem;
  cursor: pointer;

  @media only screen and (min-width: 960px) {
    flex-direction: row;
    padding: 20px;
    line-height: 1rem;
    font-size: 1.125rem;
    margin: 0;
  }
`;

const Icon = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 5px;

  @media only screen and (min-width: 960px) {
    margin-right: 10px;
  }
`;

const Description = styled.div`
  display: flex;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
`;

export default SecondaryBar;
