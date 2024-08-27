import "./SpinningLogo.css"; // Import the CSS for spinning effect

const SpinningLogo = () => {
  return (
    <div className="spinning-logo-container">
      <img
        width={100}
        height={100}
        src="/path/to/your/logo.png"
        alt="Logo"
        className="spinning-logo"
      />
    </div>
  );
};

export default SpinningLogo;
