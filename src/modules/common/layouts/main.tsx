import Navbar from "../components/navbar"

const MainLayout = (props) => {
  return (
    <div className={'main-root'}>
      <Navbar />
      {props.children}
    </div>
  );
}

export default MainLayout;
