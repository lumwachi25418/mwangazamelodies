function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-6">

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-600 mb-4">
          What People Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our choir is blessed to serve the church and community.
          Here are a few words from those who experience our music and ministry.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Vicar */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  alt="Choir Member"
  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
/>
          <p className="text-gray-600 italic mb-4">
            "Mwangaza Melodies brings spiritual depth and beauty to our worship.
            Their voices uplift the congregation and help us experience the
            presence of God in a powerful way."
          </p>
          <h4 className="font-bold">Rev. Leah Minae</h4>
          <p className="text-sm text-gray-500">Church Vicar</p>
        </div>

        {/* Choir Member */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
  alt="Vicar"
  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
/>
          <p className="text-gray-600 italic mb-4">
            "Being part of Mwangaza Melodies has helped me grow spiritually
            and musically. It is truly a family where we support each other
            and serve God through song."
          </p>
          <h4 className="font-bold">Dr. Joshua Omondi</h4>
          <p className="text-sm text-gray-500">Choir Director</p>
        </div>

        {/* Church Warden */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
         <img
  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
  alt="Vicar"
  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
/>
          <p className="text-gray-600 italic mb-4">
            "The dedication and discipline of this choir is inspiring.
            They continue to bless the church with uplifting music
            during services and special events."
          </p>
          <h4 className="font-bold">Moses Muigwa</h4>
          <p className="text-sm text-gray-500">Chairman</p>
        </div>

        {/* Congregation Member */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
  alt="Vicar"
  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
/>
          <p className="text-gray-600 italic mb-4">
            "Whenever the choir sings, the entire church is filled with joy.
            Their music inspires us and strengthens our faith every week."
          </p>
          <h4 className="font-bold">Nich Matheri</h4>
          <p className="text-sm text-gray-500">Congregation Member</p>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;