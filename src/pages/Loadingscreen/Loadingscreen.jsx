import { useContext, useEffect } from "react";
import { loadingContext } from "../../Context/Context";

const Loadingscreen = () => {
  const { loading, setLoading } = useContext(loadingContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section>
      <h1>Loading...</h1>
    </section>
  );
};

export default Loadingscreen;
