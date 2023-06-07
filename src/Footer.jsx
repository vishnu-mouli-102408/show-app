import "../public/styles.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Vishnu Mouli. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
