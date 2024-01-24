export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <section className="text-center pb-10">
      <div className="flex justify-center w-full">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fHww"
          alt="aboutpicture"
        />
      </div>
      <h1 className="text-4xl font-bold mt-6">Welcome Everyone 🙌</h1>
      <div className="mx-6">
        <p className="my-6">
          This website is to show the information of movie and videos that are
          related to the movie you clicked
        </p>
        <p>Please, check movies you want to know !</p>
      </div>
    </section>
  );
}
