import PropTypes from "prop-types";

export function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: " Task Tracker"
};

Header.PropTypes = {
  title: PropTypes.string.isRequired
};
