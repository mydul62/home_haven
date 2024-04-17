import {Helmet} from "react-helmet";
const PageTitle = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>HomeHaven|{title}</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;