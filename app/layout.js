import "./globals.css";
import ContainerProvider from "./ContainerProvider";
import StoreProvider from "./StoreProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ContainerProvider>{children}</ContainerProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
