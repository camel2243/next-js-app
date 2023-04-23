export default function Cookies({ cookies = '' }) {
  return (<section className="p-2">
    <h1 className="text-xl">document.cookies:</h1>
    <p>{`> ${cookies}`}</p>
  </section>);
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;

  return {
    props: {
      cookies
    },
  };
}