import React from "react";

function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-yellow-50 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81"
            alt="Choir singing"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold text-yellow-600 mb-6">
            About Mwangaza Melodies
          </h1>

          <p className="text-lg mb-4 text-gray-700 leading-relaxed">
            <strong>Mwangaza Melodies</strong> is more than just a choir —
            it is a family brought together by a shared love for music,
            worship, and community. Through our voices, we spread hope,
            inspiration, and the joy of singing.
          </p>

          <p className="text-lg mb-4 text-gray-700 leading-relaxed">
            Since our founding in <strong>2025</strong>, we have dedicated
            ourselves to uplifting hearts through powerful choral
            performances that blend gospel, African rhythms, and
            contemporary worship music.
          </p>

          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            Every rehearsal and performance is an opportunity for us to
            grow spiritually, musically, and as a united community.
            Our mission is to inspire, connect, and bring light to the
            world through song.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white shadow-md p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-yellow-600">20+</h3>
              <p className="text-gray-600">Choir Members</p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-yellow-600">100+</h3>
              <p className="text-gray-600">Performances</p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-yellow-600">10+</h3>
              <p className="text-gray-600">Awards</p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-yellow-600">2025</h3>
              <p className="text-gray-600">Founded</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-700 transition">
            Join Our Choir
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;