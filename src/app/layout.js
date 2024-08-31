import "./globals.css";

export const metadata = {
  title: "M - Agência Digital",
  description: "Projeto de agencia digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
