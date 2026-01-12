import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
// import ShopItems from "../../../reactApp/reactAppBenny/state-demo/src/ShopPage/ShopItems";

export default function SandBox({ data }) {
  return (
    <div>
      <Avatar
        alt="Beeny Bar"
        src={data.img ? URL.createObjectURL(data.img) : ""}
        sx={{ width: 56, height: 56 }}
      />
      <h1>Welcome home {data.userName}</h1>
      <Button variant="contained">Hello</Button>
      <Button variant="outlined" color="warning">
        Hello
      </Button>
      <Button variant="contained" color="warning" size="small">
        Hello
      </Button>
      <Button variant="contained" color="warning" size="large">
        Hello
      </Button>
      <Button variant="contained" disabled>
        Hello
      </Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Hello
      </Button>
      <Button variant="contained">Hello</Button>
    </div>
  );
}
