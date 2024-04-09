import { render, screen } from "@testing-library/react";
import App from "./App";
describe("LoginForm", () => {
  it("renders correctly", () => {
    render(<App />);

    const appComponent = screen.getByTestId(`app-component`);
    expect(appComponent).toBeInTheDocument();
  });
});
