import DashboardPage from "./app/dashboard/page";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pmn-okr-theme">
      <DashboardPage />
    </ThemeProvider>
  );
}

export default App;
