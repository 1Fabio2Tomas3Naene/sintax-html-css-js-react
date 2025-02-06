import "./globals.css";

export const metadata = {
  title: "Sintax - html css js react",
  description: "sintax das linguagens html css js e react.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
