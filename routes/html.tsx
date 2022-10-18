import { PageProps } from "$fresh/server.ts";

export default function Page(props: PageProps) {
  return <div class="text-center font-bold align-middle">You are on the page '{props.url.href}'</div>;
}
