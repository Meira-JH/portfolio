import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-scroll";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  menuButton: {
    backgroundColor: "#ffff",
    "&:hover": {
      backgroundColor: "rgb(216, 17, 89, 0.1)",
    },
  },
  menuIcon: {
    color: "#8F2D56",
    "&:hover": {
      color: "#8F2D56",
    },
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#8F2D56",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function HiddenMenu(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={classes.menuButton}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        <MenuIcon className={classes.menuIcon} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="whoAmI" smooth={true} duration={600} onClick={handleClose}>
          <StyledMenuItem className={classes.menuItem}>
            <ListItemText primary="Quem sou" />
          </StyledMenuItem>
        </Link>

        <Link to="projects" smooth={true} duration={1000} onClick={handleClose}>
          <StyledMenuItem>
            <ListItemText primary="Projetos" />
          </StyledMenuItem>
        </Link>
        <Link to="contact" smooth={true} duration={1100} onClick={handleClose}>
          <StyledMenuItem>
            <ListItemText primary="Vamos conversar?" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
