import { Helmet } from "react-helmet";

const Title = () => {
  return (
    <Helmet>
      <title>Venus</title>
      <link rel="icon" type="image/svg+xml" href="./src/assets/venus.svg" />
      <link
        rel="shortcut icon"
        href="../../assets/venus.png"
        type="image/x-icon"
      />
    </Helmet>
  );
};

export default Title;
