import './style.css';

const Header = (props) => {
  const obj = props;
  const { bkArrow, frArrow } = obj;
  return (
    <header>
      <div className="header">
        <div>
          {bkArrow}
        </div>
        <h1>
          Indian Mutual Funds
        </h1>
        <div>
          {frArrow}
        </div>
      </div>
    </header>
  );
};

export default Header;
