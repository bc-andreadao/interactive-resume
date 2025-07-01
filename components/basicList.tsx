import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type Props = {
  list: string | undefined;
  listType: "ul" | "ol";
};

export function BasicList({ list, listType }: Props) {
  const steps = list?.split(".").filter( element => element !== "");

  return (
    <List component={listType} className="!ml-18" sx={{ listStyleType: listType==="ol" ? "decimal" : "disc"}}>
      {steps?.map((step, i) => (
        <ListItem
          key={i}
          sx={{ display: "list-item"}} // Ensures the list item displays correctly
        >
          <ListItemText primary={step.trim()} />
        </ListItem>
      ))}
    </List>
  );
}