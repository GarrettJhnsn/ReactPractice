import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "../components/PageContent";

export default function NewsLetterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // Send To Backend Newsletter Server
  console.log(email);

  if (!data === null) {
    return { message: "Signup Successful!" };
  } else {
    return { message: "Signup Failed" };
  }
}
