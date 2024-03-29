import "./Navbar.css";
import { styled } from "@mui/material/styles";
//Developed by Javier Giberg
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
function Navbar(props) {
  function cssRadio() {
    if (!props.css) {
      props.setCss(true);
    } else {
      props.setCss(false);
    }
  }

  return (
    <div>
      <nav className="navbar_container">
        <h6 className="nav-brand">GoCode Dreams</h6>

        <Button href="/" className="nav-link">
          Chacnge Status
        </Button>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>CSS2</Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
            onClick={cssRadio}
          />

          <Typography>CSS1</Typography>
        </Stack>
        <div className="navbar_filter">
          <small>Filter Dreams </small>
          <div>
            <select
              className="search-bar"
              onChange={(e) => props.select(e.target.value)}
            >
              <Filter filter={props.sortlist} />
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Filter(props) {
  return props.filter.map((colle, index) => (
    <option key={index} value={colle.collection}>
      {colle.collection}
    </option>
  ));
}
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
export default Navbar;
