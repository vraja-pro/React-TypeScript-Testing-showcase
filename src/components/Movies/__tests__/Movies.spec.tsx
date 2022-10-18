import { toggleButtonClasses } from "@mui/material";
import { render, screen ,waitFor} from "@testing-library/react";
import Movies from "../Movies";

test("renders movies", async () => {
   render(<Movies />);
   const movies = await screen.findAllByTestId('movie');
   expect(movies.length).toBeGreaterThan(0);

});
