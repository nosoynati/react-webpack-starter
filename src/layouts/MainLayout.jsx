import Header from "../components/header/Header.jsx";

export default function MainLayout({children}) {

  return (
    <div className="main">
      <Header />
      {children}
    </div>
  );
}