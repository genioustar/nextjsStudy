// /movies/:id로 호출하면 ID값이 넘어오면서 호출되는 페이지!

import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Details({ vari }) {
  const router = useRouter();
  // const [title, id] = router.query.params || [];
  const [title, id] = vari || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { vari } }) {
  console.log(vari);
  return {
    props: { vari },
  };
}
