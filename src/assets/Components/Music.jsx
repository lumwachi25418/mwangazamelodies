
    function Music() {
  return (
    <section className="bg-gray-50 py-16 px-6">

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-600 mb-4">
          Our Music
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the harmony and inspiration of Mwangaza Melodies.
          Watch some of our performances and worship moments that uplift
          hearts and bring people together through music.
        </p>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Video 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/3zO0799O60U?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className="p-4">
            <h3 className="font-semibold text-lg">
              Worship Performance
            </h3>
            <p className="text-gray-500 text-sm">
              Live church worship session
            </p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kJ5oWZXx6MU?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <div className="p-4">
            <h3 className="font-semibold text-lg">
              Gospel Concert
            </h3>
            <p className="text-gray-500 text-sm">
              Choir live performance
            </p>
          </div>
        </div>

        {/* Video 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/du8HSsXpb70?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className="p-4">
            <h3 className="font-semibold text-lg">
              Special Worship Song
            </h3>
            <p className="text-gray-500 text-sm">
              Inspirational choir music
            </p>
          </div>
        </div>

      </div>

      {/* YouTube Button */}
      <div className="text-center mt-12">
        <a
          href="https://www.youtube.com/@MwangazaMelodiesSingers"
          target="_blank"
          className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition"
        >
          Visit Our YouTube Channel
        </a>
      </div>

    </section>
  );
}

export default Music;
  
   