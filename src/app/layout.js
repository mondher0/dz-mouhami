import "./globals.css";
import ContainerProvider from "./ContainerProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContainerProvider>{children}</ContainerProvider>
      </body>
    </html>
  );
}
