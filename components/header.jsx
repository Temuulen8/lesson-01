const Header = () => {
  return (
    <header
      style={{
        color: "white",
        display: "flex",
        height: "80px",
        backgroundColor: "#333",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
        alt="logo"
      />
      <div>
        <ul className="menu">
          <li>home</li>
          <li>service</li>
          <li>about</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
