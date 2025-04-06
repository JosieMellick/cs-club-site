import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Fancy formatting stuff */}
      <div className="flex flex-col items-center justify-center">
        <div style={{ height: 40, width: 1 }}></div>

        {/* Allows image and text to be side by side */}
        <div className="flex items-center space-x-6">
          {/* Headshot */}
          <Image
            className="rounded-lg"
            width={300}
            height={300}
            src="/images/josie/Headshot.png"
            alt="Mellick Headshot"
          />

          {/* Name and email */}
          <div className="text-center">
            <h1 className="text-7xl text-white">Josie Mellick</h1>
            <p>University of Northwestern - St. Paul</p>
            <Link
              href="https://www.linkedin.com/in/josie-mellick-60b430327?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXxqV4ocSQjyo4ZAktwkKvQ%3D%3D"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div style={{ height: 40, width: 1 }}></div>

        {/* Introduction and bio */}
        <div className="mx-auto max-w-3xl rounded-lg bg-gray-900 p-4 shadow">
          <h2 className="py-4 text-left text-2xl text-white">About Me</h2>
          <p className="text-md py-4 text-left">
            My name is Josie Mellick and I have a passion for programming.
            I&apos;m currently a sophomore computer science student at UNW. My
            experience is primarily with Python, Java, and C++.
          </p>
          <p className="text-md py-4 text-left">
            My main interest is in video game programming. I am currently
            learning C++ and Unreal Engine to get familiar with how games are
            made, and I look forward to growing in this area.
          </p>
          <p className="text-md py-4 text-left">
            Outside of computer science, I enjoy playing the guitar and I&apos;m
            on Northwestern&apos;s flag football team.
          </p>
        </div>

        {/* Projects */}
        <h1 className="py-6 text-center text-5xl text-white">Projects</h1>

        <div className="mx-auto max-w-3xl rounded-lg bg-gray-900 p-4 shadow">
          {/* Systems A & D Jack Links project */}
          <h2 className="py-4 text-left text-2xl text-white">
            Offloading Automation for Jack Links
          </h2>
          <p className="text-md py-4 text-left text-white">
            A partner and I designed and created a script to automate the
            multi-step offboarding process. We designed it to work with the
            pre-existing Microsoft Entra system. This project was completed for
            UNW&apos;s Systems Analysis & Design class. The poster we made for
            this project is shown below.
          </p>

          <div style={{ height: 20, width: 1 }}></div>

          <div className="flex flex-col items-center justify-center">
            {/* Systems A & D poster */}
            <Image
              className="rounded-lg"
              width={520}
              height={400}
              src="/images/josie/JackLinksProject.png"
              alt="Systems A&D Poster"
            />
          </div>

          <div style={{ height: 30, width: 1 }}></div>
        </div>

        {/* Insert more awesome projects here */}
        <h2 className="py-4 text-left text-2xl text-white">More to come...</h2>
      </div>
    </div>
  );
}
